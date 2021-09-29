import flask
from flask import Flask, send_from_directory, request, jsonify, send_file
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
import os
import importlib

import flask_sqlalchemy
import flask_praetorian
import flask_cors
from pathlib import Path

app = Flask(__name__, static_url_path='', static_folder='./src')
CORS(app) #comment this on deployment
api = Api(app)
username = ""

db = flask_sqlalchemy.SQLAlchemy()
guard = flask_praetorian.Praetorian()
cors = flask_cors.CORS()

dir_path = os.path.dirname(os.path.realpath(__file__))

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

# Add users for the example (not neccesary for deploy - to delete later)
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

@app.route("/api/upload/foreground", methods=['POST'])
def post():
    #files = request.files
    file = request.files['file']
    print(file)
    file.save(os.path.join(dir_path + "/user_data/" + username + "/foreground", file.filename))
    #############################
    #nn to process file
    #############################
    filename = ''
    return filename

@app.route("/api/upload/background", methods=['POST'])
def post2():
    file = request.files['file']
    print(file)
    file.save(os.path.join(dir_path + "/user_data/" + username + "/background", file.filename))
    
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

@app.route('/api/signup', methods=['POST']) #signup handler
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

@app.route('/api/refresh', methods=['POST']) #not used till now - important for later
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