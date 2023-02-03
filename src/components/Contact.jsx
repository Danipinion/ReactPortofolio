import React from "react";

function Contact() {
  return (
    <>
      <h1 className="text-white font-bold text-3xl mb-4 text-center">
        Contact Me
      </h1>
      <form className="flex flex-col gap-3 items-center mb-20 sm:mb-0">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="p-4 rounded-md w-full sm:w-1/2 text-black"
          style={{ boxShadow: "5px 5px 0px #000" }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          className="p-4 rounded-md w-full sm:w-1/2 text-black"
          style={{ boxShadow: "5px 5px 0px #000" }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="No Telp"
          className="p-4 rounded-md w-full sm:w-1/2 text-black"
          style={{ boxShadow: "5px 5px 0px #000" }}
        />
        <textarea
          name=""
          id=""
          placeholder="Pesan"
          className="p-4 rounded-md w-full sm:w-1/2 text-black"
          style={{ boxShadow: "5px 5px 0px #000" }}
        ></textarea>
        <div className="check flex gap-1">
          <input type="checkbox" />
          <p>Saya adalah manusia🤣</p>
        </div>
        <button
          type="submit"
          className="bg-cyan-600 px-7 py-3 rounded-md border-2"
          style={{ boxShadow: "5px 5px 0px #000" }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
