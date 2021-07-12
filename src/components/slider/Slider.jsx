import "./Slider.scss";
import React, { useEffect, useState, useRef } from "react";

/**
 * Слайдер фото
 * @param viewedRecipes
 * @returns {JSX.Element}
 */
const Slider = ({ viewedRecipes }) => {
  /** Основное отображаемое фото */
  const [primaryPhoto, setPrimaryPhoto] = useState(
    viewedRecipes ? viewedRecipes.images[0] : null
  );
  /** Позиция каретки */
  const [position, setPosition] = useState(0);

  const sliderContainerRef = useRef();
  const sliderTrackRef = useRef();
  const [testItemWidth, setTestItemWidth] = useState(200);

  const slidesToShow = 3;
  const slidesToScroll = 1;

  /** При смене каретки - сдвинуть элементы*/
  useEffect(() => {
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.transform = `translateX(${position}px)`;
    }
  }, [position]);

  /**
   * Обработчик кнопки вперед
   */
  const handleBtnNext = () => {
    const itemWidth = sliderContainerRef.current.clientWidth / slidesToShow;
    setTestItemWidth(itemWidth);
    const movePosition = slidesToScroll * itemWidth;

    const itemsLeft =
      viewedRecipes.images.length -
      (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    setPosition(
      (prevState) =>
        prevState -
        (itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth)
    );
  };

  /**
   * Обработчик кнопки назад
   */
  const handleBtnPrev = () => {
    const itemWidth = sliderContainerRef.current.clientWidth / slidesToShow;
    setTestItemWidth(itemWidth);

    const movePosition = slidesToScroll * itemWidth;
    const itemsLeft = Math.abs(position) / itemWidth;
    setPosition(
      (prevState) =>
        prevState +
        (itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth)
    );
  };

  return (
    <div className="slider">
      {viewedRecipes && (
        <>
          <img
            className="slider__primary-photo"
            src={primaryPhoto}
            alt="thumbnail"
          />
          <div className="slider__carousel">
            {position < 0 && (
              <div
                className="slider__btn slider__btn--left"
                onClick={handleBtnPrev}
              >
                <span>left</span>
              </div>
            )}
            <div
              className="slider__carousel-container"
              ref={sliderContainerRef}
            >
              <div className="slider__carousel-wrapper" ref={sliderTrackRef}>
                {viewedRecipes.images.map((photo) => (
                  <div className="slider__carousel-item" key={photo}>
                    <img
                      onClick={() => setPrimaryPhoto(photo)}
                      style={{ width: testItemWidth, height: "100px" }}
                      className="slider__photo"
                      src={photo}
                      alt={photo}
                    />
                  </div>
                ))}
              </div>
            </div>

            {position >
              -(viewedRecipes.images.length - slidesToShow) * testItemWidth && (
              <div
                className="slider__btn slider__btn--right"
                onClick={handleBtnNext}
              >
                <span>right</span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
