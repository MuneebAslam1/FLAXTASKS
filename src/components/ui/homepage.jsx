import React from "react";
import "./homepage.css";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/Title";
import { Services } from "@/components/ui/Services";
import { Rollingcards } from "@/components/ui/rollingcards";
import { Testimonials } from "@/components/ui/testimonial";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import CTA from "./CTA";
import Carousel from "./Carousel";
import Footer from "./Footer";

import {
  Card,
  Imag,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import image1 from "./images/bnr.webp";
import Img from "./images/ai.jpeg";
import Img2 from "./images/a.png";
import Img3 from "./images/code.jpg";
import Herosection from "./Herosection";

const homepage = () => {
  return (
    <>
      <Herosection
        title="Streamline Your Business with Expert Accounting & Cutting-Edge Digital Solutions"
        description="From precision in finances to custom digital innovations,Flaxtasks empowers your business to thrive."
        image={image1}
      />

      <div className="section">
        <Separator
          className="bg-gray-300 h-0.5 my-2 "
          orientation="horizontal"
        />
      </div>

      <div className="section blogs">
        <div className="heading">
          <h2>Unlocking the Future</h2>
          <br />
          <p>How AI is Revolutionizing Businesses</p>
        </div>
        <div className="blogSection">
          <Card>
            <CardHeader>
              <Imag>
                {" "}
                <img src={Img} alt="" />
              </Imag>
              <CardTitle>
                Automation streamlines processes, reduces errors, and boosts
                efficiency.
              </CardTitle>
              <CardDescription>
                Automation simplifies repetitive tasks, saving time and reducing
                human error. By streamlining processes and improving accuracy,
                it helps businesses enhance efficiency and productivity. Embrace
                automation to drive growth and focus on what matters most.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              {/* <p>Learn More...?</p> */}
              <Button>
                {" "}
                <a href="https://www.linkedin.com/company/flaxtasks" target="_blank" rel="noopener noreferrer">
  Learn More
</a>

              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Imag>
                {" "}
                <img src={Img2} alt="" />
              </Imag>
              <CardTitle>
                Empowering Businesses with AI: Transforming Challenges into
                Opportunities
              </CardTitle>
              <CardDescription>
                Discover how AI can optimize your business operations, enhance
                decision-making, and drive growth by automating tasks, analyzing
                data, and providing innovative solutions tailored to your needs.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              {/* <p>Learn More...?</p> */}
              <Button><a href="https://www.linkedin.com/company/flaxtasks" target="_blank" rel="noopener noreferrer">
  Learn More
</a></Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Imag>
                {" "}
                <img src={Img3} alt="" />
              </Imag>
              <CardTitle>
                Custom software solutions tailored to your business needs
              </CardTitle>
              <CardDescription>
                Custom software solutions are designed to meet your unique
                business needs, optimizing workflows, improving efficiency, and
                providing a competitive edge with tailored, scalable systems.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              {/* <p>Learn More...?</p> */}
              <Button><a href="https://www.linkedin.com/company/flaxtasks" target="_blank" rel="noopener noreferrer">
  Learn More
</a></Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="section services" id="services">
        <div className="heading">
          <span className="lowweight">
            From Balancing Books to Building Websites, We Blend{" "}
            <span className="blueColor">Accounting Expertise</span> with{" "}
            <span className="blueColor">Digital Innovation</span>
          </span>
        </div>
        <div className="servicesSection">
          <Services
            svgs={
              <svg
                className="group-hover:stroke-white transition-all duration-300"
                width="35px"
                height="35px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1.92"
                stroke="#4272ED"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
                  <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
                  <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />
                  <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />
                  <line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />
                  <line x1="32" y1="6.99" x2="32" y2="56.7" />
                  <line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />
                  <line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />
                  <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />
                </g>
              </svg>
            }
            title="Web & App Development"
            description="Building innovative and user-friendly web and mobile applications tailored to your business needs. Seamless, efficient, and scalable solutions for growth."
            number="01"
          />
          <Services
            svgs={
              <svg
                className="hover:fill-white transition-all duration-300"
                width="35px"
                height="35px"
                viewBox="0 0 16 16"
                fill="4272ED"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#4272ED"
                strokeWidth="0.00016"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.032"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"
                    fill="#46B4FD"
                  />
                  <path
                    d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"
                    fill="#46B4FD"
                  />
                  <path
                    d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"
                    fill="#46B4FD"
                  />
                </g>
              </svg>
            }
            title="Custom Development"
            description="We provide tailored software development solutions, creating custom applications that align perfectly with your business goals and streamline operations."
            number="02"
          />
          <Services
            svgs={
              <svg
                className="group-hover:fill-white transition-all duration-300 w-[35px] h-[35px]"
                fill="#4272ED"
                width="35px"
                height="35px"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#46B4FD"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path d="M287 435q-42 0-74.5 18.5t-51 52.5-18.5 77 18.5 76.5 51.5 52 74 18.5q38 0 67-15l-92-92h74l60 59q16-18 24-39 11-26 11-60 0-43-18.5-77T361 453.5 287 435zm590-328h-57q-10 0-19.5-5T786 89l-39-72q-6-8-14.5-12.5t-18-4.5T696 4.5 682 17l-39 72q-6 8-15 13t-19 5h-58q-33 0-61 16.5t-44.5 45T429 230v56H123q-34 0-62 16.5T16.5 347 0 408v362q0 33 16.5 61.5t44.5 45 62 16.5h69q11 0 20 5t15 13l26 72q6 8 14.5 12.5t18.5 4.5 18.5-4.5T318 983l27-72q6-8 15-13t19-5h70q33 0 61-16.5t44.5-45T572 770v-56h305q34 0 62-16.5t44.5-44.5 16.5-61V230q0-33-16.5-61.5t-44.5-45-62-16.5zM426 786l-29-30q-46 30-110 30-58 0-104.5-26.5t-73-73T83 583t26.5-103.5 73-73.5 104-27T391 406t73.5 73.5T491 583q0 82-54 140l63 63h-74zm503-194q0 21-15.5 36T877 643H571v-52h14l42-94h168l41 94h64L715 177 571 482v-74q0-35-19-65.5T500 297v-67q0-21 15-36t36-15h70q22 0 34.5-7t20.5-21q6-9 14-31 7-18 11-26.5t13.5-8.5 12.5 8l10 27q10 28 15 36 8 13 19.5 18t36.5 5h69q21 0 36.5 15t15.5 36v362zM652 440l60-132 59 132H652z" />
                </g>
              </svg>
            }
            title="Workflow Automation"
            description="Optimize your business processes with intelligent workflow automation, reducing manual work, increasing efficiency, and improving productivity."
            number="03"
          />
          <Services
            svgs={
              <svg
                className="group-hover:fill-white transition-all duration-300 w-[35px] h-[35px]"
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#4272ED"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9 13.2222L10.8462 15L15 11M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z"
                    stroke="#46B4FD"
                    strokeWidth="1.368"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            }
            title="Cloud Migration & Management"
            description="Seamlessly migrate and manage your cloud infrastructure with scalable, secure, and cost-effective solutions to enhance business performance."
            number="04"
          />

          <Services
            svgs={
              <svg
                fill="#4272ED"
                width="35px"
                height="35px"
                viewBox="0 0 32 32"
                id="icon"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-white hover:stroke-white transition-all duration-300"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M28,16v6H4V6H16V4H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2h8v4H8v2H24V28H20V24h8a2,2,0,0,0,2-2V16ZM18,28H14V24h4Z"
                    transform="translate(0 0)"
                  />
                  <polygon points="21 15 16 10.04 17.59 8.47 21 11.85 28.41 4.5 30 6.08 21 15" />
                  <rect
                    id="_Transparent_Rectangle_"
                    data-name="&lt;Transparent Rectangle&gt;"
                    className="cls-1"
                    width="32"
                    height="32"
                  />
                </g>
              </svg>
            }
            title="Book Keeping"
            description="Accurate and reliable bookkeeping services to ensure smooth financial management, tracking expenses, and maintaining organized financial records."
            number="05"
          />
          <Services
            svgs={
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 32 32"
                className="group-hover:fill-white hover:stroke-white transition-all duration-300"
                enableBackground="new 0 0 32 32"
                id="_x3C_Layer_x3E_"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#46B4FD"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="clipboard">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path
                            d="M26.5,3h-5.958v1H26.5C26.776,4,27,4.225,27,4.5v25c0,0.275-0.224,0.5-0.5,0.5h-21 C5.224,30,5,29.775,5,29.5v-25C5,4.225,5.224,4,5.5,4h6V3h-6C4.673,3,4,3.673,4,4.5v25C4,30.327,4.673,31,5.5,31h21 c0.827,0,1.5-0.673,1.5-1.5v-25C28,3.673,27.327,3,26.5,3z"
                            fill=""
                          />{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <path
                          d="M25.5,22c-0.276,0-0.5-0.224-0.5-0.5V6h-2.5C22.224,6,22,5.776,22,5.5S22.224,5,22.5,5h3 C25.776,5,26,5.224,26,5.5v16C26,21.776,25.776,22,25.5,22z"
                          fill=""
                        />{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <path
                          d="M20.5,29h-14C6.224,29,6,28.776,6,28.5v-23C6,5.224,6.224,5,6.5,5h3C9.776,5,10,5.224,10,5.5 S9.776,6,9.5,6H7v22h13.5c0.276,0,0.5,0.224,0.5,0.5S20.776,29,20.5,29z"
                          fill=""
                        />{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <path
                          d="M20.5,29c-0.064,0-0.129-0.013-0.191-0.038C20.122,28.885,20,28.702,20,28.5v-5 c0-0.276,0.224-0.5,0.5-0.5h5c0.202,0,0.385,0.122,0.462,0.309c0.078,0.187,0.035,0.402-0.108,0.545l-5,5 C20.758,28.949,20.63,29,20.5,29z M21,24v3.293L24.293,24H21z"
                          fill=""
                        />{" "}
                      </g>{" "}
                      <g id="customer_survey_questionnaire_2_">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M9.653,18.016c-0.004,0-0.007,0-0.011,0c-0.142-0.003-0.276-0.066-0.368-0.174l-1.153-1.346 c-0.18-0.209-0.156-0.525,0.054-0.705c0.21-0.18,0.526-0.154,0.705,0.055l0.791,0.922l1.59-1.693 c0.189-0.201,0.505-0.211,0.707-0.021s0.211,0.506,0.022,0.707l-1.972,2.099C9.923,17.959,9.791,18.016,9.653,18.016z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M9.653,13.016c-0.004,0-0.007,0-0.011,0c-0.142-0.003-0.276-0.066-0.368-0.174l-1.153-1.346 c-0.18-0.209-0.156-0.525,0.054-0.705c0.21-0.18,0.526-0.154,0.705,0.055l0.791,0.922l1.59-1.693 c0.189-0.201,0.505-0.211,0.707-0.021s0.211,0.506,0.022,0.707l-1.972,2.099C9.923,12.959,9.791,13.016,9.653,13.016z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M17.5,23h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5 S17.776,23,17.5,23z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M22.5,21h-9c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h9c0.276,0,0.5,0.224,0.5,0.5 S22.776,21,22.5,21z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M22.5,16h-3c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5 S22.776,16,22.5,16z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M20.5,18h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5 S20.776,18,20.5,18z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M17.5,16h-4c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h4c0.276,0,0.5,0.224,0.5,0.5 S17.776,16,17.5,16z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M22.5,11h-9c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h9c0.276,0,0.5,0.224,0.5,0.5 S22.776,11,22.5,11z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M18.5,13h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S18.776,13,18.5,13z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M10.5,23h-2C8.224,23,8,22.776,8,22.5v-2C8,20.224,8.224,20,8.5,20h2c0.276,0,0.5,0.224,0.5,0.5v2 C11,22.776,10.776,23,10.5,23z M9,22h1v-1H9V22z"
                              fill=""
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M20.5,7h-9C11.224,7,11,6.776,11,6.5v-3C11,2.673,11.673,2,12.5,2C12.776,2,13,2.224,13,2.5 S12.776,3,12.5,3C12.224,3,12,3.225,12,3.5V6h8V3.5C20,3.225,19.776,3,19.5,3C19.224,3,19,2.776,19,2.5S19.224,2,19.5,2 C20.327,2,21,2.673,21,3.5v3C21,6.776,20.776,7,20.5,7z"
                        fill=""
                      />{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path
                        d="M17.5,3C17.224,3,17,2.776,17,2.5C17,2.225,16.776,2,16.5,2h-1c-0.108,0-0.211,0.033-0.296,0.097 C15.074,2.192,15,2.339,15,2.5C15,2.776,14.776,3,14.5,3S14,2.776,14,2.5c0-0.475,0.228-0.926,0.609-1.207 C14.867,1.102,15.176,1,15.5,1h1C17.327,1,18,1.673,18,2.5C18,2.776,17.776,3,17.5,3z"
                        fill=""
                      />{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            }
            title="Auditing"
            description="Comprehensive auditing services to ensure compliance, detect inefficiencies, and provide financial transparency for better decision-making."
            number="06"
          />
          <Services
            svgs={
              <svg
                fill="#4272ED"
                width="35px"
                height="35px"
                viewBox="0 0 50 50"
                version="1.2"
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
                overflow="inherit"
                stroke="#46B4FD"
                className="group-hover:fill-white hover:stroke-white transition-all duration-300"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path d="M41 1h-32c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-40c0-2.2-1.8-4-4-4zm-24 40c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm0-8c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm0-8c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm12 16c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm0-8c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm0-8c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm12 16c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm0-8c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm0-8c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1zm0-9c0 1.1-.9 2-2 2h-28c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v8z" />
                </g>
              </svg>
            }
            title="Financial Reporting"
            description="Detailed financial reporting solutions for informed decision-making, ensuring accuracy, compliance, and business growth through strategic insights."
            number="07"
          />
          <Services
            svgs={
              <svg
                className="hover:fill-white transition-all duration-300 w-[35px] h-[35px]"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#4272ED"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    style={{ fill: "#EFF2FA" }}
                    d="M494.345,388.414H17.655C7.904,388.414,0,380.51,0,370.759V141.241 c0-9.751,7.904-17.655,17.655-17.655h476.69c9.751,0,17.655,7.904,17.655,17.655v229.517 C512,380.509,504.095,388.414,494.345,388.414z"
                  />
                  <g>
                    <ellipse
                      style={{ fill: "#D7DEED" }}
                      cx="256"
                      cy="256"
                      rx="97.103"
                      ry="105.931"
                    />
                    <path
                      style={{ fill: "#D7DEED" }}
                      d="M26.483,194.207c24.376,0,44.138-19.761,44.138-44.138H26.483V194.207z"
                    />
                    <path
                      style={{ fill: "#D7DEED" }}
                      d="M441.379,150.069c0,24.376,19.761,44.138,44.138,44.138v-44.138H441.379z"
                    />
                    <path
                      style={{ fill: "#D7DEED" }}
                      d="M485.517,317.793c-24.376,0-44.138,19.761-44.138,44.138h44.138V317.793z"
                    />
                    <path
                      style={{ fill: "#D7DEED" }}
                      d="M70.621,361.931c0-24.376-19.761-44.138-44.138-44.138v44.138H70.621z"
                    />
                  </g>
                  <path
                    style={{ fill: "#4272ED" }}
                    d="M300.494,280.586c0-17.429-10.281-28.11-30.841-32.608l-7.238-1.42v-29.956 c5.525,1.158,9.885,4.431,12.061,8.796c1.841,3.693,5.597,6.036,9.722,6.036c8.408,0,13.862-9.268,9.385-16.385 c-5.844-9.291-16.796-15.52-31.168-17.116v-5.174c0-4.075-3.304-7.379-7.379-7.379c-4.075,0-7.379,3.304-7.379,7.379v5.172 c-22.81,2.484-36.154,14.968-36.154,34.065c0,16.705,10.36,27.87,29.717,32.367l6.438,1.518v31.481 c-6.519-1.213-11.479-4.554-13.927-9.247c-1.902-3.648-5.596-6.003-9.709-6.003h-1.085c-8.413,0-13.804,9.239-9.383,16.397 c6.022,9.751,17.907,15.895,34.104,17.255v3.479c0,4.075,3.304,7.379,7.379,7.379c4.075,0,7.379-3.304,7.379-7.379v-3.554 C286.771,313.18,300.494,300.609,300.494,280.586z M234.717,229.987c0-7.01,5.295-12.313,12.943-13.504v26.972 C239.207,241.15,234.717,236.536,234.717,229.987z M262.417,297.649v-28.975c10.458,2.354,15.349,7.011,15.349,14.482 C277.766,291.294,272.104,296.631,262.417,297.649z"
                  />
                  <path
                    style={{ fill: "#4272ED" }}
                    d="M485.517,141.241H26.483c-4.879,0-8.828,3.948-8.828,8.828v211.862c0,4.879,3.948,8.828,8.828,8.828 h459.034c4.879,0,8.828-3.948,8.828-8.828V150.069C494.345,145.19,490.397,141.241,485.517,141.241z M476.69,184.263 c-12.392-3.2-22.166-12.973-25.366-25.366h25.366V184.263z M60.676,158.897c-3.2,12.392-12.974,22.166-25.366,25.366v-25.366H60.676 z M35.31,327.737c12.392,3.2,22.166,12.973,25.366,25.366H35.31V327.737z M78.699,353.103 c-3.732-22.144-21.245-39.657-43.389-43.389v-107.43c22.144-3.732,39.657-21.244,43.389-43.389h120.909 C169.867,179.24,150.069,215.16,150.069,256s19.798,76.76,49.539,97.103H78.699z M256,158.897c48.672,0,88.276,43.561,88.276,97.103 S304.672,353.103,256,353.103S167.724,309.543,167.724,256S207.328,158.897,256,158.897z M361.931,256 c0-40.839-19.797-76.76-49.539-97.103h120.909c3.732,22.144,21.244,39.657,43.389,43.389v107.43 c-22.144,3.732-39.656,21.244-43.389,43.389H312.392C342.134,332.76,361.931,296.839,361.931,256z M451.324,353.103 c3.2-12.392,12.973-22.166,25.366-25.366v25.366H451.324z"
                  />
                  <g>
                    <circle
                      style={{ fill: "#4272ED" }}
                      cx="92.69"
                      cy="256"
                      r="22.069"
                    />
                    <circle
                      style={{ fill: "#4272ED" }}
                      cx="419.31"
                      cy="256"
                      r="22.069"
                    />
                  </g>
                </g>
              </svg>
            }
            title="Bank Reconciliation"
            description="Ensure financial accuracy by reconciling bank statements, detecting discrepancies, and maintaining proper financial records for business success."
            number="08"
          />
        </div>

        <Carousel
          title="Mastery in Accounting & IT Solutions"
          description="Our expertise in accounting and IT services empowers businesses with precision and efficiency. Whether it's financial management, bookkeeping, or tax solutions, or cutting-edge software development, cloud solutions, and IT support, we leverage the best tools and technologies to deliver excellence. With a deep understanding of both fields, we ensure seamless integration, accuracy, and innovation—so you can focus on growth while we handle the complexities."
        />

        <Separator
          className="bg-gray-300 h-0.5 my-2"
          orientation="horizontal"
        />
      </div>

      <div className="section statssection">
        <div className="TEXT">
          <div className="rightsection">
            <Title />
          </div>
          <div className="leftsection">
            <p>
              At Flaxtasks, we combine accounting expertise with advanced
              digital solutions to streamline operations and drive results. From
              managing your finances to building custom software and websites,
              we help you achieve efficiency and growth.
            </p>
          </div>
        </div>
        <div className="rollingcards">
          <Rollingcards
            Xnumber="3x"
            Xtitle="Faster Financial Reporting"
            Xdesc="Reduced reporting time with automated bookkeeping and financial modeling."
          />
          <Rollingcards
            Xnumber="24 Hr"
            Xtitle="Quick Payroll Processing"
            Xdesc="Payroll approvals in just 24 hours, saving you time, effort, and hassle."
          />
          <Rollingcards
            Xnumber="$10,000"
            Xtitle="Increased Business Efficiency"
            Xdesc="Custom software solutions that save operational costs and increase ROI."
          />
          <Rollingcards
            Xnumber="200%"
            Xtitle="Boosted Online Presence"
            Xdesc="Websites and cloud-based systems that double client engagement and sales."
          />
        </div>
      </div>
      <div className="carouselsection">
        <div className="section heading">
          <h1 id="testimonial">What people say</h1>

          <h3>
            Discover what our satisfied clients have to say about their
            experiences with our products / services.
          </h3>
        </div>
        <Testimonials />
      </div>

      <CTA />

      <div className=" accordians">
        <div className="accordiansection" id="FAQs">
          <div className="head">
            <h1>Frequently asked questions</h1>
            <span>
              These are the most commonly asked questions. Cant find what you
              are looking for? Chat to our friendly team!
            </span>
          </div>
          <div className="tail">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What kind of websites can Flaxtasks develop for my business?
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in creating fully customized and responsive
                  websites tailored to your brand's needs. Whether you need a
                  corporate site, portfolio, or e-commerce platform, we ensure
                  an engaging design and seamless functionality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is my data safe?</AccordionTrigger>
                <AccordionContent>
                  Here at <span className="blueColor">Flaxtasks</span>, we
                  consider security and reliability to be our foremost priority.
                  From our inception, we have consistently maintained a top tier
                  gold-standard of security protocols and measures designed to
                  be robust in their defence against hostilities. We constantly
                  engage in periodic testing of our server security and data
                  protection measures to ensure there is zero chance of any data
                  being jeopardised. We are proud to maintain our record with
                  not a single issue in security or reliability being reported
                  till date.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What if I need help getting started?
                </AccordionTrigger>
                <AccordionContent>
                  We understand that many businesses believe switching
                  accounting software and adapting to new systems is a
                  challenging task. At{" "}
                  <span className="blueColor"> Flaxtasks</span>, we aim to prove
                  otherwise. Our dedicated support teams offer tailored
                  onboarding sessions, guiding our clients through the optimal
                  use of Flaxtasks' comprehensive accounting tools and financial
                  reporting modules. We ensure that every solution is customized
                  to fit your business needs, empowering you to maximize
                  efficiency and unlock your full potential.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What are cloud-based software solutions, and how do they help?
                </AccordionTrigger>
                <AccordionContent>
                  Cloud-based solutions allow your team to work collaboratively
                  and securely from anywhere. Our custom cloud applications
                  improve efficiency, scalability, and data accessibility,
                  ensuring smooth operations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Do you provide support?</AccordionTrigger>
                <AccordionContent>
                  Our exceptional support team is available 24/7 to address all
                  your questions and concerns. We provide comprehensive
                  assistance across all aspects of our accounting solutions,
                  ensuring you have a seamless experience and maximize the value
                  of your partnership with
                  <span className="blueColor"> Flaxtasks</span>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How can AI-powered solutions benefit my business?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI solutions streamline operations by automating
                  repetitive tasks, offering predictive analytics, and enhancing
                  customer interactions through tools like chatbots, enabling
                  smarter decision-making and improved efficiency.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How can AI-powered solutions benefit my business?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI solutions streamline operations by automating
                  repetitive tasks, offering predictive analytics, and enhancing
                  customer interactions through tools like chatbots, enabling
                  smarter decision-making and improved efficiency.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="section">
        <Footer />
      </div>
    </>
  );
};

export default homepage;
