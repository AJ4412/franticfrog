import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="py-5" data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <h1  className="text-center pb-4 main-heading kanit-font-family ">
        CONTACT US
        </h1>
        <div className="d-flex justify-content-center">
            
          <p
            className="text-center small-text justify max-width-975 opacity-07 montserrat-font-family"
          >
            To contact us, please reach out to our official{" "}
            <a
              className=" text-white"
              href="https://twitter.com/frankie_frantic"
              target="_blank"
              without rel="noreferrer"
            >
              @FCUBEHelp
            </a>{" "} account on Twitter, <br />or send an email to frankie@franticfrog.xyz<br /><br />
      
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Contact;
