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
    rotate: 30,
    stretch: 10,
    depth: 200,
    modifier: 2,
    slideShadows: true,
  },
};

const Project = () => {
  const [data] = useState([
    {
      id: 0,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1598010093/Screenshot_2020-08-21_at_12.39.56_PM_leijhp.png",
      desc: "Node URl-Shortner. React. Nodejs. Express.",
      link: "https://trim.ng/",
      github: "https://github.com/hngi/trim",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1597824993/covidThumb_nhtt6q.png",
      desc: "A website built with react, it showcases some covid-19 data as it affects Nigeria.React.GSAP",
      link: "https://covid-9ja-watch.herokuapp.com/",
      github: "https://github.com/larrycoal/Covid-9ja",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1597859221/Ecommerce_tkh6dh.png",
      desc: " An E-commerce web application. React. React-Router. Redux",
      link: "https://larry-e-commerce.herokuapp.com/",
      github: "https://github.com/larrycoal/Team-N-Ecommerce",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1623405614/Screenshot_2021-06-11_at_10.57.43_AM_jo7i2p.png",
      desc: "An invoice generator. React. React-Router. Redux",
      link: "https://fichaya-larry.herokuapp.com/",
      github: "https://github.com/larrycoal/fichaya-assessment",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1625766823/Screenshot_2021-07-08_at_6.49.18_PM_qymhzd.png",
      desc: "A colorful website HTML. CSS. JS",
      link: "https://angry-euler-caa3c1.netlify.app/",
      github: "https://github.com/larrycoal/sunnyside",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1612702856/chelsea_rbaccj.png",
      desc: "A CRUD app built with react and firebase. it showcase chelsea football club with beautiful UI. (mobile version coming soon) React.Firebase.Redux",
      link: "https://mancity-79a9f.web.app/",
      github: "https://github.com/larrycoal/Mancity",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1622929208/github-social_tjkb1h.png",
      desc: "Github-Clone. built using graphql github api. HTML.CSS.JS.GRAPHQL",
      link: "https://loving-kilby-66f091.netlify.app/",
      github: "https://github.com/larrycoal/Github-clone",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1623406109/Screenshot_2021-06-11_at_11.08.10_AM_xxxrgf.png",
      desc: "A Blog site built with Vue. VUE. VUE-X",
      link: "https://relaxed-dubinsky-32a8b9.netlify.app/",
      github: "https://github.com/larrycoal/fichaya-assessment",
    },
  ]);

  const showSwipe = () => {
    return data.map((data) => (
      <SwiperSlide key={data.id}>
        <div
          style={{
            background: `url(${data.image})`,
          }}
          className="project_card"
        >
          <div>
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
