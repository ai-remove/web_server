# AI-Remove
Front-end and Back-end of AI.Remove production server
## Setup

#### Backend Development 
1. Create a virtual environment
```sh
python3 -m venv env_flask
```
2. Activate the virtual environment
```
source env/bin/activate
```
you can deactivate it once finished working with server using
```
deactivate
```
3. Install python packages
```
pip install flask
pip install flask-restful
pip install flask_cors
pip install flask_sqlalchemy
pip install flask-praetorian
pip install opencv-python
pip install imageio
pip install torch 
pip install torchvision
pip install -U scikit-image
```
#### Frontend Development
1. Clone the project
```
git clone https://github.com/ai-remove/web_server.git
```
2. Delete node_modules
```
git rm -rf node_modules
```
3. Install node_modules
```
npm install -l
```
4. Put the Deep Learning model "u2net_human_seg.pth" from https://drive.google.com/file/d/1vhXKVb05ubsmoN8vfpItN77JMW4PnymF/view?usp=sharing to the folder "u2net_human_seg" 
   "web_server/U_square_net/saved_models/u2net_human_segu2net_human_seg.pth"


## Run the "web_server" project

#### Backend running (on first powershell tab for Backend Development)
1. In the directory where app.py is
For running
```
python3 app.py
```
For stopping
```
Strg + c
```

#### Frontend running (on second powershell tab for Frontend Development)
1. In the project directory
```
npm start
```
