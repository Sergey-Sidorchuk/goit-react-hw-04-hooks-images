import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '..//ImageGalleryItem';
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(({ id, tags, webformatURL, largeImageURL }) => (
        < ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;