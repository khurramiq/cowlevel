import React, { useEffect, useState } from 'react';
import ImagesList from './ImagesList';
import UploadImageForm from './UploadImageForm';
import api from '../../../../../utils/api';

const Images = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [image, setImage] = useState({
    url: '',
  });
  const [images, setImages] = useState([]);
  useEffect(() => {
    getPictures();
  }, []);

  const getPictures = async (data) => {
    try {
      var res = await api.get('/image');
      if (res.data.items && !res.data.error) {
        setImages(res.data.items);
      } else {
        console.log('res.data.error', res.data.error);
      }
    } catch (e) {
      console.log('e.message', e.message);
    }
  };
  return (
    <div>
      {uploadImage ? (
        <UploadImageForm
          image={image}
          setImage={setImage}
          setImages={setImages}
          setUploadImage={setUploadImage}
        />
      ) : (
        <ImagesList
          images={images}
          setImages={setImages}
          setUploadImage={setUploadImage}
        />
      )}
    </div>
  );
};

export default Images;
