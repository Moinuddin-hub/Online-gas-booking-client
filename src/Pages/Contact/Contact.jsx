import contact from "../../assets/contact.json";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uolh6oo",
        "template_54dpe5c",
        form.current,
        "eF4dvo3nRZsJ9smXd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className=" font-serif relative mx-auto mt-16 space-y-3   ">
        <div className="flex  flex-col lg:flex-row-reverse lg:w-[800px] w-[400px] shadow-2xl p-8 rounded-xl mx-auto dark:bg-gray-900 dark:text-gray-100 bg-slate-300 gap-8">
          <div className=" h-[500px]  md:visible">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Welcome</h2>
              <p>
                Feel free to reach our with any inquiries <br />
                suggestions,or just to say hello, we are
                <br />
                looking forward to hearing from you{" "}
              </p>
            </div>
            <Lottie animationData={contact} className=" w-96 mx-auto" />
          </div>
          <div className="w-[500px] h-[500px] mt-10">
            <h1 className="text-2xl font-bold text-center">Contact Us</h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              noValidate=""
              action=""
              className="space-y-6 w-80"
            >
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400 font-bold">
                  Name
                </label>
                <input
                  type="name"
                  name="from_name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400 font-bold">
                  Our message
                </label>
                {/* <input type="password"  name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" /> */}
                <textarea
                  name="message"
                  id=""
                  cols="65"
                  rows="5"
                  className="w-full"
                ></textarea>
              </div>
              <input
                type="submit"
                value="send"
                className="block w-full btn btn-primary p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
