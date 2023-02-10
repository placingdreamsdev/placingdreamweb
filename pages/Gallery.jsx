import React, { useState } from "react";

// import img from './gallery_images/img.jpg';
import Image from "next/image";
import Modal from "../components/Gallery/Modal";
import data from "../components/Gallery/images.json";
import styles from "../components/Gallery/Gallery.module.css";

function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  function handleClick(item, index) {
    setCurrentIndex(index);
    setClickedImg(item.link);
  }

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter(
      (item) => data.data.indexOf(item) === newIndex
    );
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter(
      (item) => data.data.indexOf(item) === newIndex
    );
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div style={{ justifyContent: "center" }} className={styles.wrapper}>
      {data.data.map((item, index) => (
        <div key={index} className={styles.wrapper_images}>
          <button
            type="button"
            src={item.link}
            onClick={() => handleClick(item, index)}
          >
            <Image src={item.link} alt="image" width="300" height="300" />
          </button>
        </div>
      ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;
