import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: "30%",
  };

  const slideStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Slider {...settings}>
      <div>
        <div style={slideStyle}>
          <img
            src="https://3.bp.blogspot.com/-uRRCfYYsGR4/VEwMXrZw8DI/AAAAAAAAATo/7vHC7sxDVW8/s1600/moda2014.jpg"
            alt="Imagen"
          />
        </div>
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/R.2d4f87ea7c0c9bb9a5f38156ead16e5d?rik=K210rgulSd3eDQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Q8EWJHxiijc%2fUjC8skfNPoI%2fAAAAAAAATcs%2fBHFPDwBqLc4%2fs1600%2fRecently%2bUpdated57-001.jpg&ehk=lhIOc9UfaZhs3Lcr%2fqjDf9AFGDrUoAd60u%2b%2fPhhSMNg%3d&risl=&pid=ImgRaw&r=0"
          alt="Imagen"
        />
      </div>
      <div>
        <img
          src="https://th.bing.com/th/id/R.cae78bdad16898a7013729001b20eb84?rik=Ifx48w5eLwxDmg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-qmd6PuOP8bA%2fUjC1B--hM6I%2fAAAAAAAATbQ%2fb1x_eK4T3bU%2fs1600%2fRecently%2bUpdated55.jpg&ehk=%2fCm2tnCLo07r70%2fVIAgbUkz8s%2bO3O6pwZq%2f7EYEBGHI%3d&risl=&pid=ImgRaw&r=0"
          alt="Imagen"
        />
      </div>
    </Slider>
  );
};

export default SliderComponent;
