import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const [State, formSubmit] = useForm("xrgvevnr");
  if (State.succeeded) {
    return (
      <>
        <div className="my-4 mb-auto mt-auto text-center ">
          <h3 className="text-center">Thanks For Contacting Banke Viharee Enterprises</h3>
        </div>
      </>
    );
  }

  // const formSubmit=(e)=>{
  //   e.preventDefault();
  //   alert(`Hey ${data.fullname} Response received and acknowledged. Thank you for submitting.`)
  // };

  return (
    <>
      <div className="my-4 mb-auto text-center ">
        <h1 className="text-center">Contact Us</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.679377506733!2d79.6281435149779!3d27.26058328297893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3bf4fe85dc01%3A0xbdb0a98ad2869e7a!2sShree%20Banke%20Viharee%20Jee%20Enterprises!5e0!3m2!1sen!2sin!4v1675494568035!5m2!1sen!2sin"
          width="80%"
          height="350"
          style={{ border: 0, margin: "20px auto" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your fullname.."
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone No.
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your mobile number.."
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="message"
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  class="btn btn-outline-primary"
                  type="submit"
                  disabled={State.submitting}
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
