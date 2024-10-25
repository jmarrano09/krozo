import React from "react";

const ServiceContent = [
  {
    icon: "ti-world",
    title: "Frontend Development",
    descriptions: `Front-end developers use HTML, CSS, and JavaScript to build the client side of a website. 
    They are responsible for building the visual elements on a page, such as the layout, buttons, menus, forms, and 
    other features that `,
    bold: `users will see and interact with when they visit a webpage. `,
    descriptionsTwo: `In contrast with back-end developers, 
    who handle the business logic and data management requirements that power websites from behind the scenes, 
    front-end developers must have `,
    boldTwo: `a firm grasp of web design fundamentals and the overall user experience of a website.`
  },
  {
    icon: "ti-layout",
    title: "Web Design",
    descriptions: `A Web Designer is responsible for designing 
    the overall layout and aesthetic for websites for their clients. 
    Their duties can include sketching out websites by hand to creating wireframes to finalizing prototypes for the frontend developer.`,
    bold: ` However, a big misconception is that they are required to code.  They are not.`,
    descriptionsTwo: ` Coding can be a bonus, and maybe some companies want a jack of all trades web designer who can code, but coding is generally a bonus and not a requirement.`,
  },
  {
    icon: "ti-layout",
    title: "Graphic Design",
    descriptions: `A Web Designer is responsible for designing 
    the overall layout and aesthetic for websites for their clients. 
    Their duties can include sketching out websites by hand to creating wireframes to finalizing prototypes for the frontend developer.`,
    bold: ` However, a big misconception is that they are required to code.  They are not.`,
    descriptionsTwo: ` Coding can be a bonus, and maybe some companies want a jack of all trades web designer who can code, but coding is generally a bonus and not a requirement.`,
  },
  {
    icon: "ti-brush-alt",
    title: "UI Design",
    descriptions: `The “UI” in UI design stands for “user interface.” 
    The user interface is the graphical layout of an application. 
    It consists of the buttons users click on, the text they read, the images, sliders, text entry fields, 
    and all the rest of the items the user interacts with. This includes screen layout, transitions, 
    interface animations and every single micro-interaction. Any sort of visual element, interaction, or animation must all be designed.
   It’s up to them to make sure the application’s interface is attractive, visually-stimulating and themed appropriately 
    to match the purpose and/or personality of the app. And they need to make sure every single visual element feels united, both aesthetically, and in purpose.`,
  },
  {
    img: "UI-Development.png",

  },

  {
    icon: "ti-image",
    title: "UX Design",
    descriptions: `“UX” stands for “user experience.” 
    A user’s experience of the app is determined by how they interact with it. 
    Is the experience smooth and intuitive or clunky and confusing? Does navigating the app feel logical or does it feel arbitrary? 
    Does interacting with the app give people the sense that they’re efficiently accomplishing the tasks they set out to achieve or does it 
    feel like a struggle? User experience is determined by how easy or difficult it is to interact with the user interface elements that the UI designers have created.`,
    bold: `test`,
    descriptionsTwo: `fin`,
  },

];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-6 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}
                <strong>{val.bold}</strong>
                {val.descriptionsTwo}
                <strong>{val.boldTwo}</strong></p>
                <img
                              src={`img/blog/${val.img}.png`}
                             
                            />
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
