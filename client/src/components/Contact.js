import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const dispatch = useDispatch();
  return (
    <div
      className="contact"
      style={{ width: "100%", marginLeft: "50px", marginTop: "130px" }}
    >
      <section className="mb-4" style={{ width: "80%", marginLeft: "10%" }}>
        {/*Section heading*/}
        <h2
          className="h1-responsive font-weight-bold text-center my-4"
          style={{ marginTop: "80px" }}
        >
          Contact us
        </h2>
        {/*Section description*/}
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row">
          {/*Grid column*/}
          <div
            className="col-md-9 mb-md-0 mb-5"
            style={{ marginRight: "20px" }}
          >
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows={2}
                      className="form-control md-textarea"
                      defaultValue={""}
                    />
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
            </form>
            <div className="text-center text-md-left">
              <a
                className="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
                style={{
                  background: "linear-gradient(to right, #cda9ac, #b8666d)",
                }}
              >
                Send
              </a>
            </div>
            <div className="status" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>Gabés , Tunisia</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x" />
                <p>+ 216 28832782</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <p>Sondesharizi09@gmail.com</p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
      </section>
    </div>
  );
};

export default Contact;
