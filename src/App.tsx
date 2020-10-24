import React from 'react';
import './App.scss';
import Header from "./components/Header";
import json from './data.json';
import Intro from "./components/Intro";
import ResumeBody from "./components/ResumeBody/ResumeBody";

function App() {
  return (
    <div className='main-wrapper'>
      <div className="container px-3 px-lg-5">
          <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
              <Header name={json.name} role={json.role} contactInfo={json.contact}/>
              <hr />
              <Intro summary={json.summary}/>
              <hr />
              <ResumeBody education={json.education} projects={json.projects} interests={json.interests} skills={json.skills} areasOfInterest={json.areasOfInterest} achievements={json.achievements} hobbies={json.hobbies} positionsHeld={json.positionsHeld} participation={json.participation}/>
          </article>
      </div>
    </div>
  );
}

export default App;
