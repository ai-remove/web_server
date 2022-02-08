# model loader
import torch
import os


#from model import U2NET # full size version 173.6 MB
from U_square_net.model import U2NET # full size version 173.6 MB


model_name='u2net'

# --------- 3. model define ---------
model_dir = os.path.join(os.getcwd(), 'saved_models', model_name+'_human_seg', model_name + '_human_seg.pth')


def model_load(model_name, model_dir):

	if(model_name=='u2net'):
		print("...load U2NET---173.6 MB")
		net = U2NET(3,1)

	if torch.cuda.is_available():
		net.load_state_dict(torch.load(model_dir))
		net.cuda()
	else:
		net.load_state_dict(torch.load(model_dir, map_location='cpu'))
	net.eval()

	return net