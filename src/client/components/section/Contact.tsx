import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import useWindowWidth from "../../hooks/useWindowWidth";

const Contact: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

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
          "__ejs-test-mail-service__",
          form.current,
          "NfAHr5e8dWDpEmpQJ"
        )
        .then(() => {
          alert(
            `Thank you for your message! I will return to you shortly via the email address you provided. Best, Abe`
          );
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Sorry, there was an error sending your message. Please try again later.");
        });

      setValue("name", "");
      setValue("email", "");
      setValue("message", "");
    }
  };

  return (
    <div
      id="contact"
      style={{
        width: "100%",
        height: "calc(var(--vh, 1vh) * 100)",
        clear: "both",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        overflow: "auto",
        position: isMobile ? "absolute" : "relative",
        top: isMobile ? "0" : undefined,
        bottom: isMobile ? "0" : undefined,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "0px",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          color: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            maxHeight: isMobile ? "100vh" : "800px",
            clear: "both",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: isMobile ? "transparent" : "#00000015",
              padding: isMobile ? "30px 20px" : "30px",
              borderRadius: isMobile ? "0px" : "8px",
              border: isMobile ? "none" : "1px solid white",
            }}
          >
            <div style={{ width: "100%", float: "left", marginLeft: "0px" }}>
              <p
                style={{
                  fontSize: isMobile ? "0.85rem" : "1rem",
                  lineHeight: "1.2",
                  marginBottom: "40px",
                  color: "rgba(255, 255, 255, 0.652)",
                }}
              >
                Please send a message for
                <br />
                <span style={{ fontWeight: 500, color: "#ffffff" }}>
                  resume request or new project.
                </span>
              </p>
            </div>
            <div style={{ width: "100%", float: "left", marginTop: "-30px" }}>
              <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
                <div style={{ width: "100%", marginBottom: "0px" }}>
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
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "none",
                      borderBottom: "1px solid #ffffff",
                      backgroundColor: "transparent",
                      fontSize: isMobile ? "0.75rem" : "0.85rem",
                      color: "#ffffff",
                      letterSpacing: "0.5px",
                      fontWeight: 400,
                      paddingLeft: "7px",
                    }}
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.75rem",
                      }}
                    >
                      Name is required
                    </span>
                  )}
                </div>
                <div style={{ width: "100%", marginBottom: "0px" }}>
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
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "none",
                      borderBottom: "1px solid #ffffff",
                      backgroundColor: "transparent",
                      fontSize: isMobile ? "0.75rem" : "0.85rem",
                      color: "#ffffff",
                      letterSpacing: "0.5px",
                      fontWeight: 400,
                      paddingLeft: "7px",
                      marginTop: "20px",
                    }}
                  />
                  {errors.email && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.75rem",
                      }}
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div style={{ width: "100%", marginBottom: "0px" }}>
                  <textarea
                    {...register("message", {
                      required: true,
                      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setValue("message", e.target.value);
                      },
                    })}
                    placeholder="Message"
                    style={{
                      marginTop: "20px",
                      width: "100%",
                      height: isMobile ? "140px" : "220px",
                      border: "solid 1px #ffffff50",
                      borderRadius: "5px",
                      backgroundColor: "transparent",
                      fontSize: isMobile ? "0.75rem" : "0.85rem",
                      color: "#ffffff",
                      fontWeight: 400,
                      letterSpacing: "0.5px",
                      resize: "none",
                      paddingLeft: "7px",
                    }}
                    className="bright-placeholder"
                  ></textarea>
                  {errors.message && (
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.75rem",
                      }}
                    >
                      Message is required
                    </span>
                  )}
                </div>
                <div style={{ width: "100%", float: "left", clear: "both" }}>
                  <button
                    type="submit"
                    value="Submit"
                    style={{
                      marginTop: "20px",
                      color: "white",
                      fontWeight: 500,
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      padding: isMobile ? "0.5rem 1.5rem" : "8px 20px",
                      display: "inline-block",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      border: "1px solid white",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgb(0, 0, 0)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0)")
                    }
                  >
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
