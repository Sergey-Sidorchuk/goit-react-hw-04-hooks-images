import React from 'react';
import PropTypes from 'prop-types';
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      onClick={() => onClick({ largeImageURL, tags })}
      src={webformatURL}
      alt={tags}
      className="ImageGalleryItem-image"
    />
  </li>
);


ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;