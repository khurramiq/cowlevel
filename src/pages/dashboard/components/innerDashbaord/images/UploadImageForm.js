import React, { useState } from 'react';
import { deleteObject, getStorage, ref, ref as sRef } from 'firebase/storage';
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../../utils/firebase';
import UploadImage from '../../uploadFile';
import api from '../../../../../utils/api';

const UploadImageForm = ({ image, setImage, setImages, setUploadImage }) => {
  const [progress, setProgress] = useState(0);
  const handleUploadClick = async (e, name) => {
    if (e.target.files.length < 1) return;
    const file = e.target.files[0];
    // change file name
    const myNewFile = new File([file], new Date().getTime() + file.name, {
      type: file.type,
    });
    const sotrageRef = sRef(storage, `images/${myNewFile.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, myNewFile);
    uploadTask?.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          setImage({ url: downloadURL });
          createPicture({ url: downloadURL });
          setProgress(0);
        });
      }
    );
  };
  const deletePicuteFromStorage = (delUrl) => {
    const storage = getStorage();
    // Create a reference to the file to delete
    const desertRef = ref(storage, delUrl);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        setImage({ url: '' });
      })
      .catch((error) => {
        // Deletion unsuccessful
        console.log('Image deletion unsuccessful');
      });
  };
  const createPicture = async (data) => {
    try {
      var res = await api.post('/image/create', data, {
        headers: { authorization: `${localStorage.getItem('token')}` },
      });
      if (res.data.savedImage && !res.data.error) {
        console.log('res.data.savedImage', res.data.savedImage);
        setImages((prev) => {
          return [...prev, res.data.savedImage];
        });
        setImage({ url: '' });
        setUploadImage(false);
      } else {
        console.log('res.data.error', res.data.error);
      }
    } catch (e) {
      console.log('e.message', e.message);
    }
  };
  return (
    <div>
      <div></div>
      <label>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          <div class="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Images</h1>
            <button
              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setUploadImage(false);
                setImage({ url: '' });
              }}
            >
              Back
            </button>
          </div>

          <span className="font-normal">
            (Please upload an image.)
            {progress > 0 &&
              `
                progress ${progress}
                `}
          </span>
        </span>
        {image.url && (
          <div className="relative">
            <i
              class="fal fa-edit absolute right-0 top-0 cursor-pointer"
              onClick={() => deletePicuteFromStorage(image.url)}
            ></i>
            <img src={image.url} alt="thumbnail" />
          </div>
        )}
        {!image.url && (
          <UploadImage
            name="image"
            handleUploadClick={handleUploadClick}
            text="Choose image"
            // setFieldValue={setFieldValue}
          />
        )}
      </label>
    </div>
  );
};

export default UploadImageForm;
