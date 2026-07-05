/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const illustration = {
  animated: true 
};

const greeting = {
  username: "Mazhar Hayat",
  title: "Hi all, I'm Mazhar",
  subTitle: emoji(
    "A Computer Operator at Cafe Sajawal & ADP English Literature Student 🚀 Passionate about Web Development and Teaching."
  ),
  resumeLink: "https://drive.google.com/file/d/1WheBNrj5cWo2owJd0qBiVMesbyTLUT1A/view?pli=1",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/mazharhayat-dev",
  linkedin: "https://www.linkedin.com/in/mazharhayat/",
  gmail: "mazharhayatdev@gmail.com",
  facebook: "https://www.facebook.com/JamMazharHayat", // space hata di
  display: true 
};

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER OPERATOR & WEB DEVELOPER",
  skills: [
    emoji("⚡ Managing POS system and billing at Cafe Sajawal"),
    emoji("⚡ Front end Development with React and JavaScript"),
    emoji("⚡ Teaching English Literature for ADP Students")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" }
  ],
  display: true 
};

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Govt College Bahawalpur",
      subHeader: "ADP ENGLISH LITERATURE",
      duration: "September 2020- April 2022",
      desc: "Associated Degree Program English Literature.",
      descBullets: ["Studied Poetry, Drama, Romantic and Modern Literature"]
    },
    {
      schoolName: "Govt Boys School Khan Bela",
      subHeader: "General Science",
      duration: "September 2018 - April 2020",
      desc: "Computer Science and General Science",
      descBullets: ["Relevant Coursework: Computer"]
    }
  ]
};

const techStack = {
  viewSkillBars: true, 
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Computer Operations", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Computer Operator",
      company:
