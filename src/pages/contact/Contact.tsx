import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">CONTACT US</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          / CONTACT
        </p>
      </div>
      <div className="w-3/4 mx-auto my-24">
        <p className="text-slate-900 text-sm font-semibold mb-2">LOCATIONS</p>
        <h3 className="text-3xl text-slate-900 font-extrabold mb-7">
          Come and visit our office.
        </h3>
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.919544576207!2d90.39968401425737!3d23.892471489252564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4453f44ee37%3A0xc5ca99a2db987f01!2sStation%20Road%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1678765669351!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="grid grid-cols-3 w-3/4 gap-5 mb-20 mx-auto">
        <div className="col-span-1 bg-violet-200 px-5 py-10">
          <h4 className="text-xl text-slate-950 font-semibold">Contact Info</h4>
          <p className="text-sm text-slate-950 mt-2">Phone: +8801786580192</p>
          <p className="text-sm text-slate-950 mt-2">
            Email: smmaruf25@gmail.com
          </p>
          <p className="text-sm text-slate-950 mt-2">
            Address: Station-road, Tongi, Gazipur, Bangladesh
          </p>
        </div>
        <div className="col-span-2 bg-violet-200 px-5 py-10">
          <div className="grid grid-cols-2 gap-5">
            <label htmlFor="Name" className="text-xs">
              Name <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
              />
            </label>
            <label htmlFor="Email" className="text-xs">
              Email <br />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
              />
            </label>
            <label htmlFor="Subject" className="text-xs col-span-2">
              Subject <br />
              <input
                type="text"
                placeholder="Subject"
                className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
              />
            </label>
            <label htmlFor="Message" className="text-xs col-span-2">
              Message <br />
              <textarea
                placeholder="Message"
                className="input text-xs input-bordered w-full py-2 h-36 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
