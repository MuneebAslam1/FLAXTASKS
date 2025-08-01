import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Img1 from "../ui/images/np.webp";
import Img2 from "../ui/images/chubbs.webp";
import Img3 from "../ui/images/EvvntLogo_Circle.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Testimonials = () => {
    return (
        <div id="page" className="site">
            <div className="container">
                <div className="testi" id="testimonial">
                    <div className="body">
                        <Swiper
                            className="swiper"
                            modules={[Navigation, Pagination]}
                            loop={true}
                            autoHeight={true}
                            pagination={{ clickable: true }}
                            navigation={true}
                        >
                            <SwiperSlide>
                                <div className="wrapper">
                                    <div className="thumbnail">
                                        <img src={Img1} alt="Client Thumbnail" />
                                    </div>
                                    <div className="aside">
                                        <p>
                                            Flaxtasks built a professional website for NP Marts and streamlined all our accounting processes. Their expertise in managing our accounts has been instrumental in driving our business growth.
                                        </p>
                                        <div className="name">
                                            <h4>Arshad Nazir Rana</h4>
                                            <i>CEO at NP Marts</i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wrapper">
                                    <div className="thumbnail">
                                        <img src={Img2} alt="Client Thumbnail" />
                                    </div>
                                    <div className="aside">
                                        <p>
                                            Flaxtasks has been an invaluable partner in managing our accounting at Chubbs Foods. Their attention to detail and expertise in handling all our financial tasks have helped us maintain smooth operations and make informed decisions.
                                        </p>
                                        <div className="name">
                                            <h4>Anne</h4>
                                            <i>Manager at Chubbs Foods</i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wrapper">
                                    <div className="thumbnail">
                                        <img src={Img3} alt="Client Thumbnail" />
                                    </div>
                                    <div className="aside">
                                        <p>
                                            Flaxtasks transformed our online presence with a stunning, fully responsive WordPress website. Their expertise in design and development ensured that our site is not only visually appealing but also highly functional and user-friendly.
                                        </p>
                                        <div className="name">
                                            <h4>Richard Green</h4>
                                            <i>CEO</i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};
