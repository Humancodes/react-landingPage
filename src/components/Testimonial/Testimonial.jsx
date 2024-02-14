import React from "react";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonialCont">
      <div className="cardTestimonial">
        <div className="headBox">
          <img className="quote" src="/assets/quote.png" alt="" />
          <div className="title">Testimonials</div>
        </div>
        <div className="desc">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </div>

        <div className="imgContainer">
          <img className="imgPlay" src="/assets/play.png" alt="" />
          <div className="profile">
            <img className="imgavatar" src="/assets/avatar.png" alt="" />
            <div className="nameBox">
              <div style={{ color: "#8064A2", fontWeight: "bold" }}>
                Shubha Nagarajan
              </div>
              <div style={{ color: "#0096C8", fontSize: "15px" }}>
                Classical Dancer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
