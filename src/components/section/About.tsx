import React, { useState, useEffect } from "react";
import ModalContent from "../resume";
import Modal from "react-modal";

import { AboutData, SkillData } from "../../data";

Modal.setAppElement("#root");

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const mainContainer = document.querySelector(".main_container");
    if (mainContainer) {
      if (isOpen) {
        mainContainer.classList.add("disable-animation");
      } else {
        mainContainer.classList.remove("disable-animation");
      }
    }
  }, [isOpen]);

  return (
    <div className="about_container" id="about">
      <div className="about">
        <div className="left_div">
          <div className="about_title">
            <h3>{AboutData.title}</h3>
          </div>
          <div className="info">
            <p>{AboutData.paragraph1}</p>
            <br />
            <p>{AboutData.paragraph2}</p>
            <div className="skills">
              {SkillData.map((val, i: number) => (
                <div className="progress_inner" key={i}>
                  <span className="label">{val.name}</span>
                  <div className="full_bar">
                    <div className="bar">
                      <div
                        className="bar_inner"
                        style={{ width: val.skillPercent + "%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="button">
              <button
                type="submit"
                className="learn_more"
                onClick={toggleModal}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        AboutLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="modalbox">
          <button className="close-modal" onClick={toggleModal}>
            <img src="/assets/sidebar/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default About;
