import { useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

const Contact = () => {
  init(process.env.REACT_APP_USER_ID);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && email && message) {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setError(false);
            setSuccess(true);
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            setError(true);
            setSuccess(false);
            setLoading(false);
          }
        );

      setTimeout(() => {
        setSuccess(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 3000);
    }
  };
  return (
    <div className="p-3 max-w-7xl mx-auto pb-10" id="contact">
      <div className="px-6 mt-5 max-w-7xl ">
        <h2
          id="contact"
          className="text-4xl lg:text-6xl font-bold border-b-2 border-gray-500 dark:text-sky-500 dark:border-sky-500"
        >
          Contact Me
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mt-2  dark:text-white">
          Feel free to contact me!
        </p>

        <form
          onSubmit={sendEmail}
          className="text-lg max-w-4xl mx-auto dark:text-white"
        >
          <div className="flex flex-wrap mt-2 items-center gap-5 py-2 mb-2 ">
            <ul className="flex items-center justify-center gap-10">
              <li>
                <a
                  href="https://github.com/FSuaverdez"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex flex-row justify-center items-center">
                    <div>
                      <AiFillGithub className="text-4xl text-gray-900 dark:text-gray-300" />
                    </div>
                    <p className="font-semibold ml-2">FSuaverdez</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto: sfrannz@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex flex-row justify-center items-center">
                    <div>
                      <AiFillMail className="text-4xl text-red-600" />
                    </div>
                    <p className="font-semibold ml-2">sfrannz@gmail.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            {error && (
              <p className="bg-red-400  py-3 font-bold text-black w-fit mx-auto p-5 rounded-full">
                Error occured. Please reload the page and try again.
              </p>
            )}
            {success && (
              <p className="bg-green-400  py-3 font-bold text-black w-fit mx-auto p-5 rounded-full">
                Message Sent Successfully!
              </p>
            )}
          </div>
          <label htmlFor="name" className="font-bold mt-4 inline-block">
            Name:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 dark:text-black"
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="email" className="font-bold mt-4 inline-block">
            Email:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 dark:text-black"
            type="email"
            id="email"
            name="email"
          />
          <label htmlFor="message" className="font-bold mt-4 inline-block">
            Message:
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 h-40 resize-none dark:text-black"
            id="message"
            name="message"
          />
          <div className="text-center">
            <button
              className=" bg-sky-500 text-white font-bold rounded-full px-5 py-2 disabled:bg-sky-200 disabled:cursor-not-allowed"
              type="submit"
              disabled={success || loading}
            >
              {loading ? "Sending.." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
