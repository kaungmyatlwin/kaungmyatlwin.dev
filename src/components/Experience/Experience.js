import React from 'react';
import './Experience.scss';

const nexlabsExperiences = [
  {
    title: 'Mingalarletphwet',
    subtitle: 'Website for Wedding Gifts. \nTook a part in coding the UI of Mingalarletphwet Website, along side with specialty in interactions.',
    stacks: ['SCSS', 'jQuery'],
  },
  {
    title: 'nexlabs.co',
    subtitle: `nexlabs' official landing website. Took a part in transforming from Design to Code. Coded bundling / setting up dev environment with Gulp, and interactions of the website with Javascript.`,
    stacks: ['SCSS', 'jQuery'],
  },
  {
    title: 'Handler',
    subtitle: 'A chat application that lets you connect between Travel Agents and Customers. Developed an admin panel for Real-Time Handler Chat App between Travel Agents and Customers.',
    stacks: ['Firebase Database', 'Firebase Cloud Functions', 'VueJS'],
  },
  {
    title: 'SatYoneSuperStar',
    subtitle: 'A cordova powered game project for NGOs to educate the workers across Myanmar - Took a part in Phase 2 of the Project. Added Tutorial game scenes, bettered gameplay and improvised the scoring system.',
    stacks: ['Phaser Framework', 'Javascript'],
  },
  {
    title: 'Premier Urgence (Hipen)',
    subtitle: 'A project for HIV patients to find events, clinics and get consultation. Developed RESTFul API with Laravel 5.5, PHP 7.2, and MariaDB (MySQL) to use in Android Application.',
    stacks: ['PHP7', 'Laravel', 'Maria DB'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="Experience">
      <h1 className="text-center">Career</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center w-100">
            <h2 className="career-title">nexlabs (May 2017 - Nov 2018)<br />Frontend Developer</h2>
          </div>
          <div className="col-12">
            {nexlabsExperiences.map((exp, i) => (
              <div className="timeline text-center" key={i}>
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-subtitle">{exp.subtitle}</div>
                <div className="timeline-stacks">{exp.stacks.join(' / ')}</div>
              </div>
            ))}
          </div>
        </div>
        <hr className="divider" />
        <div className="row">
          <div className="text-center w-100">
            <h2 className="career-title">Base Technology (Nov 2018 - May 2021)<br />Software Developer</h2>
          </div>
          <div className="timeline text-center">
            <div className="timeline-title">EXPA.AI</div>
            <div className="timeline-subtitle">Responsible for handling certain features of EXPA.AI, the <a href="//dashboard.expa.ai" rel="noopener noreferrer" target="_blank">main product</a> of Base Technology.</div>
            <div className="timeline-stacks">{
              [
                'NodeJS',
                'GraphQL',
                'ReactJS',
                'Redis',
                'PostgreSQL',
                'MongoDB',
              ].join(' / ')
            }</div>
          </div>
        </div>
        <hr className="divider" />
        <div className="row">
          <div className="text-center w-100">
            <h2 className="career-title">Amity (Aug 2021 - Present)<br />Web Engineer</h2>
          </div>
          <div className="timeline text-center">
            <div className="timeline-title">Amity Social Cloud</div>
            <div className="timeline-subtitle">Currently working at <a href="//amity.co" target="_blank" rel="noopener">amity.co</a> as a Web Engineer.</div>
            <div className="timeline-stacks">{
              [
                'NodeJS',
                'GraphQL',
                'ReactJS',
                'TypeScript'
              ].join(' / ')
            }</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
