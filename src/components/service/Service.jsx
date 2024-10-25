import React from "react";
// import UI-Development from "./public/img/blog/UI-Development.png"; // gives image path

const Service = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Frontend Development</h4>
          </div>
          <div className="feature-box-01">

            <p>Front-end developers use code, such as HTML, CSS, and JavaScript, to build the client side of a website.
              They are responsible for building the visual elements on a page, such as the layout, buttons, menus, forms, and
              other features that <strong> the users will see and interact with when they visit a webpage.</strong> In contrast with back-end developers,
              who handle the business logic and data management requirements that power websites from behind the scenes,
              front-end developers must have, <strong>a firm grasp of web design fundamentals and the overall user experience of a website.</strong></p>

          </div>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Web Design</h4>
          </div>
          <div className="feature-box-01">

            <p>A Web Designer is responsible for designing 
    the overall layout and aesthetic for websites for their clients. 
    Their duties can include sketching out websites by hand to creating wireframes to finalizing prototypes for the frontend developer.`,
    <strong>However, a big misconception is that they are required to code.  They are not.</strong> Coding can be a bonus, and maybe some companies want a jack of all trades web designer who can code, but coding is generally a bonus and not a requirement.</p>

          </div>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}
        <div className="col-lg-4 ml-auto my-3 ">
          <div className="sm-title">
            <h4 className="font-alt">UX/UI Design</h4>
          </div>
          <div className="feature-box-01">

            <p>The “UI” in UI design stands for “user interface.” 
    The user interface is the graphical layout of an application. 
    It consists of the buttons users click on, the text they read, the images, sliders, text entry fields, 
    and all the rest of the items the user interacts with. This includes screen layout, transitions, 
    interface animations and every single micro-interaction. Any sort of visual element, interaction, or animation must all be designed.
   It’s up to them to make sure the application’s interface is attractive, visually-stimulating and themed appropriately 
    to match the purpose and/or personality of the app. And they need to make sure every single visual element feels united, both aesthetically, and in purpose.`</p>

          </div>

        </div>

        {/* End .col */}
      </div>
      <div className="row">
        <div className="col-lg-12 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">Example</h4>
          </div>
          <div className="portfolio-box-01">

            <div className="service-img">
              <img src="img/blog/UI-Development.png" alt="diagram" />
            </div>

          </div>

        </div>

        {/* End .col */}

      </div>
    </>
  );
};

export default Service;
