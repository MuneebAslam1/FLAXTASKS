import React from 'react'
import './services.css'
import { Button } from "@/components/ui/button"
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator"
import { Services } from "@/components/ui/Services"
import Footer from '../Footer'
import CTA from '../CTA'
import img from '../images/autm.png'
import aiimg from '../images/ai.png'
import ccimg from '../images/ccc.png'
import webimg from '../images/web.png'
import web3 from '../images/web3.png'
import Carousel from '../Carousel';
// import { FaCheckCircle } from "react-icons/fa";




const Servicepage = () => {
    return (
        <>
            {/* <div className='text-center mt-5'>IT Services & Solutions</div>

            <section className='hero'>
                here section here with a CTA
            </section> */}


<div className="banner2">
            <div className='herosection2'>

    <div className="txt">

                    <h1>Innovative IT Solutions for a Smarter Business</h1>
                    <br /> <p>We provide end-to-end IT solutions, including web and mobile development, workflow automation, and custom software tailored to your business needs. From seamless system integrations to enterprise solutions, we enhance efficiency, security, and scalability, empowering your business for long-term success.</p>
    
                 
                </div>
                <div className='imagess2'>
                    <img src={web3} alt="Banner Image" />
                </div>
        </div>

{/* <Herosection title = "Your Go-To Solution for Accounting, Finance, and IT Services." description = "Empower your business with cutting-edge IT services, including web and mobile development, workflow automation, and custom software solutions. Alongside our expertise in finance and accounting, we ensure seamless digital transformation and data-driven decision-making." image={img} /> */}

<div className="section">
                <Separator className="bg-gray-300 h-0.5 my-2 " orientation="horizontal" />
            </div>

            </div>



            <section className='section'>
                <div className="container ">

                    <div className="heading"> <h2> Why Choose Flaxtasks for your IT Needs?</h2></div>
                    <p className='text-centerr'> Flaxtasks offers a comprehensive range of IT services, covering everything from mobile and web app development to CMS solutions and custom software development. We specialize in workflow automation and provide end-to-end development cycles, from ideation and design to seamless integration, deployment, and ongoing support. Whether you need a consumer-facing application or a robust enterprise solution, we ensure precision, innovation, and reliability at every stage.</p>

                </div>
                <div className="points flex">
                    <div className="left-side m-12 w-1/2">
                        <ul>
                            {/* <FaCheckCircle style={{ color: "blue", fontSize: "20px" }} /> */}

                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-2">✓</span>
                                    Comprehensive IT solutions covering web, mobile, and custom development
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-2">✓</span>
                                    Enterprise software development & integrations, including ERP and workflow automation
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-2">✓</span>
                                    Expertise in CMS, e-commerce, and SaaS development for businesses of all sizes
                                </li>

                                <li className="flex items-center">
                                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-2">✓</span>
                                    A skilled team of IT professionals dedicated to delivering high-quality solutions
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-2">✓</span>
                                    Years of experience in full-cycle software development, from concept to deployment
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-2">✓</span>
                                    Custom automation solutions to streamline business processes and enhance efficiency
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 bg-blue-100 p-2 rounded-full mr-2">✓</span>
                                    Long-term strategic partnerships to support ongoing IT needs
                                </li>
                            </ul>

                        </ul>
                    </div>

                    <div className="right-side w-1/2">
                        <img src={img} alt="" />
                    </div>

                </div>
            </section>


            <section>
                <div className="ctaa ">
                    <h2 className='text-center' >NEED TO SPEED UP YOUR SOFTWARE DEVELOPMENT?</h2>
                    <Button size="lg" variant="secondary" style={{ color: "black;" }} className="w-auto mx-auto"> <Link to='/contact'>
                        DISCOVER HOW WE CAN HELP
                    </Link>
                    </Button>
                </div>
            </section>


            <section>
                <div className="key-services mb-8">
                    <h2 className='text-center mb-8'>OUR KEY SERVICES</h2>
                </div>

                <div className="flex justify-center gap-4 mb-8 cards container">

                    <Services
                        svgs={webimg}
                        title="Web & App Development"
                        description="We build high-performance websites and mobile apps tailored to your needs. Using modern technologies, we create user-friendly, responsive, and scalable digital experiences that drive growth."
                    />

                    <Services
                        svgs={aiimg}
                        title="Workflow Automation"
                        description="We automate repetitive tasks to boost efficiency and reduce errors. By integrating AI-driven solutions, we help businesses optimize their operations and focus on what matters most."
                    />

                    <Services
                        svgs={ccimg}
                        title="Cloud Computing"
                        description="Our cloud solutions offer secure, scalable, and flexible access to data and applications. We migrate your systems to the cloud, ensuring seamless integration and uninterrupted access from anywhere."
                    />


                </div>
            </section>

            <section className='mt-[6%]'>

                <Carousel title="Tech Stack We Use"
                    description="We leverage a diverse range of technologies to deliver powerful and scalable solutions. Our expertise spans all major CMS platforms, including WordPress, Webflow, Shopify, Orchard, and Bubble, allowing us to create flexible and customizable websites tailored to business needs. For custom development, we use modern frontend frameworks like HTML, CSS, JavaScript, React, React Native, Vue.js, Next.js, and Angular, ensuring seamless user experiences across web and mobile platforms. On the backend, we work with MySQL, MongoDB, Node.js, PHP, and Python, building secure, high-performance applications. By combining CMS flexibility with custom coding, we provide innovative, efficient, and scalable digital solutions." />


                <div className="section">
                    <Separator className="bg-gray-300 h-0.5 my-2" orientation="horizontal" />
                </div>
            </section>

            <CTA />

            <div className="section">
                <Footer />
            </div>

        </>

    )
}

export default Servicepage






