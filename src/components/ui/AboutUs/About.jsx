import React from 'react'
import Footer from '../Footer'
import img from '../images/about.png'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom";
import CTA from '../CTA'
import Carousel from '../Carousel'

import agenda from "../images/agenda.png";


import Teamcard from './Teamcard'

import './About.css';
import Herosection from '../Herosection'

const About = () => {
    return (
        <div>
            <div className="banner2">
            <div className='herosection2'>

    <div className="txt">

                    <h1>Your Go-To Solution for Accounting, Finance, and IT Services.</h1>
                    <br /> <p>Empower your business with cutting-edge IT services, including web and mobile development, workflow automation, and custom software solutions. Alongside our expertise in finance and accounting, we ensure seamless digital transformation and data-driven decision-making.</p>
    
                 
                </div>
                <div className='imagess2'>
                    <img src={img} alt="Banner Image" />
                </div>
        </div>

{/* <Herosection title = "Your Go-To Solution for Accounting, Finance, and IT Services." description = "Empower your business with cutting-edge IT services, including web and mobile development, workflow automation, and custom software solutions. Alongside our expertise in finance and accounting, we ensure seamless digital transformation and data-driven decision-making." image={img} /> */}

<div className="section">
                <Separator className="bg-gray-300 h-0.5 my-2 " orientation="horizontal" />
            </div>

            </div>

            <div className="agenda">

                <div className="leftside">
                    <h2>The Flaxtasks Leadership Agenda</h2>
                    <p className='text'>Sharp, actionable insights curated to help business leaders navigate the evolving landscape of accounting, finance, and IT solutions. Explore our latest content on key topics impacting organizations today, from financial strategy and compliance to digital transformation, cybersecurity, and automation.</p>
                </div>

                <div className="rightside">
                    <img src={agenda} alt="agenda image" className="agenda-img " />

                </div>

            </div>

            <div className="our-team container" >
                <h1>OUR TEAM</h1>
                <p class='text'>Our team is the heart of FLAXTASKS, consisting of many skilled professionals. We bring a wealth of experience and a diverse skill set to the table, ensuring excellence in every project. With a commitment to innovation and quality, our team tackles challenges with creativity and expertise. At FLAXTASKS, we thrive on delivering exceptional results for our clients.</p>

                <div className="meambers ">
                    <Teamcard position={'Chartered Accountants'} details={'Our CAs bring expertise in accounting, taxation, and financial regulations, ensuring your finances are managed with precision and insight.'}
                    />
                    <Teamcard position={'IT Developers'} details={'Our IT developers create and maintain robust financial systems and software, ensuring integration and functionality for all your accounting needs.'}
                    />
                    <Teamcard position={'Data Engineers'} details={'Leveraging advanced data analytics, our data engineers provide critical insights and innovative solutions to optimize your financial strategies.'}
                    />
                </div>

            </div>


            <div className="transforms container ">
                <div className="cta">
                    <div>
                        <h2>How we work with our Clients.</h2>
                    </div>
                    <div>
                        <Button >  <Link to="/contact">Contact Us</Link> </Button>
                    </div>
                </div>

                <div className="text-sec ">
                    <span className='grey'>Growing customer expectations. Market-shaping AI. Self optimizing systems.
                        <br /> <br />
                        The post-digital age shows no signs of slowing down, and the need for new ideas powered by intelligent technologies has never been greater.
                        <br /><br />
                        but a vision for the future can't be realized without know-how. We partner with our clients to drive real innovation—the kind that turns an idea into an industry—helping them transform and grow their organizations.
                    </span>

                </div>

            </div>

            {/* <div className="values">
                <h1>Our Core Values</h1>
            </div> */}
            <Carousel title="Mastery in Accounting & IT Solutions"
                description="Our expertise in accounting and IT services empowers businesses with precision and efficiency. Whether it's financial management, bookkeeping, or tax solutions, or cutting-edge software development, cloud solutions, and IT support, we leverage the best tools and technologies to deliver excellence. With a deep understanding of both fields, we ensure seamless integration, accuracy, and innovation—so you can focus on growth while we handle the complexities." />

            <div className="section">
                <Separator className="bg-gray-300 h-0.5 my-2 " orientation="horizontal" />
            </div>

            <CTA />




            <div className="section">
            <Footer />
            </div>
        </div >
    )
}

export default About