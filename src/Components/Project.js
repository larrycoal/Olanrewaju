import React, { useState } from "react";
import { Zoom, Slide } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {  EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";
import stripes from '../Resources/stripes.png'
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
      link:"https://trim.ng/",
      github:"https://github.com/hngi/trim"
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1597824993/covidThumb_nhtt6q.png",
      desc:
        "A website built with react, it showcases some covid-19 data as it affects Nigeria.",
        link:"https://covid-9ja-watch.herokuapp.com/",
        github:"https://github.com/larrycoal/Covid-9ja"
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1597859221/Ecommerce_tkh6dh.png",
      desc: " An E-commerce web application built with react and react-redux ",
      link:"https://larry-e-commerce.herokuapp.com/",
      github:"https://github.com/larrycoal/Team-N-Ecommerce"
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1584996242/Screenshot_2020-03-23_at_9.36.08_PM_ki2emb.png",
      desc: "This website showcase member of the lagos state cabinet and public email to reach them by",
      link:"/",
      github:"https://github.com/larrycoal/Covid-9ja"
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1598010939/xShare_sxt4vb.png",
      desc: "A file sharing application that converts files into a sharable link.",
      link:"http://xshare.ga/",
      github:"https://github.com/larrycoal/nodejs-update"
    },
  ]);

  const showSwipe = () => {
    return data.map((data) => (
      <SwiperSlide key={data.id}>
        <div
          style={{
            border: "1px solid #eceff1",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <div
            className=""
            style={{
              height: "200px",
              background: `url(${data.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="desc"
            style={{
              height: "150px",
              backgroundColor: "white",
              fontFamily:"Montserrat"
            }}
          >
            <p style={{ margin: "0" }}>{data.desc}</p>
            <span><a href={data.link} rel="noopener noreferrer" target="_blank" style={{ margin: "0" }}>
              Demo
            </a></span>
            <span><a href={data.github} rel="noopener noreferrer" target="_blank" style={{ margin: "0" }}>
              Github
            </a></span>
          </div>
        </div>
      </SwiperSlide>
    ));
  };
  return (
    <div
      style={{
        height: "500px",
        background:`#eceff1 url(${stripes})`
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          <Zoom left cascade>
            My Projects
          </Zoom>
        </h1>
      </div>
      <Slide right cascade>
        <Swiper id="main" {...settings}>
          {showSwipe()}
        </Swiper>
      </Slide>
    </div>
  );
};

export default Project;
