import { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Coins, Tabs } from "../components";
import { useTranslation } from "react-i18next";

import {
  HomeBanner,
  HomeWelcome,
  HomeSlider,
  Footer,
} from "../components/index";
import imageUrl from "../utils/ImageUrl";

function Home() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <HomeBanner />
      <HomeWelcome />
      <HomeSlider />
      <section>
        <div className="bg-endimage">
          <div className="image-speaker">
            <img src={imageUrl("speaker.png")} alt="" />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
