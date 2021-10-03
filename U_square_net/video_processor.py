
import cv2
import time
import imageio
import shutil
import glob, os
import numpy as np
from PIL import Image, ImageOps 

from U_square_net.u2net_human_seg_test import frame_predict
from U_square_net.u2net_human_seg_test import save_output


# Old folders removing and new folders creating  
def fold_updater(fold_list):
    for folder_path in fold_list:
        if os.path.exists(folder_path):
            shutil.rmtree(folder_path)
        else:
            pass
        os.makedirs(folder_path)


def data_resizer(data, inp_height, inp_width, out_area):
    inp_area = int(inp_height * inp_width)

    if out_area < inp_area:
        frame_ratio = float((out_area / inp_area) ** 0.5) 
        
        out_height = int(inp_height * frame_ratio)
        out_width = int(inp_width * frame_ratio)

        data = cv2.resize(data, (out_width, out_height), interpolation=cv2.INTER_AREA)   
    
    return data, out_height, out_width


def chessbackground_creater(fg_h, fg_w, count_row_squares = 25):  
    # Get the height and width of a square
    a = np.ceil(fg_w/count_row_squares).astype(np.int8)
    
    # Find number of columns and rows
    # One column and row consists one dark and light square
    num_row = np.ceil(fg_h/(a*2)).astype(np.int8)
    num_col = np.ceil(fg_w/(a*2)).astype(np.int8)

    # Create one dark and light square
    light = np.full((1,a), 255) 
    dark = np.full((1,a), 200) 
    
    # Create first row of squares (light, dark, light, dark, light, dark, ...)
    first_row = np.array(np.squeeze(np.concatenate((light,dark), axis=1)).tolist()*num_col*a).tolist()
    # Create second row of squares (dark, light, dark, light, dark, light, ...)
    twice_row = np.array(np.squeeze(np.concatenate((dark,light), axis=1)).tolist()*num_col*a).tolist() 

    # Create the chessboard with one dimension
    chessboard_one_dim = np.array((first_row+twice_row)*num_row).reshape(num_row*2*a,num_col*2*a)[:fg_h,:fg_w]

    board_h, board_w  = chessboard_one_dim.shape

    # Create the chessboard for three color channel
    chessboard = np.zeros((board_h, board_w, 3), dtype=np.uint8)

    chessboard[:,:,0] = chessboard_one_dim
    chessboard[:,:,1] = chessboard_one_dim
    chessboard[:,:,2] = chessboard_one_dim
    
    return chessboard


# Creating of foreground frames
def fg_video2img(input_video_path, mask_path, img_path, net, basic_fg_len, out_frame_area):
    cap = cv2.VideoCapture(input_video_path)
    frame_length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    if basic_fg_len > frame_length:
        basic_fg_len = frame_length

    # Checking of the video existence  
    if cap.isOpened() == False:
        print(
            "Error opening the video file. Please double check your file path for typos. Or move the movie file to the same location as this script/notebook")

    i = 0
    # Solange das Video geöffnet ist
    while cap.isOpened():
        # Lies die Videodatei
        ret, frame = cap.read()
        # Wenn wir Frames haben und die Anzahl von Videosequenzen weniger als basic_fg_len ist, bearbeite sie
        if ret == True and i < basic_fg_len:  
            inp_h, inp_w, _ = frame.shape
            
            start_time_predict = time.time()
            mask = frame_predict(frame, net)
            print("-- TIME Predict -- %s seconds ---" % (time.time() - start_time_predict))
            
            frame, out_h, out_w = data_resizer(frame, inp_h, inp_w, out_frame_area)
            
            save_output(str(i), mask, mask_path, out_h, out_w)
            
            start_time_write = time.time()
            cv2.imwrite(img_path + '/' + str(i) + '.png', frame)
            print("-- TIME Write -- %s seconds ---" % (time.time() - start_time_write))
            i += 1
        # Beende die Schleife automatisch, wenn das Video vorbei ist.
        else:
            break
    cap.release()

    return frame_length, inp_h, inp_w


# Creating of background frames
def bg_video2img(input_video_path, img_path, fg_len):
    cap = cv2.VideoCapture(input_video_path)
    bg_len = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    if bg_len >= fg_len:
        process_bg_len = fg_len
    else:
        process_bg_len = bg_len
    
    # Checking of the video existence 
    if cap.isOpened() == False:
        print(
            "Error opening the video file. Please double check your file path for typos. Or move the movie file to the same location as this script/notebook")

    i = 0
    # Solange das Video geöffnet ist
    while cap.isOpened():
        # Lies die Videodatei
        ret, frame = cap.read()
        # Wenn wir Frames haben und die Anzahl von Videosequenzen weniger als basic_fg_len ist, bearbeite sie
        if ret == True and i < process_bg_len:
                        
            h, w, _ = frame.shape
            
            cv2.imwrite(img_path + '/' + str(i) + '.png', frame)
            i += 1
        # Beende die Schleife automatisch, wenn das Video vorbei ist.
        else:
            break
    cap.release()

    return process_bg_len


def bg_resize(foreground, background):
    height = int(foreground.shape[0])
    width = int((height / background.shape[0]) * background.shape[1])

    if width < foreground.shape[1]:
        width = int(foreground.shape[1])
        height = int((width / background.shape[1]) * background.shape[0])

    new_img = cv2.resize(background, (width, height), interpolation=cv2.INTER_AREA) 
    new_img = new_img[0:foreground.shape[0], 0:foreground.shape[1]]
    return new_img

############################################################
######### Wie früher in Django Version gemacht #############
############################################################
"""def erosion(mask):
    kernel = np.ones((3, 3), np.uint8)
    mask = cv2.erode(mask, kernel, iterations=1)
    return mask

def gaussian_blur(mask):
    mask = cv2.GaussianBlur(mask, (13, 13), 0)
    mask = cv2.GaussianBlur(mask, (13, 13), 0)
    return mask


def bg_layering(bg_path, id_img, img_path, mask_path):
    img_path = os.path.join(img_path, str(id_img)+'.png')
    img_obj_orig = cv2.imread(img_path)
    ######print('img_path',img_path)
    
    mask_path = os.path.join(mask_path, str(id_img)+'.png')
    ######print('mask_path',mask_path)
    img_obj_mask = cv2.imread(mask_path)
    #rows, cols, channels = img_obj_mask.shape
    img_objgray_mask = cv2.cvtColor(img_obj_mask, cv2.COLOR_BGR2GRAY)
    
    ######print('bg_path:  ',bg_path)
    img_bg = cv2.imread(bg_path)
    #img_bg = cv2.resize(img_bg, (cols, rows), interpolation=cv2.INTER_CUBIC)
    img_bg = bg_resize(img_obj_mask, img_bg)
    roi = img_bg
    # Gaussian Blur
    img_objgray_mask = gaussian_blur(img_objgray_mask)
    ret, mask = cv2.threshold(img_objgray_mask, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    # Erosion
    mask = erosion(mask)
    mask_inv = cv2.bitwise_not(mask)
    # Now black-out the area of logo in ROI
    img_obj_bg = cv2.bitwise_and(roi, roi, mask=mask_inv)
    # Take only region of logo from logo image.
    img_obj_fg = cv2.bitwise_and(img_obj_orig, img_obj_orig, mask=mask)
    # Put logo in ROI and modify the main image
    dst = cv2.add(img_obj_bg, img_obj_fg)

    return dst"""
############################################################
############################################################
############################################################



############################################################
############## Funktioniert langsam ########################
############################################################

"""def bg_layering(bg_path, id_img, img_path, mask_path):
    # Reading of the video frames
    img_path = os.path.join(img_path, str(id_img)+'.png')
    img_obj_orig = cv2.imread(img_path)
    
    # Reading of the video masks
    mask_path = os.path.join(mask_path, str(id_img)+'.png')
    img_obj_mask = cv2.imread(mask_path)

    # Reading of the background image/video frames
    start_time_read = time.time()
    img_bg = cv2.imread(bg_path)
    print("-- TIME Read -- %s seconds ---" % (time.time() - start_time_read))
    
    start_time_resize = time.time()
    img_bg = bg_resize(img_obj_mask, img_bg)
    print("-- TIME Resize -- %s seconds ---" % (time.time() - start_time_resize))

    foreground = img_obj_orig / 255
    background = img_bg / 255
    
    alpha = img_obj_mask
    alpha = alpha / 255

    return ((alpha * foreground + (1 - alpha) * background)*255).astype(np.uint8)"""

############################################################
############################################################
############################################################


def bg_layering(bg, id_img, img_path, mask_path):
    start_time_read = time.time()
    # Reading of the video frames
    img_path = os.path.join(img_path, str(id_img)+'.png')
    img = cv2.imread(img_path)
    
    # Reading of the video masks
    mask_path = os.path.join(mask_path, str(id_img)+'.png')
    mask = cv2.imread(mask_path)  
    print("-- TIME Read -- %s seconds ---" % (time.time() - start_time_read))
    
    start_time_resize = time.time()
    bg = bg_resize(mask, bg)
    print("-- TIME Resize -- %s seconds ---" % (time.time() - start_time_resize))
    

    foreground_rgb = Image.fromarray(img)
    foreground_a = Image.fromarray(mask)
    background = Image.fromarray(bg)


    foreground_a = ImageOps.grayscale(foreground_a)

    foreground_rgba = foreground_rgb.copy()
    foreground_a = foreground_a.copy()

    foreground_rgba.putalpha(foreground_a)

    background.paste(foreground_rgba, (0, 0), foreground_rgba)

    dst = np.asarray(background)

    return dst


def frame_ratio(current_frame):
    y_size = 550
    ratio = y_size / current_frame.shape[0]
    return ratio

# Geting of path separator
def path_sep(data_path):
    if '\\' in data_path:
        separator = '\\'
    else:
        separator = '/'

    return separator 

# Convert the predicted video frames to video with the background image/video frames
def mask2video(output_video_path, mask_path, img_path, bg_data, output_gif_path, bg_status, bg_frame_length, fg_frame_length):
    
    mask_path_list = glob.glob(os.path.join(mask_path, '*.png'))
    img_path_list = glob.glob(os.path.join(img_path, '*.png'))
    
    if bg_status != ('alpha_channel'):
        bg_path_list = glob.glob(os.path.join(bg_data, '*.*'))

    if bg_status == ('video'): 
        if bg_frame_length < fg_frame_length:
            while len(bg_path_list) < fg_frame_length:
                for i in bg_path_list:
                    bg_path_list.append(i)
                    if len(bg_path_list) >= fg_frame_length:
                        break

        # Sorting of the background paths
        split_symb = path_sep(bg_path_list[0])
        
        bg_path_list = [(path,) for path in bg_path_list]
        bg_path_list = [''.join(path) for path in sorted(bg_path_list, key=lambda name: int(name[0].split(split_symb)[-1].split('.')[0]))]
        
    
    split_symb = path_sep(mask_path_list[0])
    mask_id_list = sorted([int(i.split(split_symb)[-1].split('.')[0]) for i in mask_path_list])
    
    height, width, _ = cv2.imread(mask_path_list[0]).shape
    size = (width, height)
    # For .avi daten:
    # - cv2.VideoWriter_fourcc(*'XVID')
    # - video_name.avi
    writer = cv2.VideoWriter(output_video_path, cv2.VideoWriter_fourcc(*'mp4v'), 25, size)

    if bg_status == ('alpha_channel'):
        bg = bg_data
    elif bg_status == ('image'):
        # Reading of the background image
        bg_path = glob.glob(os.path.join(bg_data, '*.*'))[0]
        bg = cv2.imread(bg_path)
    
    with imageio.get_writer(output_gif_path, mode='I') as gif_writer:
        for id_img in mask_id_list: 
            
            if bg_status == ('video'):
                # Reading of the video frames
                bg_path = bg_path_list[id_img] 
                bg = cv2.imread(bg_path)

            frame = bg_layering(bg, id_img, img_path, mask_path)
           
            writer.write(frame)
            ratio = frame_ratio(frame)
            
            #x_size, y_size = frame.shape[1] // 3, frame.shape[0] // 3
            #gif_frame = cv2.resize(frame, (x_size, y_size), interpolation=cv2.INTER_CUBIC)
            gif_frame = cv2.resize(frame, None, fx = ratio, fy = ratio, interpolation=cv2.INTER_CUBIC)
            gif_frame = cv2.cvtColor(gif_frame, cv2.COLOR_BGR2RGB)
            
            gif_writer.append_data(gif_frame)
            
    writer.release()