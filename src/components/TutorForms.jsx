import React from "react";
import close from "../assets/icons/close.svg";
import modals from "../events/modals";
import Icon from "./basic/Icon";

const areas = [
  {title: 'TSC Tutor (KCPE/KCSE)', link: "https://forms.gle/1iWLZk6QLMLE4BPU7", key: "a1"},
  {title: 'Non TSC Tutor (KCPE/KCSE)', link: "https://forms.gle/LerPUYib9EJ3yMxr7", key: "a2"},
  {title: 'International School Systems', link: "https://forms.gle/UHdTUnAE5ThJRDuF7", key: "a3"},
  {title: 'Tests', link: "https://forms.gle/uoWupEGS6p4VbLzdA", key: "a4"},
  {title: 'Sports Games', link: "https://forms.gle/ZNFbAHaBWhEsSwMCA", key: "a5"},
  {title: 'Foreign Languages', link: "https://forms.gle/eensLnyf6FbTqCks7", key: "a6"},
  {title: 'Hobbies and Interests', link: "https://forms.gle/nPNLZ4jnyqW35yGM9", key: "a7"},
  {title: 'Special Needs', link: "https://forms.gle/QGWv8Tr9kDp8Sc9K9", key: "a8"},
  {title: 'Professional Application Software', link: "https://forms.gle/K42KuUqoe2mJCpu27", key: "a9"}
];

const TutorForms = () => {
  return (
      <div id={'tutor-forms'} className={'forms-modal hidden'}>
        <section className={'header'}>
          <h4>Tutor Categories</h4>
          <Icon src={close} className="close-icon" height={5} width={5} units={'vh'} onClick={e => modals.tutorForms(e)}/>
        </section>
        <section className={'body'}>
          {areas.map((service) => (<a href={service.link} className={'area-link'} key={service.key}>{service.title}</a>))}
        </section>
        <section>
          <a href={'#areas'} onClick={e => modals.tutorForms(e)} className={'learn'}>Learn more about categories here</a>
        </section>
      </div>
  );
};

export default TutorForms;
