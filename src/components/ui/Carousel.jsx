import React from "react";
import styled, { keyframes } from "styled-components";

import nodejs from "../ui/images/2.png";
import nextjs from "../ui/images/3.png";
import vuejs from "../ui/images/4.png";
import wix from "../ui/images/11.png";
import php from "../ui/images/14.png";
import js from "../ui/images/15.png";
import bubble from "../ui/images/16.png";
import sage from "../ui/images/sage.png";
import zero from "../ui/images/xero.png";
import excel from "../ui/images/excel.png";
import react from "../ui/images/react-icon.svg.png";
import qb from "../ui/images/qb.png";
import shopify from "../ui/images/12.png";
import sql from "../ui/images/6.png";
import wp from "../ui/images/9.png";
import ag from "../ui/images/ag.png";
import mongo from "../ui/images/mdb.png";
import flutter from "../ui/images/ft.png";

const Carousel = ({ title, description }) => {
  const logos = [
    { src: js, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: ag, alt: "Angular" },
    { src: vuejs, alt: "Vue.js" },
    { src: nodejs, alt: "Node.js" },
    { src: nextjs, alt: "Next.js" },
    { src: php, alt: "PHP" },
    { src: flutter, alt: "Flutter" },
    { src: sql, alt: "SQL" },
    { src: mongo, alt: "MongoDB" },
    { src: wp, alt: "WordPress" },
    { src: wix, alt: "Wix" },
    { src: shopify, alt: "Shopify" },
    { src: bubble, alt: "Bubble" },
    { src: qb, alt: "QuickBooks" },
    { src: sage, alt: "Sage" },
    { src: zero, alt: "Xero" },
    { src: excel, alt: "Excel" },
  ];

  return (
    <>
      <div className="heading">
        <h2>{title}</h2>
        <br />
        <br />
        <div className="dummy" style={{ margin: "0 10%" }}>{description}</div>
      </div>
      <CarouselWrapper>
        <Slider>

          <Logos>
            {logos.map((logo, index) => (
              <Logo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </Logos>
          <Logos>
            {logos.map((logo, index) => (
              <Logo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </Logos>
        </Slider>
      </CarouselWrapper>
    </>
  );
};


const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  background-color: var(--background, #f3f4f6);
  padding: 16px;
  white-space: nowrap;
  position: relative;
  width: 100%;
`;

const Slider = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 50s linear infinite;
`;

const Logos = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const Logo = styled.img`
  height: 50px;
  margin: 0 40px;
`;

export default Carousel;
