import React from "react";
import "./services.css";
import { Separator } from "@/components/ui/separator";
import styled from "styled-components";
// import Rollingcards from '../rollingcards'
import { Rollingcards } from "@/components/ui/rollingcards";
import accountingImg from "../images/accountant1.png";
import Footer from '../Footer'

import CTA from "../CTA";
import acc2 from "../images/top.png";
import acc3 from "../images/optimization.png";
import Payroll from "../images/Payroll_Management.png";
import FM from "../images/Financial_reporting.png";
import bk from "../images/bk.png";
import AF from "../images/AF.png";

import Carousel from "../Carousel";
import Herosection from "../Herosection";

const AccountingServices = () => {
  return (
    <StyledWrapper>
      {/* Hero Section */}
      {/* <div className="herosection">Banner with CTA</div> */}
<div className="banner2">
            <div className='herosection2'>

    <div className="txt">

                    <h1>Reliable Accounting and Finance Solutions for Your Business</h1>
                    <br /> <p>We offer tailored accounting and finance solutions, including precise bookkeeping, seamless payroll processing, and expert financial modeling for data-driven decisions. Our tax preparation ensures compliance, while efficient accounts management maintains cash flow. With budgeting and financial planning support, we help drive your business’s long-term success.</p>
    
                 
                </div>
                <div className='imagess2'>
                    <img src={AF} alt="Banner Image" />
                </div>
        </div>





            </div>

      {/* Intro Section */}
      <div className="container ">
        <p className="Sub-tile ">
          Outsourced bookkeeping and accounting services for every stage of your
          business
        </p>
        <p>
          Numbers are the foundation of every decision you make. Let{" "}
          <strong>Flaxtasks</strong>’s qualified accounting experts step in with{" "}
          <b>flexible, cycle-to-cycle support,</b>
          so you can focus on the big picture.
        </p>
      </div>

      {/* Talent Section */}
      <div className="talent ">
        <Rollingcards
          image={accountingImg}
          Xtitle="Expert Accountants"
          Xdesc="Only top-tier professionals make it through our rigorous selection process. You’ll never waste time on unqualified candidates—we connect you with accountants who truly understand your busines"
        />
        <Rollingcards
          image={acc2}
          Xtitle="Streamlined & Efficient"
          Xdesc="Avoid spending weeks searching for the right financial experts. Tell us your needs, and we’ll quickly match you with the best-fit accountants and bookkeepers—hassle-free and stress-free."
        />
        <Rollingcards
          image={acc3}
          Xtitle="Industry-Leading Expertise"
          Xdesc="Only top-tier professionals make it through our rigorous selection process. You’ll never waste time on unqualified candidates—we connect you with accountants who truly understand your busines"
        />
      </div>
      <div className="section">
        <Separator
          className="bg-gray-300 h-0.5 my-2"
          orientation="horizontal"
        />
      </div>

      <div className="carousel">
        <Carousel
          title="Mastery in Accounting & IT Solutions"
          description="Our expertise in accounting and IT services empowers businesses with precision and efficiency. Whether it's financial management, bookkeeping, or tax solutions, or cutting-edge software development, cloud solutions, and IT support, we leverage the best tools and technologies to deliver excellence. With a deep understanding of both fields, we ensure seamless integration, accuracy, and innovation—so you can focus on growth while we handle the complexities."
        />
      </div>

      <div className="servic  ">
        <Herosection
          title="Showcase your business with expert bookkeeping."
          description="Take benefit of accounting and finance outsourced service to upsurge your profit and reduce overhead costs. By using more time on your core competencies and less time on books. Just outsource, save your time and money."
          image={bk}
        />

        <Herosection
          title="Monitor Your Finances to Strengthen Your Business"
          description="Missing financial records monthly or yearly? Don’t worry! We will help you recover and streamline your financial data, ensuring accuracy and compliance. Stay on track for better financial modeling, smarter decision-making, and sustainable business growth."
          image={FM}
        />

        <Herosection
          title="Your Own Payroll Management Services"
          description="Our expert payroll specialists provide a reliable helping hand for managing your payroll needs. They handle your payroll with the same dedication and precision as their own, ensuring accurate calculations, tax compliance, and timely payments. With our high-quality service, you save on costs compared to hiring an in-house payroll team while still receiving top-tier expertise and support."
          image={Payroll}
        />
      </div>
      <div className="section">
        <Separator
          className="bg-gray-300 h-0.5 my-2"
          orientation="horizontal"
        />
      </div>
      <CTA />

      <div className="section">
        <Footer />
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  .container,
  .Sub-tile {
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
    line-height: 40px;
    // margin-top: 50px;
    font-weight: 500;
  }
    .talent{display:flex;
    justify-content: space-around;}
    // img{ width: 0px;}

    .carousel{
    margin-top: 7%;}

  h1 {
    font-size: 28px; /* Change as needed */
    font-weight: 600;
  }
    .servic {
    display: flex;
    flex-direction: column;
    // gap: 20px;

  }


    .servic{ text-align: start; margin: 0 10%;}


.servic image{
    max-width: 700px;
    max-height: auto;
}

@media (min-width: 941px) and (max-width: 1024px){
   
    .servic image{
        max-width: 784px;
        max-height: 764px;
    }
}

@media (min-width: 741px) and (max-width: 940px){
   
    .servic image{
        max-width: 584px;
    }
}



  /* Reverse only the second Herosection */
  .servic > *:nth-child(2) .herosection {
    flex-direction: row-reverse;
  }
     @media (max-width: 741px) {
    .servic > *:nth-child(2) .herosection {
      flex-direction: column-reverse;
    }

`;

export default AccountingServices;
