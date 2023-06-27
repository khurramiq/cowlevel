import React from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import api from '../../../../../utils/api';

const ImagesList = ({ images, setImages, setUploadImage }) => {
  const handleCopyClick = (url, i) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log('Image URL copied to clipboard:', url);
        setImages(
          images.map((item, index) => {
            if (index === i) {
              return {
                ...item,
                coppied: true,
              };
            } else {
              return item;
            }
          })
        );
        setTimeout(() => {
          setImages(
            images.map((item, index) => {
              if (index === i) {
                return {
                  ...item,
                  coppied: false,
                };
              } else {
                return item;
              }
            })
          );
        }, 1000);
      })
      .catch((error) => {
        console.error('Failed to copy image URL:', error);
      });
  };
  const deletePicuteFromStorage = (item) => {
    var result = window.confirm('Are you sure you want to delete this item?');
    if (result) {
      const storage = getStorage();
      // Create a reference to the file to delete
      const desertRef = ref(storage, item.url);

      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          // File deleted successfully
          deleteImage(item._id);
        })
        .catch((error) => {
          // Deletion unsuccessful
          console.log('Image deletion unsuccessful');
        });
    } else {
      console.log('Deletion canceled.');
    }
  };
  const deleteImage = async (id) => {
    try {
      var res = await api.delete(`/image/${id}`);
      if (!res.data.error) {
        setImages((prev) => {
          return [...prev.filter((item) => item._id !== id)];
        });
      } else {
        console.log('res.data.error', res.data.error);
      }
    } catch (e) {
      console.log('e.message', e.message);
    }
  };

  return (
    <div>
      <div class="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Images</h1>
        <button
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setUploadImage((prev) => !prev)}
        >
          Add New Image
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, i) => (
          <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="relative">
              <img className="w-full" src={image.url} alt="card-img" />
              <div className="absolute top-0 right-0 p-2 space-x-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deletePicuteFromStorage(image)}
                >
                  <i className="far fa-trash-alt" />
                </button>
                <button
                  className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleCopyClick(image.url, i)}
                >
                  <i className="far fa-copy" />
                  {image?.coppied && (
                    <span className="absolute bottom-[-20px] left-0 text-green-500 text-xs">
                      Coppied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesList;
