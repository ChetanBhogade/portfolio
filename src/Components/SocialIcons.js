import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import "./SocialIcons.css";

function SocialIcons(props) {
  return (
    <ul className="personal-social list">
      <li>
        <a
          href="https://github.com/ChetanBhogade"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size={props.size} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/chetan.bhogade.3/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook size={props.size} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/chetan_bhogade/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagramSquare size={props.size} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/BhogadeChetan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter size={props.size} />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
