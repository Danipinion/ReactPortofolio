import axios from "axios";
import React, { useEffect, useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pesan, setPesan] = useState("");
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    check === true ? setOpen(true) : setOpen(false);
  });
  const kirimPesan = (e) => {
    e.preventDefault();
    const data = {
      Email: email,
      Name: name,
      Pesan: pesan,
    };
    if (open === false) {
      return alert("Harap Centang Saya Adalah Manusia");
    }
    axios
      .post(
        "https://sheet.best/api/sheets/f7db2e96-34d7-4c30-8e73-7dbe6f492f69",
        data
      )
      .then((response) => console.log(response));
    setEmail("");
    setName("");
    setPesan("");
    setCheck(false);
  };
  return (
    <div className="p-5">
      <h1 className="text-white font-bold text-3xl mb-4 text-center">
        Contact Me
      </h1>
      <form
        className="flex flex-col gap-3 items-center mb-20 sm:mb-0"
        onSubmit={kirimPesan}
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="p-4 rounded-md w-full sm:w-1/2 text-black"
          style={{ boxShadow: "5px 5px 0px #000" }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="p-4 rounded-md w-full sm:w-1/2 text-black"
          style={{ boxShadow: "5px 5px 0px #000" }}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          name=""
          id=""
          placeholder="Pesan"
          className="p-4 rounded-md w-full sm:w-1/2 text-black"
          style={{ boxShadow: "5px 5px 0px #000" }}
          onChange={(e) => setPesan(e.target.value)}
          value={pesan}
        ></textarea>
        <div className="check flex gap-1">
          <input
            type="checkbox"
            onChange={() => setCheck(!check)}
            checked={check}
          />
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
    </div>
  );
}

export default Contact;
