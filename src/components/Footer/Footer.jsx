import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faGooglePlus,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footerCont">
      <div className="footer1">
        <div className="links">
          <div className="titles"> HobbyCue</div>
          <div>About Us</div>
          <div>Our Services</div>
          <div>Work with Us</div>
          <div>FAQ</div>
          <div>Contact Us</div>
        </div>
        <div className="links">
          <div className="titles"> How Do I</div>
          <div>Sign Up</div>
          <div>Add a Listing</div>
          <div>Claim Listing</div>
          <div>Post a Query</div>
          <div>Add a Blog</div>
          <div>Other Queries</div>
        </div>
        <div className="links">
          <div className="titles"> Quick Links</div>
          <div>Listings</div>
          <div>Blog Posts</div>
          <div>Shop / Store</div>
          <div>Community</div>
        </div>
        <div className="socialLinks">
          <div>
            <div className="titles">Social Media</div>
            <div className="iconsCont">
              <div>
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faPinterest} className="icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faGooglePlus} className="icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faYoutube} className="icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faTelegram} className="icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </div>
            </div>
          </div>
          <div>
            <div className="titles"> Invite Friends</div>
            <div className="inviteBox">
              <input
                className="inviteInput"
                type="text"
                placeholder="Search..."
              />
              <button className="inviteBtn">Invite</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">© Purple Cues Private Limited </div>
    </div>
  );
};

export default Footer;
