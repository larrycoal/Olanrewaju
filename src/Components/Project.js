import React, { useState } from "react";
import { Slide } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectCoverflow]);
let settings = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
};

const Project = () => {
  const [data] = useState([
    {
      id: 0,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1598010093/Screenshot_2020-08-21_at_12.39.56_PM_leijhp.png",
      desc: "A nodejs application that shortens link and track engagement",
      link: "https://trim.ng/",
      github: "https://github.com/hngi/trim",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1597824993/covidThumb_nhtt6q.png",
      desc:
        "A website built with react, it showcases some covid-19 data as it affects Nigeria.",
      link: "https://covid-9ja-watch.herokuapp.com/",
      github: "https://github.com/larrycoal/Covid-9ja",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1597859221/Ecommerce_tkh6dh.png",
      desc: " An E-commerce web application built with react and react-redux ",
      link: "https://larry-e-commerce.herokuapp.com/",
      github: "https://github.com/larrycoal/Team-N-Ecommerce",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1584996242/Screenshot_2020-03-23_at_9.36.08_PM_ki2emb.png",
      desc:
        "This website showcase member of the lagos state cabinet and public email to reach them by",
      link: "/",
      github: "https://github.com/larrycoal/Covid-9ja",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1598010939/xShare_sxt4vb.png",
      desc:
        "A file sharing application that converts files into a sharable link.",
      link: "http://xshare.ga/",
      github: "https://github.com/larrycoal/nodejs-update",
    },
  ]);

  const showSwipe = () => {
    return data.map((data) => (
      <SwiperSlide key={data.id}>
        <div
        className="project_card"
        >
          <div
            style={{
              background: `url(${data.image})`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: "white",
              fontFamily: "Montserrat",
            }}
          >
            <p style={{ margin: "0" }}>{data.desc}</p>
            <span>
              <a
                href={data.link}
                rel="noopener noreferrer"
                target="_blank"
                style={{ margin: "0" }}
              >
                Demo
              </a>
            </span>
            <span>
              <a
                href={data.github}
                rel="noopener noreferrer"
                target="_blank"
                style={{ margin: "0" }}
              >
                Github
              </a>
            </span>
          </div>
        </div>
      </SwiperSlide>
    ));
  };
  return (
    <div className="project_wrapper">
      <div>
        <h1>My Projects</h1>
      </div>
      <div>
        <Slide right cascade>
          <Swiper id="main" {...settings}>
            {showSwipe()}
          </Swiper>
        </Slide>
      </div>
    </div>
  );
};

export default Project;
