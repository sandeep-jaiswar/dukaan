import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaShuttleVan,
  FaUser
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { NavDropdown } from "react-bootstrap";
import "../styles/UserDetailsOnHeader.css";

const UserDetailsOnHeader = () => {
  const name = "Sandeep Jaiswar";
  const [userNavShow, setUserNavShow] = useState(false);
  return (
    <div className="userDetailsOnHeader">
      <div className="ownerDetails">
        <div className="socialContacts">
          <FaFacebookSquare className="social-icon"></FaFacebookSquare>
          <FaInstagram className="social-icon"></FaInstagram>
        </div>
        <div className="owner-contact-number">9967374668</div>
        <div className="owner-contact-email">jaiswarsandeep119@gmail.com</div>
      </div>
      <div className="userDetails">
        <div className="track-order">
          <FaShuttleVan />
          <span>Track order</span>
        </div>
        <div
          className="user-nav-with-name"
          onClick={() => setUserNavShow(!userNavShow)}
        >
          <FaUser />
          {name.length > 10 ? `${name.slice(0, 10)}...` : name}
          {userNavShow ? <FiChevronUp /> : <FiChevronDown />}
          <div hidden={!userNavShow}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsOnHeader;
