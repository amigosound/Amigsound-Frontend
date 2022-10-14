import React from "react";
import Slider from "react-slick";
import imageUrl from "../utils/ImageUrl";
import { useSmallSlider } from "../hooks/useGeneralSLider";
import { artistInsideData } from "../dummyData";
function SmallSlider() {
  const sliderSetting = useSmallSlider();
  return (
    <Slider {...sliderSetting}>
      {artistInsideData.map((item, ind) => (
        <div>
          <img src={imageUrl(item.imageUrl)} alt={item.imageUrl} />
          <p>{item.name}</p>
        </div>
      ))}
    </Slider>
  );
}

export default SmallSlider;
