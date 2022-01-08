import React from 'react'

import "./style.css"

const Splitwise = () => {


    return (
        <>


            <div className ="header">

                <div className ="container">


                    <div className ="logo">
                        DivideWise
                    </div>



                    <nav className ="navigation">
                        <div className ="nav-bar">
                            <a href="#" className ="nav-link"> Friends </a>
                            <a className ="nav-link"> Acitivity </a>
                            <a className ="nav-link"> About </a>
                            <a href="#contactus" className ="nav-link"> Contact Us </a>
                        </div>
                    </nav>


                </div>

            </div>



            <section className ="banner">
                <div className ="banner-description">
                    <i> Divide wisely with divide wise.
                        Manage money like never before. </i>
                    <p>
                        <button className ="btn"> Get Started </button>
                    </p>
                </div>
                <div className ="anim-div">
                    <img src="1.png" alt="" className ="anim" />
                </div>
            </section>

            <section className ="features" id="features">
                <h2 className ="title">Features</h2>
                <div className ="features-content">
                    <div className ="first">
                        <div className ="p1"><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt fugiat, et
                            explicabo earum consequatur pariatur saepe quia, quibusdam possimus at debitis ducimus eius
                            obcaecati velit, expedita magni placeat esse.</div>
                        <img src="bitslogo.jpg" alt="" /><br />
                    </div>
                    <div className ="second">
                        <img src="uwlogo.png" alt="" />
                        <div className ="p2"><br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ipsa animi repudiandae
                            quidem voluptates. Deleniti nobis a quis repudiandae neque est perspiciatis quibusdam! Excepturi
                            delectus cupiditate eaque, necessitatibus recusandae corporis?</div>
                    </div>
                </div>
            </section>
            <section>
                <div className ="about">
                    <h1>
                        About Us
                    </h1>
                </div>
            </section>


            <section className ="contact" id="contact">
                <div className ="max-width">
                    <h2 className ="titlet title1">Contact Us</h2>
                    <div className ="contact-content">
                        <div className ="text">Get in Touch</div>
                        <p>""Koi dhanda chota nahi hota aur dhande se bada koi dharam nahi hota"- Ammi Jaan" - Raees</p>
                        <div className ="icons">
                            <div className ="row">
                                <i className ="fas fa-user-graduate"></i>
                                <div className ="info">
                                    <div className ="head"> </div>
                                    <div className ="sub-title">AsteriX</div>
                                </div>
                            </div>
                            <div className ="row">
                                <i className ="fas fa-map-marked-alt"></i>
                                <div className ="info">
                                    <div className ="head">Phone</div>
                                    <div className ="sub-title1">8733863159</div>
                                    <div className ="sub-title1">atharv number nahi bola</div>
                                    <div className ="sub-title1"> krishna bhi</div>
                                </div>
                            </div>
                            <div className ="row">
                                <i className ="fas fa-at" ></i>
                                <div className ="info">
                                    <div className ="head" >Email</div>
                                    <div className ="sub-title">asteriX@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <section>
                <div className ="wrapper">
                    <div className ="button">
                        <div className ="icon">
                            <a href="https://www.linkedin.com/in/anushka-patil-306038128/" target="_blank"><i
                                className ="fab fa-linkedin"></i></a>
                        </div>
                        <a href="https://www.linkedin.com/in/anushka-patil-306038128/"
                            target="_blank"><span>LinkedIn</span></a>
                    </div>

                    <div className ="button">
                        <div className ="icon">
                            <a href="https://www.instagram.com/anu.sh.ka.patil/" target="_blank"><i
                                className ="fab fa-instagram"></i></a>
                        </div>
                        <a href="https://www.instagram.com/anu.sh.ka.patil/" target="_blank"><span>Instagram</span></a>
                    </div>

                    <div className ="button">
                        <div className ="icon">
                            <a href="https://github.com/anushka012399" target="_blank"><i className ="fab fa-github"></i></a>
                        </div>
                        <a href="https://github.com/anushka012399" target="_blank"><span>Github</span></a>
                    </div>

                </div>

            </section >



        </>
    )
}

export default Splitwise;