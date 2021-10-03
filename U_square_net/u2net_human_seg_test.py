import os
from skimage import io
import torch
from torch.autograd import Variable
from torchvision import transforms

import numpy as np
from PIL import Image

from U_square_net.data_loader import RescaleT
from U_square_net.data_loader import ToTensorLab
from U_square_net.data_loader import SalObjDataset

from U_square_net.model_loader import model_load

# normalize the predicted SOD probability map
def normPRED(d):
    ma = torch.max(d)
    mi = torch.min(d)

    dn = (d-mi)/(ma-mi)

    return dn

def save_output(image_name,pred,d_dir,h,w):
    predict = pred
    predict = predict.squeeze()
    predict_np = predict.cpu().data.numpy()

    im = Image.fromarray(predict_np*255).convert('RGB')
    imo = im.resize((w,h),resample=Image.BILINEAR)

    print('idx: ',image_name)
    imo.save(d_dir+'/'+image_name+'.png')


def frame_predict(frame, net):
    # --------- 1. get image path and name ---------
    model_name='u2net'

    prediction_dir = os.path.join(os.getcwd(), 'test_data', 'test_human_images' + '_results' + os.sep)
    model_dir = os.path.join(os.getcwd(), 'saved_models', model_name+'_human_seg', model_name + '_human_seg.pth')

    #img_name_list = ['/home/admin1/Programming/AI.remove_react/predict_function/U_square_net/test_data/test_human_images/language_1280p.jpg']
    img_name_list = ['/home/admin1/Programming/AI.remove_react/predict_function/U_square_net/test_data/test_human_images/19035828_web1__12294096_web1_180615-PNR-newmayorchallenge.jpg']

    # --------- 2. dataloader ---------
    #1. dataloader
    test_salobj_dataset = SalObjDataset(img_name_list = frame,
                                        lbl_name_list = [],
                                        transform=transforms.Compose([RescaleT(320),
                                                                      ToTensorLab(flag=0)])
                                        )
    
    # --------- 3. inference for each image ---------
    frame = test_salobj_dataset.img_getitem()
    frame = frame.unsqueeze(0)
    inputs_test = frame 
    inputs_test = inputs_test.type(torch.FloatTensor)
    

    if torch.cuda.is_available():
        inputs_test = Variable(inputs_test.cuda())
    else:
        inputs_test = Variable(inputs_test)

    d1,d2,d3,d4,d5,d6,d7= net(inputs_test)

    # normalization
    pred = d1[:,0,:,:]
    pred = normPRED(pred)

    del d1,d2,d3,d4,d5,d6,d7

    return pred