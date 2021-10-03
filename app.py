import flask
from flask import Flask, send_from_directory, request, jsonify, send_file
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
import os
import time
import importlib

import flask_sqlalchemy
import flask_praetorian
import flask_cors
from pathlib import Path
import zlib
import zipfile

from U_square_net.model_loader import model_load
from U_square_net.video_processor import *

app = Flask(__name__, static_url_path='', static_folder='./src')
CORS(app) #comment this on deployment
api = Api(app)
username = ""
filename1 = ""
filename2 = ""

db = flask_sqlalchemy.SQLAlchemy()
guard = flask_praetorian.Praetorian()
cors = flask_cors.CORS()

#####   File names   ######
model_name='u2net'
# 307200 = 640 * 480; 921600 = 1280 * 720; 2073600 = 1920 * 1080
out_frame_area = 307200 

##### Directory paths #####
dir_path = os.path.dirname(os.path.realpath(__file__))

def fg_dir(dir_path, username, fold):
    fg_dir = os.path.join(dir_path, 'user_data', username, 'foreground', fold)
    return fg_dir

def bg_dir(dir_path, username, fold):
    bg_dir = os.path.join(dir_path, 'user_data', username, 'background', fold)
    return bg_dir

def processed_dir(dir_path, username, fold):
    processed_dir = os.path.join(dir_path, 'user_data', username, 'processed', fold)
    return processed_dir

#####   File paths   ###### 

def output_path(dir_path, username):
    out_video_path = os.path.join(dir_path, 'user_data', username, 'processed', 'output', 'output.mp4')
    out_gif_path = os.path.join(dir_path, 'user_data', username, 'processed', 'output', 'gif_output.gif')
    return out_video_path, out_gif_path

model_path = os.path.join(dir_path, 'U_square_net', 'saved_models', model_name+'_human_seg', model_name + '_human_seg.pth')

#####   DL model loading   #####
net = model_load(model_name, model_path)

# A generic user model that might be used by an app powered by flask-praetorian
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.Text)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True, server_default='true')

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active

app.debug = True
app.config['SECRET_KEY'] = 'top secret'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

# Initialize the flask-praetorian instance for the app
guard.init_app(app, User)

# Initialize a local database for the example
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dir_path + '/database.db'
db.init_app(app)

# Initializes CORS so that the api_tool can talk to the example app
cors.init_app(app)

# Add users for the example
with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(email='ivan@gmail.com').count() < 1:
        db.session.add(User(
          email='ivan@gmail.com',
          password=guard.hash_password('strongpassword'),
          roles='admin'
            ))
    db.session.commit()

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/api/upload", methods=['GET'])
def get():
    return {
      'resultStatus': 'SUCCESS',
      'message': "AI.Remove Api Handler"
      }

@app.route("/api/getuser", methods=['POST'])
def userfiles():
    global filename1
    global filename2
    return {
        "filename1":filename1,
        "filename2":filename2
    }

@app.route("/api/upload/foreground", methods=['POST'])
def post():
    """global filename1
    #files = request.files
    file = request.files['file']
    print(file)
    file.save(os.path.join(dir_path + "/user_data/" + username + "/foreground", file.filename))
    #############################
    #nn to process file
    #############################
    filename1 = dir_path + "/user_data/" + "pam2" + "/processed/processed_mask/pic1.jpeg"
    return filename1"""
    
    global username
    
    if username == "":
        username = 'logout_user'
       
    fg_frame_dir                          = fg_dir(dir_path, username, 'frame')
    fg_mask_dir                           = fg_dir(dir_path, username, 'mask')
    fg_input_dir                          = fg_dir(dir_path, username, 'input')
    
    process_dir                           = processed_dir(dir_path, username, 'output')
    
    output_video_path, output_gif_path    = output_path(dir_path, username)

    # Set the number of frames of uploaded video  
    basic_fg_len = 3
    
    # Old folders removing and new folders creating  
    removed_folders = [fg_frame_dir, fg_mask_dir, fg_input_dir, process_dir]
    fold_updater(removed_folders)


    file = request.files['file']
    print(file)
    fg_path = os.path.join(fg_input_dir, file.filename)
    file.save(fg_path)
    
    #####  DL procesing  #####
    
    # Convert a video to the video frames and
    # predict the video frames
    start_time_fg_video2img = time.time()
    fg_frame_length, fg_h, fg_w = fg_video2img(fg_path, fg_mask_dir, fg_frame_dir, net, basic_fg_len, out_frame_area)
    
    print("-- TIME fg_video2img -- %s seconds ---" % (time.time() - start_time_fg_video2img))

    # Convert the predicted video frames to video with alpha channel
    bg_status = 'alpha_channel'
    bg_frame_length=1
    
    start_time_mask2video = time.time()

    chess_bg = chessbackground_creater(fg_h, fg_w)
    mask2video(output_video_path, fg_mask_dir, fg_frame_dir, chess_bg, output_gif_path, bg_status, bg_frame_length, fg_frame_length)
    print("-- TIME ALPHA mask2video -- %s seconds ---" % (time.time() - start_time_mask2video))
    
    filename = ''
    return filename


@app.route("/api/upload/background", methods=['POST'])
def post2():
    """global filename2
    file = request.files['file']
    print(file)
    file.save(os.path.join(dir_path + "/user_data/" + username + "/background", file.filename))
    
    filename2 = dir_path + "/user_data/" + "pam2" + "/processed/processed_frame/pic2.png"
    return filename2"""
    
    global username
    
    if username == "":
        username = 'logout_user'

    fg_frame_dir                          = fg_dir(dir_path, username, 'frame')
    fg_mask_dir                           = fg_dir(dir_path, username, 'mask')
    bg_input_dir                          = bg_dir(dir_path, username, 'input')
    bg_data_dir                           = bg_dir(dir_path, username, 'data')
    output_video_path, output_gif_path    = output_path(dir_path, username)


    file = request.files['file']
    print(file)
    
    file_name = file.filename
    bg_input_path = os.path.join(bg_input_dir, file_name)
    
    if file_name.lower().endswith(".avi") or \
            file_name.lower().endswith(".mp4") or \
            file_name.lower().endswith(".gif"): 
            
        bg_status = 'video'
    elif file_name.lower().endswith(".jpg") or \
            file_name.lower().endswith(".jpeg") or \
            file_name.lower().endswith(".png"): 
            
        bg_status = 'image'
    else:
        pass

    fg_frame_length = len(glob.glob(os.path.join(fg_mask_dir, '*.png')))

    ########## VIDEO ###########
    if bg_status == 'video':
        # Old folders removing and new folders creating  
        removed_folders = [bg_input_dir, bg_data_dir]
        fold_updater(removed_folders)

        file.save(bg_input_path)

        # Convert a background video to the background video frames 
        start_time_bg_video2img = time.time()
        bg_frame_length = bg_video2img(bg_input_path, bg_data_dir, fg_frame_length)
        print("-- TIME bg_video2img -- %s seconds ---" % (time.time() - start_time_bg_video2img))
        
        # Convert the predicted video frames to video with the background video frames
        start_time_mask2video = time.time()
        mask2video(output_video_path, fg_mask_dir, fg_frame_dir, bg_data_dir, output_gif_path, bg_status, bg_frame_length, fg_frame_length)
        print("-- TIME VIDEO BG mask2video -- %s seconds ---" % (time.time() - start_time_mask2video))

        return "done uploading background"


    ########## IMAGE ###########
    if bg_status == 'image':
        bg_data_path = os.path.join(bg_data_dir, file_name)
        
        # Old folders removing and new folders creating  
        removed_folders = [bg_input_dir, bg_data_dir]
        fold_updater(removed_folders)
        
        file.save(bg_input_path)
    
        # Reading of the input background image
        # and saving the input background image like the data background image
        bg_data = cv2.imread(bg_input_path)
        cv2.imwrite(bg_data_path, bg_data)
        
        # Convert the predicted video frames to video with the background image
        start_time_mask2video = time.time()
        bg_frame_length=1
        mask2video(output_video_path, fg_mask_dir, fg_frame_dir, bg_data_dir, output_gif_path, bg_status, bg_frame_length, fg_frame_length)
        print("-- TIME IMG BG mask2video -- %s seconds ---" % (time.time() - start_time_mask2video))
        
        return "done uploading background"


@app.route('/api/login', methods=['POST'])
def login():
    global username
    """
    Logs a user in by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
       $ curl http://localhost:5000/api/login -X POST \
         -d '{"username":"Yasoob","password":"strongpassword"}'
    """
    req = flask.request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    print(username) #debug
    return ret, 200

@app.route('/api/signup', methods=['POST'])
def signup():
    global username
    """
    Signups a user in by parsing a POST request
    """
    req = flask.request.get_json(force=True)
    email = req.get('email', None)
    username = req.get('username', None)
    password = req.get('password', None)
    
    user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database
    #print(user) #debug
    if user: # if a user is found, we want to redirect back to signup page so user can try again
        return "email already exists"

    # create a new user with the form data. Hash the password so the plaintext version isn't saved.
    new_user = User(email=email, username=username, password=guard.hash_password((password)))

    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    Path(dir_path+"/user_data/"+username).mkdir(parents=True, exist_ok=True)
    Path(dir_path+"/user_data/"+username+"/foreground").mkdir(parents=True, exist_ok=True)
    Path(dir_path+"/user_data/"+username+"/background").mkdir(parents=True, exist_ok=True)
    Path(dir_path+"/user_data/"+username+"/processed").mkdir(parents=True, exist_ok=True)

    return "done"

@app.route('/api/refresh', methods=['POST'])
def refresh():
    """
    Refreshes an existing JWT by creating a new one that is a copy of the old
    except that it has a refrehsed access expiration.
    .. example::
       $ curl http://localhost:5000/api/refresh -X GET \
         -H "Authorization: Bearer <your_token>"
    """
    print("refresh request")
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200
  
  
@app.route('/api/protected')
@flask_praetorian.auth_required
def protected():
    """
    A protected endpoint. The auth_required decorator will require a header
    containing a valid JWT
    .. example::
       $ curl http://localhost:5000/api/protected -X GET \
         -H "Authorization: Bearer <your_token>"
    """
    return {'message': 'protected endpoint, allowed user'+flask_praetorian.current_user().username}
 
#api.add_resource(ImageApiHandler, '/api/upload')

if __name__ == "__main__": #so that app can be runed explicit
    app.run()