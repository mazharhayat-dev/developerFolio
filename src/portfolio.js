/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mazhar Hayat",
  title: "Hi all, I'm Mazhar",
  subTitle: emoji(
    "A passionate Web design and Development 🚀 having an experience of building applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    " https://drive.google.com/uc?export=download&id=1WheBNrj5cWo2owJd0qBiVMesbyTLUT1A", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mazharhayat-dev",
  linkedin: "https://www.linkedin.com/in/mazharhayat/",
  gmail: "mazharhayatdev@gmail.com",
  gitlab: "https://gitlab.com/mazharhayat",
  facebook: "https://www.facebook.com/Jam Mazhar Hayat",
  medium: "https://medium.com/@mazharhayat",
  stackoverflow: "https://stackoverflow.com/users/00786/mazharhayat",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Web DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Govt College Bahawalpur",
      logo: require("./assets/images/GovtLogo.png"),
      subHeader: "ADP ENGLISH LITERATURE",
      duration: "September 2020- April 2022",
      desc: "Associated Degree Program  English Literature.",
      descBullets: [
        "Studied Poetry, Drama, Romantic and modern Literature "
      ]
    },
    {
      schoolName: "Govt Boys School Khan Bela",
      logo: require("./assets/images/GovtLogo.png"),
      subHeader: "General Science",
      duration: "September 2018 - April 2020",
      desc: "Ranked top 10% in the program. Took courses about Computer Science, State, Economics, ...",
      descBullets: ["Relevant Coursework:Computer"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Computer Operator",
      company: "Is Cafe Sajawal", 
      companylogo: "", // Logo nahi hai to khali chor do
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/project1.png"), // project ki image. Nahi hai to line delete
      projectName: "E-Commerce Website",
      projectDesc: "Full stack e-commerce site with React and Node.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yourprojectlink.com" // Apna link
        },
        {
          name: "GitHub",
          url: "https://github.com/yourusername/project" // GitHub link
        }
      ]
    },
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

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  
  achievementsCards: [
    {
      title: "English Literature Competition",
      subtitle: "Won 1st position in Inter-college English Essay Competition",
      image: require("./assets/images/award.png"), // certificate ki image. Nahi hai to ye line delete
      imageAlt: "Award",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/your-certificate-link" // link ho to
        }
      ]
    },
    {
      title: "Computer Operator Training",
      subtitle: "Completed 3 months training in MS Office and Data Entry",
      image: require("./assets/images/certificate.png"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/your-certificate-link"
        }
      ]
    }
  ],
  display: true
};
          

// Blogs Sections

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  display: true, // false kar do agar nahi dikhana
  blogs: [
    {
      url: "https://yourbloglink.com/blog1", // Apne blog ka link
      image: require("./assets/images/blog1.png"), // Blog ki image
      title: "How to Study English Literature for ADP",
      description: "Tips and notes for ADP English students. Poetry, Drama and Novel guide."
    },
    {
      url: "https://yourbloglink.com/blog2",
      image: require("./assets/images/blog2.png"),
      title: "Computer Skills for Beginners",
      description: "Basic MS Office and Data Entry tips I learned as Computer Operator"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCE 🎤"),
  talks: [
    {
      title: "ADP English Literature Guide",
      subtitle: "Shared tips for Poetry, Drama and Novel with students",
      slides_url: "", // agar slides hon to link daalo
      event_url: "",  // YouTube ya Facebook Live ka link
      image: require("./assets/images/talk1.png") // image nahi hai to ye line delete
    },
    {
      title: "Computer Skills Workshop",
      subtitle: "Taught basic MS Office and POS system at Is Cafe Sajawal",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/talk2.png")
    }
  ],
  display: true // false kar do agar abhi nahi dikhana
};

// Podcast Section

const talkSection = {
  title: "Podcasts & Talks",
  subtitle: emoji("I LOVE TO TALK ABOUT ENGLISH LITERATURE & TECH 🎙️"),
  talks: [
    {
      title: "English Literature Podcast",
      subtitle: "Discussed ADP English Syllabus, Poetry and Novel",
      slides_url: "", // agar notes hon to
      event_url: "https://your-podcast-link.com", // Spotify, YouTube, Anchor ka link
      image: require("./assets/images/podcast1.png") // image nahi hai to delete
    },
    {
      title: "Computer Tips Podcast",
      subtitle: "Basic computer skills for beginners and students",
      slides_url: "",
      event_url: "https://your-youtube-link.com", // YouTube video ka link
      image: require("./assets/images/podcast2.png")
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "mazharhayatdev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
