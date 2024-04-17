import { LuMapPin } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#02c39a] text-[#f0f3bd] grid md:grid-cols-3 lg:grid-cols-7 md:gap-x-10 lg:gap-x-12 p-8 mt-10">
        <nav className=" md:col-span-1 lg:col-span-2">
          <h6 className="footer-title text-[#2B3440]">Our Services</h6>
          <p>
            Premier estate brokerage offering bespoke property solutions,
            personalized client care, and unparalleled expertise in luxury real
            estate.
          </p>
          {/* <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a> */}
        </nav>
        <nav className=" md:col-span-1 lg:col-span-2">
          <h6 className="footer-title text-[#2B3440]">Contact Us</h6>
          <p className="flex items-center">
            <LuMapPin />
            &nbsp; 774 NE 84th St Miami, FL 33879
          </p>
          <p className="flex items-center">
            <FaRegEnvelope />
            &nbsp; email@email.com
          </p>
          <a className="link link-hover">Jobs</a>
          {/* <a className="link link-hover">Press kit</a> */}
        </nav>
        <form className=" md:col-span-1 lg:col-span-3">
          <h6 className="footer-title text-[#2B3440]">Newsletter</h6>
          <fieldset className="form-control md:w-full lg:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex flex-col md:flex-col lg:flex-row gap-2">
              <input
                type="text"
                placeholder="username@site.com"
                className="input h-[46px] rounded-none"
              />
              <button className="btn  rounded-none bg-[#2B3440] text-[#f0f3bd]">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer p-10 bg-neutral text-neutral-content items-center gap-16">
        <aside>
          <p>
            All content © copyright 2024 Luxstay. All rights reserved. Luxstay
            plc, incorporated and registered in England and Wales. Registered
            office: 33 Margaret Street, London, W1G 0JD. Registered number:
            2122174. Luxstay plc is a holding company, some of whose
            subsidiaries are authorised and regulated by the Financial Conduct
            Authority (FCA), and some of whose subsidiaries are regulated by the
            Royal Institution of Chartered Surveyors (RICS).
          </p>
        </aside>
        <nav className="flex items-center">
          <h6 className="footer-title">FIND US ON SOCIAL</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
