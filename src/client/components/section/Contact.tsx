import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    message: string;
  }>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_2dr1qmv",
          "template_w5iqp0o",
          form.current,
          "NfAHr5e8dWDpEmpQJ"
        )
        .then(() => {
          alert(
            `Thank you for your message! I will return to you shortly via the email address you provided. Best, Abe`
          );
        });

      setValue("name", "");
      setValue("email", "");
      setValue("message", "");
    }
  };

  return (
    <div className="contact_container" id="contact">
      <div className="contact">
        <div className="form_container">
          <div className="form">
            <div className="caption">
              <p>
                Please send a message for
                <br />
                <span> resume request or new projects.</span>
              </p>
            </div>
            <div className="fields">
              <form className="contact_form" ref={form} onSubmit={sendEmail}>
                <div className="name">
                  <input
                    {...register("name", {
                      required: true,
                      maxLength: {
                        value: 30,
                        message:
                          "Please enter a name with fewer than 30 characters.",
                      },
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue("name", e.target.value);
                      },
                    })}
                    type="text"
                    placeholder="Name"
                    defaultValue="Your name"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span className="invalid-feedback">Name is required</span>
                  )}
                </div>
                <div className="email">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue("email", e.target.value);
                      },
                    })}
                    type="email"
                    placeholder="Email"
                    defaultValue="Your email"
                  />
                  {errors.email && (
                    <span className="invalid-feedback">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="message">
                  <textarea
                    {...register("message", {
                      required: true,
                      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setValue("message", e.target.value);
                      },
                    })}
                    placeholder="Message"
                    defaultValue="Your message"
                  ></textarea>
                  {errors.message && (
                    <span className="invalid-feedback">
                      Message is required
                    </span>
                  )}
                </div>
                <div className="button">
                  <button type="submit" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
