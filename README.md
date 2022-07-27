# AI-Remove
Frontend and Backend of AI.Remove production server

## Setup
For comfortable work install ConEmu https://conemu.github.io/ for Powershell. You can two tabs in one with hotkeys open 
-   Strg + Shift + e
    or
-   Strg + Shift + o
   
The first powershell tab for Backend Development
The second powershell tab for Frontend Development

#### Backend Development (on first powershell tab for Backend Development)
1. Create a virtual environment
```sh
python -m venv env_flask
```
2. Activate the virtual environment
```sh
.\env_flask\Scripts\activate
```
3. Install python packages
```sh
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
pip install matplotlib
```

#### Frontend Development (on second powershell tab for Frontend Development)
1. Clone the project from https://github.com/ai-remove/web_server.git
```sh
git clone https://github.com/ai-remove/web_server.git
```
If you want to clone a specific branch run, e.g.    
```sh
git clone https://github.com/ai-remove/web_server.git -b ivan_react_flask
```
2. Install VS Code for development
3. Open the "web_server" project on VS Code
2. Remove the node_modules folder with files in the "web_server" directory
For Windows:
 ```sh
rm .\node_modules\**
```
For Linux:
```sh
rm -rf node_modules/**
```
3. Install node_modules and other packages
```sh   
npm install
npm install react-scripts --save
```
4. Put the Deep Learning model "u2net_human_seg.pth" from https://drive.google.com/file/d/1vhXKVb05ubsmoN8vfpItN77JMW4PnymF/view?usp=sharing to the folder "u2net_human_seg" 
   "web_server/U_square_net/saved_models/u2net_human_seg/u2net_human_seg.pth"


## Run the "web_server" project

#### Backend running (on first powershell tab for Backend Development)
1. In the directory where app.py is
For running
```sh   
flask run
```
For stopping
```sh
Strg + c
```

#### Frontend running (on second powershell tab for Frontend Development)
1. In the project directory
```sh
npm start
```
