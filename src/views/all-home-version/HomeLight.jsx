import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Skills from "../../components/skills/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeOne = () => {
  useDocumentTitle("Home Light || React Personal Portfolio Template");
  return (
    <>
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Services</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End testimonial */}

      {/* Blog */}
      <section id="blog" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Accomplishments</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Blog />
        </div>
      </section>
      {/*  End Blog */}

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact us</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div className="sm-title">
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Always available for freelancing if the right project comes
                    along, Feel free to contact me.
                  </p>
                </div>
                {/* End .title */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                    Raleigh, <br />
                    North Carolina 27601 <br />
                   USA
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body-two">
                    professionallyjess@gmail.com
                   
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body-two">
                    +1 234 206 0736
                 
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </>
  );
};

export default HomeOne;
