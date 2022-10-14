import React from "react";
import { IMAGES } from "../assets/constants/images";
import imageUrl from "../utils/ImageUrl";

// function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   console.log(className);
//   return (
//     <>
//       <img
//         className={className}
//         src={imageUrl("right-arrow.png")}
//         onClick={onClick}
//         alt=""
//       />
//     </>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   console.log(className);
//   return (
//     <>
//       <img
//         className={className}
//         src={imageUrl("left arrow.png")}
//         onClick={onClick}
//         alt=""
//       />
//     </>
//   );
// }

function SampleNextArrow(props) {
  const { className, onClick } = props;
  console.log(className);
  return (
    <div className={className}>
      <img src={imageUrl("right-arrow.png")} onClick={onClick} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  console.log(className);
  return (
    <div className={className}>
      <img src={imageUrl(IMAGES.leftArrow)} onClick={onClick} alt="" />
    </div>
  );
}

export const useBigSlider = () => {
  const sliderSetting = {
    dots: false,
    // arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="arrow-prev prev1" />,
    prevArrow: <SamplePrevArrow className="arrow-next next1" />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return sliderSetting;
};

export const useSmallSlider = () => {
  const sliderSettingSmall = {
    dots: false,
    // arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="arrow-prev prev1" />,
    prevArrow: <SamplePrevArrow className="arrow-next next1" />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return sliderSettingSmall;
};
