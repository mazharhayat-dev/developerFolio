/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

const illustration = {
  animated: true 
};

const greeting = {
  username: "Mazhar Hayat",
  title: "Hi all, I'm Mazhar",
  subTitle: emoji(
    "A Computer Operator at Is Cafe Sajawal & ADP English Literature Student 🚀 Passionate about Web Development and Teaching."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WheBNrj5cWo2owJd0qBiVMesbyTLUT1A/view?pli=1", // Khali kar diya. Resume button hatane ke liye
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/mazharhayat-dev",
  linkedin: "https://www.linkedin.com/in/mazharhayat/",
  gmail: "mazharhayatdev@gmail.com",
  facebook: "https://www.facebook.com/Jam Mazhar Hayat",
  display: true 
};

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER OPERATOR & WEB DEVELOPER",
  skills: [
    emoji("⚡ Managing POS system and billing at Is Cafe Sajawal"),
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
      logo: require("./assets/images/GovtLogo.png"),
      subHeader: "ADP ENGLISH LITERATURE",
      duration: "September 2020- April 2022",
      desc: "Associated Degree Program English Literature.",
      descBullets: ["Studied Poetry, Drama, Romantic and Modern Literature"]
    },
    {
      schoolName: "Govt Boys School Khan Bela",
      logo: require("./assets/images/GovtLogo.png"),
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
      company: "Is Cafe Sajawal", 
      companylogo: "", 
      date: "Jan 2023 – Present", 
      location: "Khanpur",
      desc: "Handling computer operations and customer billing at Is Cafe Sajawal",
      descBullets: [
        "Managing POS system and daily billing",
        "Customer service and order management", 
        "Data entry and record keeping"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/project2.png"),
      projectName: "Cafe Management System",
      projectDesc: "POS and billing system made for Is Cafe Sajawal",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername/cafe-system"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications and Some Cool Stuff",
  achievementsCards: [
    {
      title: "English Literature Competition",
      subtitle: "Won 1st position in Inter-college English Essay Competition",
      image: require("./assets/images/award.png"), 
      imageAlt: "Award",
      footerLink: [{ name: "View Certificate", url: "#" }]
    },
    {
      title: "Computer Operator Training",
      subtitle: "Completed 3 months training in MS Office and Data Entry",
      image: require("./assets/images/certificate.png"),
      imageAlt: "Certificate",
      footerLink: [{ name: "View Certificate", url: "#" }]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I love to write about English Literature and Computer Skills",
  display: true,
  blogs: [
    {
      url: "#", 
      title: "How to Study English Literature for ADP",
      description: "Tips and notes for ADP English students. Poetry, Drama and Novel guide."
    }
  ]
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCE 🎤"),
  talks: [
    {
      title: "ADP English Literature Guide",
      subtitle: "Shared tips for Poetry, Drama and Novel with students",
      event_url: "", 
    }
  ],
  display: true 
};

const podcastSection = { // naam change kar diya
  title: "Podcasts & Talks",
  subtitle: emoji("I LOVE TO TALK ABOUT ENGLISH LITERATURE & TECH 🎙️"),
  talks: [
    {
      title: "English Literature Podcast",
      subtitle: "Discussed ADP English Syllabus, Poetry and Novel",
      event_url: "#", 
    }
  ],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Off kar diya
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3000000", // Apna number daalo
  email_address: "mazharhayatdev@gmail.com"
};

const twitterDetails = {
  userName: "twitter", 
  display: false // Off kar diya
};

const isHireable = false; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection, // ab error nahi aayega
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
