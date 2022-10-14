import Slider from "react-slick";
import imageUrl from "../utils/ImageUrl";
import { useBigSlider } from "../hooks/useGeneralSLider";
import { hotlistSliderData } from "../dummyData";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

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
//     // <div
//     // // onClick={onClick}
//     // >
//     //   <img
//     //     style={{
//     //       position: "absolute",
//     //       width: "100px",
//     //       height: "100px",
//     //       display: "block",
//     //       // background: nextArrow1,
//     //       cursor: "pointer",
//     //       top: "45%",
//     //       zIndex: 9999,
//     //       right: "50px",
//     //     }}
//     //     className={className}
//     //     src={nextArrow1}
//     //     alt=""
//     //     onClick={onClick}
//     //   />
//     // </div>
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
//     // <div>
//     //   <img
//     //     style={{
//     //       position: "absolute",
//     //       width: "100px",
//     //       height: "100px",
//     //       display: "block",
//     //       cursor: "pointer",
//     //       top: "45%",
//     //       zIndex: 9999,
//     //       left: "50px",
//     //     }}
//     //     className={className}
//     //     src={prevArrow1}
//     //     alt=""
//     //     onClick={onClick}
//     //   />
//     // </div>
//   );
// }

function HomeSlider() {
  const SliderSetting = useBigSlider();
  console.log(hotlistSliderData);
  return (
    <>
      <section id="list">
        <div className="bg-list">
          <img src={imageUrl("bg-list.png")} alt="" />
        </div>

        <div className="hotlist">
          <div className="text-hotlist">
            <img src={imageUrl("hot-list.png")} alt="" />
            <h2>Hotlist</h2>
          </div>
          <div className="hot-line">
            <img src={imageUrl("hot-line.png")} alt="" />
          </div>
        </div>
        <div id="slideshow" className="slider-show home-slider">
          <div className="slick">
            <Slider {...SliderSetting}>
              {hotlistSliderData.map((item) => {
                return (
                  <div key={item}>
                    <img src={imageUrl(item.imageUrl)} alt={item.imageUrl} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="punjabi-songs">
          <div className="text-punjabi">
            <img src={imageUrl("punjabi.png")} alt="" />
            <h2>New Sounds</h2>
          </div>
          <div className="punjabi-line">
            <img src={imageUrl("punjabi-line.png")} alt="" />
          </div>
        </div>
        <div id="slideshow" className="slider-show2 home-slider">
          <div className="slick">
            <Slider {...SliderSetting}>
              {hotlistSliderData.map((item) => {
                return (
                  <div key={item}>
                    <img src={imageUrl(item.imageUrl)} alt={item.imageUrl} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSlider;
