import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

interface ResumeRequestFormData {
  name: string;
  email: string;
  password: string;
}

const ResumeRequest: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeRequestFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const sendEmail = async (data: ResumeRequestFormData) => {
    try {
      await emailjs.sendForm(
        "service_2dr1qmv",
        "template_w5iqp0o",
        form.current?.form as HTMLFormElement,
        "NfAHr5e8dWDpEmpQJ"
      );
      alert(
        `Thank you for your message! I will return to you shortly via the email address you provided. Best, Abe`
      );
      setValue("name", "");
      setValue("email", "");
      setValue("password", "");
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="resume-request-container">
      <div className="resume-request-modal">
        <div className="title">
          <h3>Resume Request</h3>
        </div>
        <div className="form-container">
          <div className="form">
            <div className="caption">
              <p>
                Please provide your details to request access to my current resume. I will return to you with a password to access the resume.
              </p>
            </div>
            <div className="fields">
              <form className="contact-form" ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="name">
                  <input
                    {...register("name", {
                      required: "Name is required",
                      maxLength: {
                        value: 30,
                        message: "Please enter a name with fewer than 30 characters.",
                      },
                    })}
                    type="text"
                    placeholder="Name *"
                  />
                  {errors.name && <span className="invalid-feedback">{errors.name.message}</span>}
                </div>
                <div className="email">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    placeholder="Email *"
                  />
                  {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
                </div>
                <div className="password">
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    placeholder="Password *"
                  />
                  {errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
                </div>
                <div className="button">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeRequest;
