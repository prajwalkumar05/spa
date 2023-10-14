import React from "react";
import "./Navbar.css";
import Upic from "../assets/userprofile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="sidebar-container">
      <div className="profile">
        <div class="dropdown">
          <FontAwesomeIcon className="icon" icon={faUser} color="white" /> 

            <div class="dropdown-content">
            <span>Hello, Client!</span>
            <button>Logout</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
