import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../../components/contact/Contact";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 my-3">
          <div className="blog-post" onClick={toggleModalOne}>
            <div className="blog-img">
              {/* <div className="data">
                <span>14</span>
                <small>Jan</small>
              </div> */}
              <img src="img/blog/visions.jpg" alt="blog post"></img>
            </div>
            {/* End blog-img */}

            <div className="blog-info">
              <h6>Visions Film Festival and Conference</h6>
              <p>
                Lead artist and web designer for Visions Film Festival and Conference at the University of North Carolina Wilmington.

              </p>
              <div className="btn-bar">Read More</div>
            </div>
            {/* End blog-info */}
          </div>
          {/* End blog-post */}
        </div>
        {/* End .col for blog-1 */}

        <div className="col-lg-4 col-md-6 my-3">
          <div className="blog-post" onClick={toggleModalTwo}>
            <div className="blog-img">
              {/* <div className="data">
                <span>07</span>
                <small>May</small>
              </div> */}
              <img src="img/blog/RISD.jpg" alt="blog post"></img>
            </div>
            {/* End blog-img */}

            <div className="blog-info">
              <h6>Rhode Island School of Design</h6>
              <p>
                2009 Rhode Island School of Design Art Design Award Winner; art displayed at the High Museum in Atlanta, GA.
              </p>
              <div className="btn-bar">Read More</div>
            </div>
            {/* End blog-info */}
          </div>
          {/* End blog-post */}
        </div>
        {/* End .col for blog-1 */}

        <div className="col-lg-4 col-md-6 my-3">
          <div className="blog-post" onClick={toggleModalThree}>
            <div className="blog-img">
              {/* <div className="data">
                <span>22</span>
                <small>Apr</small>
              </div> */}
              <img src="img/blog/advance.jpg" alt="blog post"></img>
            </div>
            {/* End blog-img */}

            <div className="blog-info">
              <h6>Lead Frontend Developer at Advance Auto Parts</h6>
              <p>
                Edited, updated, and maintained over 50 pages for a Fortune 500 website successfully for B2C relations
              </p>
              <div className="btn-bar">Read More</div>
            </div>
            {/* End blog-info */}
          </div>
          {/* End blog-post */}
        </div>
        {/* End .col for blog-1 */}
        {/* <div className="col-lg-3 col-md-6 my-3">
          <div className="blog-post" onClick={toggleModalFour}>
            <div className="blog-img">
           
              <img src="img/blog/high_museum.jpg" alt="blog post"></img>
            </div>

            <div className="blog-info">
              <h6>High Museum of Art, Atlanta, GA</h6>
              <p>
                Edited, updated, and maintained over 50 pages for a Fortune 500 website successfully for B2C relations
              </p>
              <div className="btn-bar">Read More</div>
            </div>
          </div>
        </div> */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/visions_poster.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      Visions Film Festival and Conference
                    </h2>
                    {/* <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-1.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY ALEX</label>
                        <span>26 FEB 2020</span>
                      </div>
                    </div> */}
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Visions Film Festival and Conference is a film festival located in Wilmington, NC that aims to unite a diverse community of undergraduate students through scholarly analysis, discussion panels and innovative screenings.
                    </p>

                  
                    <h4>I was one of the lead artists.</h4>
                    <p>
                      I created the image of the internal camera projecting out through the lenses of a person's eyes using handsketches, Adobe Photoshop, and my graphic design skills.
                    </p>
                    {/* <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote> */}
                    <p>
                      I collaborated and communicated with my art team to help make the Visions Film Festival and Congress possible.  We judged submissions and accepted international films
                      as well as avante guard and animation films.
                    </p>
                    <div className="blog-img">
                    <img src="img/blog/visions_tshirts.jpg" alt="blog post"></img>
                  </div>
                  <div className="blog-img">
                    <img src="img/blog/visions ad lumina.jpg" alt="blog post"></img>
                  </div>
                    <p>
                    Additionally, I made graphic designs for posters, promotional fliers, the website, animation graphics, T-shirts, and business cards. I helped Design and build the website for the festival, showing how people could view the upcoming films and events. 
The website was built with user interface and user experience in mind. 
                    </p>
                    <p>
                      Since the dawn of time, we have had stories, cameras, projectors, visions in our heads.  Everyone sees through the eyes of their own lens.  So let's wind up the camera and create.  What do you see?  What Vision shall you bring to life and share with the world?
                    </p>
                  </div>
                  <div className="blog-img">
                    <img src="img/blog/1hr_1take.jpg" alt="blog post"></img>
                  </div>
                  <p>
                  Also, I created the image for Visions’ One Minute One Take Video Race contest, a contest where filmmakers must make a themed video within one hour with one take. 
What story can you tell with one hour in one take? 
                  </p>
                  <div className="blog-img">
                    <img src="img/blog/visions.jpg" alt="blog post"></img>
                  </div>
                  
                  {/* End article content */}
                </article>
                {/* End Article */}

                {/* <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div> */}
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/RISD.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    2009 Rhode Island School of Design Art Award Winner; art displayed at the High Museum in Atlanta, GA.
                    </h2>
                    {/* <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-2.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY SMITH</label>
                        <span>05 JAN 2020</span>
                      </div>
                    </div> */}
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    The Rhode Island School of Design Art Award is an international and yearly award only bestowed upon those of great artistic talent.  
                    I didn't even apply.  My art teacher and mentor nominated me along with my art from that year, and I won.
                    </p>
                 
                    
                    <h4>Furthermore ...</h4>
                    <p>
                      That same artwork was displayed at the High Museum of Art in Atlanta, GA during the same time the Terra Cotta Warriors were on display.  It was a great honor, and a privilege.
                    </p>
                    <div className="blog-img">
                  <img src="img/blog/high_museum.jpg" alt="blog post"></img>
               
                    {/* <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote> */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                    <div className="blog-img">
                  <img src="img/blog/soul.jpg" alt="blog post"></img>
                </div>
                  </div>
                  {/* End article content */}
                </article>
                {/* End Article */}

                {/* <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div> */}
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY RIO</label>
                        <span>12 AUG 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}
      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY RIO</label>
                        <span>12 AUG 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lorem et
                      pede dis dolor pretium donec dictum. Vici consequat justo
                      enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                      veni amet luctus enim sem libero tellus viverra venenatis
                      aliquam. Commodo natoque quam pulvinar elit.
                    </p>
                    <p>
                      Eget aenean tellus venenatis. Donec odio tempus. Felis
                      arcu pretium metus nullam quam aenean sociis quis sem
                      neque vici libero. Venenatis nullam fringilla pretium
                      magnis aliquam nunc vulputate integer augue ultricies
                      cras. Eget viverra feugiat cras ut. Sit natoque montes
                      tempus ligula eget vitae pede rhoncus maecenas
                      consectetuer commodo condimentum aenean.
                    </p>
                    <h4>What are my payment options?</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  {/* End article content */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}
    </>
  );
};

export default Blog;
