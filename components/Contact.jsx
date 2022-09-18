import React from "react";

const Contact = () => {
  return (
    <div className="py-5" data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <h1 className="text-center pb-4 main-heading kanit-font-family ">
        CONTACT US
        </h1>
        <div className="d-flex justify-content-center">
            
          <p
            className="text-center small-text justify max-width-975 opacity-07 montserrat-font-family"
            id="contact"
          >
            For technical support, please reach out to our official @FCUBEHelp account on Twitter, <br />or send an email to Frankie@franticfrog.xyz. <br /><br />
            
            <b>TROUBLESHOOTING</b><br />
            1. Please disconnect all of your wallets from the website, make sure all of them are disconnected.<br /><br />

            2. Click the padlock to the left of the URL inside chrome, then click cookies. Select all of the domains <br /> related to coolcats, for example franticfrog2, franticfrognft and www.franticfrog.xyz. <br />Then click remove.<br /><br />

            3. Select the correct wallet in metamask, but don’t connect yet.<br /><br />

            4. CTRL + F5 (Hold Shift + Click Reload on Mac) the website, to make sure you have the <br />latest version of the site (it may take a little longer to reload)<br /><br />

            5. Click connect, hopefully you should see the Meowpad at the top right of the website<br /><br />

            6. Once you’ve done this, we can check out the console to see if you are <br /> having any errors and how we can troubleshoot them.<br />
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Contact;
