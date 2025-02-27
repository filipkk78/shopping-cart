import PropTypes from "prop-types";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import styles from "./Slider.module.css";

function Slider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  //   setInterval(showNextImage, 5000);

  return (
    <div className={styles.sliderExternalWrapper}>
      <div className={styles.sliderInternalWrapper}>
        <div className={styles.imagesWrapper}>
          {imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              className={styles.sliderImg}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          data-testid="prevBtn"
          onClick={showPrevImage}
          className={styles.sliderBtn}
          style={{ left: 0 }}
        >
          <ArrowBigLeft></ArrowBigLeft>
        </button>
        <button
          data-testid="nextBtn"
          onClick={showNextImage}
          className={styles.sliderBtn}
          style={{ right: 0 }}
        >
          <ArrowBigRight></ArrowBigRight>
        </button>
        <div className={styles.sliderDots}>
          {imageUrls.map((url, index) => (
            <button
              data-testid={`${index}-dot`}
              key={index}
              onClick={() => {
                setImageIndex(index);
              }}
              className={styles.sliderDotBtn}
            >
              {index === imageIndex ? (
                <CircleDot></CircleDot>
              ) : (
                <Circle></Circle>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string),
};

export default Slider;
