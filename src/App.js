import { useEffect, useState } from "react";
import ImagesApi from './Components/imagesApi';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import Loader from 'react-loader-spinner';

import styles from './App.module.css';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchImages();
  }, [searchQuery]);

  const onChangeQuery = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setPictures([]);
  };

  const onModal = ({ largeImageURL, tags }) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const fetchImages = () => {
    setIsLoading(true);

    const options = { searchQuery, currentPage };

    ImagesApi.fetchImages(options)
      .then((images) => {
        if (images.length === 0) {
          alert.info("Try again!");
        }
        setPictures([...pictures, ...images]);
        setCurrentPage(currentPage + 1);
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch(() => {
        alert.info("Try again!");
      })
      .finally(() => setIsLoading(false));
  };

  const shouldRenderLoadMoreButton = pictures.length > 0 && !isLoading;

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery pictures={pictures} onClick={onModal} />

      {shouldRenderLoadMoreButton && <Button onClick={fetchImages} />}

      {isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}

        />
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </div>
  );
}


