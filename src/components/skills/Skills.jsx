import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2017 - 2018</span>
              <h6>Computer Science</h6>
              <p>University of North Carolina at Chapel Hill</p>
            </li>
            <li>
              <span className="dark-bg">2009 - 2014</span>
              <h6>Film Studies and Digital Art</h6>
              <p>University of North Carolina Wilmington</p>
            </li>
            <li>
              <span className="dark-bg">2007 - 2008</span>
              <h6>Cinematography and Editing </h6>
              <p>New York Film Academy</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Web Designer, UX/UI Designer</h6>
              <p>College Foundation</p>
            </li>
            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Frontend Developer, UX/UI Designer</h6>
              <p>Advance Auto Parts</p>
            </li>
            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Web Developer</h6>
              <p>University of Georgia</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}
        <div className="col-lg-4 ml-auto my-3 ">
          <div className="sm-title">
            <h4 className="font-alt">Competencies</h4>
          </div>
          <ul className="theme-bg aducation-box competencies">
            <li> <h7>Compelling Relationship Builder</h7> <br></br>
              <h7>Effective Communicator </h7><br></br>
              <h7>Artistic</h7> <br></br>
              <h7>Tech Savvy</h7>
            </li>

            <li>
              <h7> Exceptional Problem Solver</h7><br></br>
              <h7>Attention to Detail</h7><br></br>
              <h7>Great Teamwork Skills</h7><br></br>
              <h7>Adaptability</h7>
            </li>

            <li>
              <h7>Highly Analytical</h7><br></br>
              <h7>Time/Stress Management</h7><br></br>
              <h7>Multi-tasker</h7>
            </li>


          </ul>

        </div>

        {/* End .col */}
      </div>
      <div className="row">
        <div className="col-lg-6 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">Questions</h4>
          </div>
          <ul className="gray-bg skill-box">
            <li>
              <p><strong>1. What development tools do you use daily?</strong></p>
              <p>Visual Studio Code, Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma</p>
            </li>
            <li>
              <p><strong>2. What are you currently learning and why?</strong></p>
              <p>Brushing up on my React.js for future websites</p>
            </li>
            <li>
              <p><strong>3. Describe a technically challenging project you recently completed and what was your specific contribution to it.</strong></p>
              <p>I had a client who did not understand the difference between frontend and backend development.
                They gave me a project which was more than I could handle, so I reached out to a fellow resource for help, and all the problem was solved.</p>
            </li>
          </ul>

        </div>

        {/* End .col */}

        <div className="col-lg-6 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>React js</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 40 + "%" }}
                >
                  <span>4 years</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>HTML</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 95 + "%" }}
                >
                  <span>10 years</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Javascript</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 50 + "%" }}
                >
                  <span>5 years</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>UI/UX</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 75 + "%" }}
                >
                  <span>7 years</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>CSS5</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 90 + "%" }}
                >
                  <span>8 years</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>

        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
