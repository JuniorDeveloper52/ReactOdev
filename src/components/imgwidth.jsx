import React from 'react';
import{ useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const accessKey = 'PTTkfMuSpmSIsU5DrAaPliwN4RJXYgzWtdocLcoI-xU';
    const url = `https://api.unsplash.com/photos/random?Client_id=${accessKey}&count=20`;

    axios.get(url)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('API isteği başarısız oldu:', error);
      });
  }, []);

  return (
    <div>
      <h1>Unsplash Resim Galerisi</h1>
      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
