import React from "react";
import ButtonLink from "./basic/ButtonLink.jsx";
import signUpHandler from "../events/SignUpModal";

const SignUpModal = (props) => {
  return (
      <div className={props.className}>
        <div className={"close-icon " + props.status} onClick={e => signUpHandler(e)}>&#10006;</div>
        <div id="sign-up-text">{props.signUpText}</div>
        <section>
          <div className="user-title">
            teachers/tutors only
          </div>
          <div id="tutor-btns">
            <ButtonLink link="https://forms.gle/LerPUYib9EJ3yMxr7" className="tutor-btn" value="Non TSC Tutor"/>
            <ButtonLink link="https://forms.gle/ZU8GZrYVPWenL4r19" className="tutor-btn" value="TSC Tutor"/>
          </div>
        </section>
        <div className="info">If you face difficulty in registering call, text or WhatsApp on 0772 915 361</div>
      </div>
  );
};

// Exporting the component
export default SignUpModal;
