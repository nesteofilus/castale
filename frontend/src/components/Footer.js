import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div id="leftFooter">
        <div id="footerHeading">
          <h1>The End</h1>
        </div>
        <div id="footerContent">&copy; Agnes Agatha Chang</div>
      </div>
      <div id="rightFooter">
        <a href="mailto: agnes.chang001@binus.ac.id">
          <img
            src="https://www.freepnglogos.com/uploads/email-png/email-messages-icon-16.png"
            width="37px"
            alt="Unable to load"
          ></img>
        </a>
        <a href="https://wa.me/6281282209870">
          <img
            src="https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png"
            width="37px"
            alt="Unable to load"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
