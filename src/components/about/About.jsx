import React from "react";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box">
            <img src="img/about/about-1.jpg" alt="smiling a girl" />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h3>Jess M.</h3>
            <h5>
              I am a <span className="color-theme">UX &amp; UI</span> designer
              based in the<span className="color-theme"> USA</span>
            </h5>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, and web services. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                {/* <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1991</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div> */}
                <div className="media">
                  <label>Citizen</label>
                  <p>USA</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Raleigh, USA</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>info@domain.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>820-885-3321</p>
                </div>
                <div className="media">
                  <label>Fulltime</label>
                  <p>Available</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/resume.png" download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
