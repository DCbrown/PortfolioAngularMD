import { Injectable } from '@angular/core';
import { Projects } from '../../models/Projects';
import { Testimonials } from '../../models/Testimonials';
import { People } from '../../models/People';
import { Courses } from '../../models/Courses';
import { Tools, FrontEnd, BackEnd, Msc } from '../../models/Tools';
import { Experience } from '../../models/Experience';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  projects: Projects[];
  testimonials: Testimonials[];
  people: People[];
  courses: Courses[];
  tools:Tools[];
  frontEnd:FrontEnd[];
  backEnd:BackEnd[];
  msc:Msc[];
  experience:Experience[];
  

  showProjects = [];

  getImages(){
      return this.showProjects = this.projects.slice(0);
  }

  getImage(id: number){
      return this.projects.slice(0).find(project => project.id == id)
  }

  constructor() { 
    this.projects = [
      { id: 1, 
        title: 'Motivational Q', 
        row: 1,
        img:'../../assets/img/MotiQ.png', 
        description:'Random motivational quote generator that produces a random quote form a list of different inspirational quotes, Users can Tweet out their favorite quotes. Developed  with HTML, CSS , jQuery, JavaScript and Twitter Bootstrap.',  
        subject:'Web', 
        liveLink:'http://dcbrown.github.io/MotivationalQ/', 
        gitHubLink: 'https://github.com/DCbrown/MotivationalQ'
      },
      { id: 2, 
        title: 'KISS@ RE-DESIGN', 
        row: 1,
        img:'../../assets/img/KISS.png', 
        description:`A responsive re-design of the KISS@ website, a library of various information and topics about business technology and best security practices I developed for a Client. Using HTML, CSS, JavaScript, PHP, Media Queries, Twitter Bootstrap and CSS minify.`, 
        subject:'Web', 
        liveLink:'http://dcbrown.github.io/KISSFinal/index.html', 
        gitHubLink:'https://github.com/DCbrown/KISSFinal'
      },
      { id: 3, 
        title: 'WebDevQuiz',
        row: 1, 
        img:'../../assets/img/WebDev.png', 
        description:'A responsive splash page of my Android app made with HTML, CSS, JavaScript, jQuery and Bootstrap with a link to the Android app quiz developed in Android Studio based on the technologies of web development, test your web skills on this multiple choice test, Current Version 1.5.', 
        subject:'Web Android', 
        liveLink:'http://dcbrown.github.io/WebDevQuizVer1.5Landing_Page/', 
        gitHubLink:'https://github.com/DCbrown/WebDevQuizVer1.5Landing_Page'
      },
      { id: 4, 
        title: '4 Pints Production',
        row: 2,  
        img:'../../assets/img/4Pints.png', 
        description:'A prototype one-page responsive website I developed for my buddy’s independent production company based in Royal Oak Michigan. Using HTML, CSS, JavaScript, PHP, Media Queries and Twitter Bootstrap. (As of November 2014, 4 Pints Productions is no longer in business).', 
        subject:'Web', 
        liveLink:'http://dcbrown.github.io/4PintsProductions/', 
        gitHubLink:'https://github.com/DCbrown/4PintsProductions'
      },
      { id: 5, 
        title: 'Bootstrap Alexa Theme', 
        row: 2, 
        img:'../../assets/img/AlexaTheme.png', 
        description:'Developed a single page Bootstrap Theme featuring Amazon’s Alexa that uses JavaScript and Query Animations. Using HTML, CSS, jQuery, Bootstrap and the ScrollRevealjs JavaScript library.', 
        subject:'Web', 
        liveLink:'https://dcbrown.github.io/Bootstrap_Alexa_Theme/', 
        gitHubLink:'https://github.com/DCbrown/Bootstrap_Alexa_Theme'
      },
      { id: 6, 
        title: 'Bootstrap WordPress Theme',  
        row: 2,
        img:'../../assets/img/BootstrapWWordPress.png', 
        description:'A custom WordPress theme with Bootstrap using WordPress, HTML, CSS, PHP and Twitter Boootstrap.', 
        subject:'Web', 
        liveLink:'http://wordpresswbootstrap-com.stackstaging.com/', 
        gitHubLink:false
      },
      { id: 7, 
        title: 'Onett Web Solutions',  
        row: 3,
        img:'../../assets/img/Onett.png', 
        description:'Designed and Developed a fictional single page Digital Agency with a link scroll feature using HTML, CSS, jQuery, Bootstrap.', 
        subject:'Web', 
        liveLink:'https://dcbrown.github.io/Onett-Web-Solutions/', 
        gitHubLink:'https://github.com/DCbrown/Onett-Web-Solutions'
      },
      { id: 8, 
        title: 'CV Resume',  
        row: 3,
        img:'../../assets/img/ResumeApp.png', 
        description:'Developed a single page Bootstrap Theme featuring Amazon’s Alexa that uses JavaScript and Query Animations. Using HTML, CSS, jQuery, Bootstrap and the ScrollRevealjs JavaScript library.', 
        subject:'Web', 
        liveLink: false, 
        gitHubLink:'https://dcbrown.github.io/Bootstrap_Alexa_Theme/'
      },
      { id: 9, 
        title: 'Employee Registration', 
        row: 3, 
        img:'../../assets/img/employee.png', 
        description:'Developed a employee based CURD (Create, Read, Update, Delete) application where you can add, input, edit, and delete employment data. View employee data in a table format with page based navigation listing 10 employees per page storing data using Firebase developed with: HTML, CSS, JavaScript, TypeScript, Angular, NodeJS, Angular CLI, Font-Awesome, Bootstrap, and Firebase.', 
        subject:'Web', 
        liveLink:false, 
        gitHubLink:'https://github.com/DCbrown/Angular-Firebase-CRUD'
      }
    ]  

    this.testimonials = [
      {
        id:1,
        img:'../../assets/people/phill.png',
        qoute:'Not only did Donovan do a stellar job a great website for my small business, he also designed a great looking logo for my business as well. Donovan developed and designed this project fairly quickly while keeping me up to date with the website’s progression. I definitely recommend working with Donovan to anyone I know who needs a website.',
        name:'Phil Asare',
        company:'Founder of Asare.INC',
        class:'animated zoomInLeft'
      },
      {
        id:2,
        img:'../../assets/people/russ.jpg',
        qoute:'Donovan is very easy to work with and is very professional, engaging to drive results and can quickly adapt to change for our independent production company website needs. I love our website and its flexible structure that users can view our website on various mobile devices. I am pleased to have Donovan on our team as our Web Developer.',
        name:'Russell Balow',
        company:'Co-Founder of 4 Pints Productions',
        class:'animated zoomInUp'
      },
      {
        id:3,
        img:'../../assets/people/terrance.jpg',
        qoute:'I just love my new Website that Donovan re-designed and developed for me. Donovan demonstrates good client communication by keeping me updated during the re-design and development process and has the ability to deliver results.',
        name:'Terrance R. Campbell',
        company:'Deputy Director of Your Center and Creative Coordinator of the KISS@ project',
        class:'animated zoomInRight'
      },
    ]

    this.people = [
      {
        id:1,
        img:'../../assets/people/devs/KyleP.jpg',
        name:'Kyle Prinsloo',
        website:'https://studywebdevelopment.com',
        twitter:'https://twitter.com/study_web_dev',
        youtube:'https://www.youtube.com/kyleprinsloo?sub_confirmation=1',
        instagram:'https://www.instagram.com/studywebdevelopment/',
      },
      {
        id:2,
        img:'../../assets/people/devs/LaurenceB.jpg',
        name:'Laurence Bradford',
        website:'https://learntocodewith.me/',
        twitter:'https://twitter.com/learncodewithme',
        youtube:'',
        instagram:'',
      },
      {
        id:3,
        img:'../../assets/people/devs/Candy.jpg',
        name:'Coding Commanders',
        website:'http://www.codingcommanders.com/',
        twitter:'https://twitter.com/codingCommander',
        youtube:'https://www.instagram.com/codingcommanders/',
        instagram:'https://www.youtube.com/channel/UC-gCUMK_EGUqJ7P9VA7BJmQ',
      },
      {
        id:4,
        img:'../../assets/people/devs/RTC.jpg',
        name:'Real Tough Candy',
        website:'https://realtoughcandy.gtithub.io/Portfolio/',
        twitter:'https://twitter.com/realtoughcandy',
        youtube:'https://www.youtube.com/channel/UC54NcJvLCvM2CNaBjd5j6HA',
        instagram:'',

      },
      {
        id:4.4,
        img:'../../assets/people/devs/Jenna.jpg',
        name:'Jenna Malone',
        website:'https://www.jennamalonecreates.com/',
        twitter:'https://twitter.com/jenna_creates?lang=en',
        youtube:'https://www.youtube.com/channel/UCHui267J51nimo6FXxPIW-Q',
        instagram:'https://www.instagram.com/jenna_creates/',
      },
      {
        id:5,
        img:'../../assets/people/devs/ChrisS.jpg',
        name:'Chris Sean',
        website:'',
        twitter:'https://twitter.com/RealChrisSean',
        youtube:'https://www.youtube.com/channel/UCu1xbgCV5o48h_BYCQD7KJg/videos',
        instagram:'https://www.instagram.com/RealChrisSean/',
      },
      {
        id:6,
        img:'../../assets/people/devs/JoeS.jpg',
        name:'Coding Phase',
        website:'http://www.codingphase.com/',
        twitter:'https://twitter.com/codingphase',
        youtube:'https://www.youtube.com/CodingPhase',
        instagram:'https://www.instagram.com/codingphase/',
      },
      {
        id:7,
        img:'../../assets/people/devs/BradT.jpg',
        name:'Traversy Media',
        website:'https://www.traversymedia.com/',
        twitter:'http://www.twitter.com/traversymedia',
        youtube:'https://www.youtube.com/user/TechGuyWeb',
        instagram:'http://www.instagram.com/traversymedia',
      },
      {
        id:8,
        img:'../../assets/people/devs/AaronB.jpg',
        name:'Aaron in Beta',
        website:'',
        twitter:'https://twitter.com/937aaron',
        youtube:'https://www.youtube.com/channel/UCXym52jGe7cb5deJRWM3paw',
        instagram:'https://www.instagram.com/937aaron/',
      },
      {
        id:9,
        img:'../../assets/people/devs/StefM.jpg',
        name:'Stefan Mischook',
        website:'https://www.killersites.com/',
        twitter:'https://twitter.com/killersites',
        youtube:'https://www.youtube.com/user/killerphp',
        instagram:'https://www.instagram.com/stefanmischook/?hl=en',
      },
      {
        id:10,
        img:'../../assets/people/devs/PeterCC.jpg',
        name:'Coding Connections',
        website:'',
        twitter:'https://twitter.com/CodingConnectio',
        youtube:'https://t.co/PIYRJmsA02',
        instagram:'',
      },
    ]


  this.courses = [
    {
      id:1,
      img:'',
      name:'Treehouse.com',
      link:'https://teamtreehouse.com/',
    },
    {
      id:2,
      img:'',
      name:'CodeCademy.com',
      link:'https://codecademy.com/',
    },
    {
      id:3,
      img:'',
      name:'Udemy.com',
      link:'https://www.udemy.com/',
    },
    {
      id:4,
      img:'',
      name:'CodingPhase.com',
      link:'http://codingphase.com/',
    },
    {
      id:5,
      img:'',
      name:'CodingCommanders.com',
      link:'http://www.codingcommanders.com/',
    },
    {
      id:5,
      img:'',
      name:'TheOdinProject.com',
      link:'https://www.theodinproject.com',
    },
    {
      id:6,
      img:'',
      name:'UpSkillCourses.com',
      link:'https://upskillcourses.com',
    },
    {
      id:7,
      img:'',
      name:'Laracasts.com',
      link:'https://laracasts.com',
    }
  ]

  this.tools = [
    {
      id:1,
      name:'Visual Studio Code',
      link:'https://code.visualstudio.com'
    },
    {
      id:2,
      name:'XAMPP',
      link:'https://www.apachefriends.org/index.html'
    },
    {
      id:3,
      name:'Trello',
      link:'https://trello.com/'
    },
    {
      id:4,
      name:'Google',
      link:'https://google.com/'
    },
    {
      id:5,
      name:'Stack Overflow',
      link:'https://stackoverflow.com'
    },
    {
      id:6,
      name:'Opera',
      link:'https://www.opera.com'
    },
    {
      id:7,
      name:'Node.js',
      link:'https://nodejs.org/'
    },
    {
      id:8,
      name:'Angular CLI',
      link:'https://cli.angular.io'
    },
    {
      id:10,
      name:'Linux (Ubuntu)',
      link:'https://www.ubuntu.com/'
    },
    {
      id:11,
      name:'Android Studio',
      link:'https://developer.android.com/studio/'
    },
    {
      id:12,
      name:'Dart',
      link:'https://www.dartlang.org/'
    },
    {
      id:13,
      name:'Flutter',
      link:'https://flutter.io/'
    },
    {
      id:14,
      name:'GitHub',
      link:'https://github.com/'
    },
    {
      id:15,
      name:'Photoshop',
      link:'https://www.adobe.com/products/photoshopfamily.html'
    },
    {
      id:16,
      name:'Google Drive',
      link:'https://www.google.com/drive/'
    },
    {
      id:17,
      name:'Google Docs',
      link:'https://www.google.com/docs/about/'
    },
    {
      id:18,
      name:'Google Hangouts',
      link:'https://hangouts.google.com/'
    },

  ],

  this.frontEnd = [
    {
      id:1,
      name:'Bootstrap',
      link:'https://getbootstrap.com/docs/4.0/getting-started/introduction/'
    },
    {
      id:2,
      name:'MDBootstrap',
      link:'https://mdbootstrap.com'
    },
    {
      id:3,
      name:'Primeng',
      link:'http://primefaces.org'
    },
    {
      id:4,
      name:'Angular 2 and up',
      link:'https://angular.io'
    },
    {
      id:5,
      name:'jQuery',
      link:'https://jquery.com/'
    },
    {
      id:6,
      name:'Sass',
      link:'https://sass-lang.com/'
    },
    {
      id:7,
      name:'Font-Awesome',
      link:'https://fontawesome.com/v4.7.0/'
    },
    {
      id:8,
      name:'CSS-Grid',
      link:'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout'
    },
    {
      id:9,
      name:'Flexbox',
      link:'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
    }

  ]
  
  this.backEnd = [
    {
      id:1,
      name:'XAMMP',
      link:'https://www.apachefriends.org/index.html'
    },
    {
      id:2,
      name:'MongoBD Compass',
      link:'https://www.mongodb.com/products/compass'
    },
    {
      id:3,
      name:'NodeJS',
      link:'https://nodejs.org/en/'
    },
    {
      id:4,
      name:'Express',
      link:'https://expressjs.com/'
    },
    {
      id:5,
      name:'Cyberduck',
      link:'https://cyberduck.io'
    } 
  ]
  
  this.msc = [
    {
      id:1,
      name:'Visual Studio Code',
      link:'https://code.visualstudio.com'
    },
    {
      id:2,
      name:'WordPress',
      link:'https://wordpress.org/download/'
    },
    {
      id:2-2,
      name:'Gulpjs',
      link:'https://gulpjs.com/'
    },
    {
      id:3,
      name:'Trello',
      link:'https://trello.com/'
    },
    {
      id:4,
      name:'Google',
      link:'https://google.com/'
    },
    {
      id:5,
      name:'Stack Overflow',
      link:'https://stackoverflow.com'
    },
    {
      id:6,
      name:'Opera',
      link:'https://www.opera.com'
    },
    {
      id:7,
      name:'Firefox',
      link:'https://www.mozilla.org/en-US/firefox/'
    },
    {
      id:8,
      name:'Chrome',
      link:'https://www.google.com/chrome/'
    },
    {
      id:10,
      name:'Angular CLI',
      link:'https://cli.angular.io'
    },
    {
      id:11,
      name:'Linux (Ubuntu)',
      link:'https://www.ubuntu.com/'
    },
    {
      id:12,
      name:'Android Studio',
      link:'https://developer.android.com/studio/'
    },
    {
      id:13,
      name:'Dart',
      link:'https://www.dartlang.org/'
    },
    {
      id:14,
      name:'Flutter',
      link:'https://flutter.io/'
    },
    {
      id:15,
      name:'GitHub',
      link:'https://github.com/'
    },
    {
      id:16,
      name:'Photoshop',
      link:'https://www.adobe.com/products/photoshopfamily.html'
    },
    {
      id:17,
      name:'Google Drive',
      link:'https://www.google.com/drive/'
    },
    {
      id:18,
      name:'Google Docs',
      link:'https://www.google.com/docs/about/'
    },
    {
      id:19,
      name:'Google Hangouts',
      link:'https://hangouts.google.com/'
    },
    {
      id:20,
      name:'Skype',
      link:'https://www.skype.com/en/'
    },
  ]

  this.experience = [
    {
      company:"Continental Structural Plastics",
      title: "Manufacturing Systems Developer (Contract)",
      location: "Auburn Hills, MI",
      dates: "Mar 2018 – Present",
      skills: ["HTML5", "CSS3", "JavaScript(ES6)", "Angular 2 +", "Mongodb", "Express", "Node.js"]
    },
    {
      company:"Advantage Marketing Solutions",
      title: "Web Developer (Contract)",
      location: "Farmington Hills, MI",
      dates: "Dec 2017 – April 2018 (Contract)",
      skills: ["HTML5", "CSS3", "JavaScript(ES6)", "jQuery", "PHP", "MySQL","WordPress"]
    },
    {
      company:"Detroit School For Digital Technology",
      title: "Technical Instructor / Web Developer",
      location: "Detroit Michigan, MI",
      dates: "Jul 2017 – Dec 2017",
      skills: ["HTML5", "CSS3", "JavaScript(ES6)", "jQuery", "PHP", "MySQL","WordPress", "Insrtcuting"]
    },
  ]

  }

  getProjects(): Projects[]{
    return this.projects;
  }

  getTestimonials(): Testimonials[]{
    return this.testimonials;
  }

  getPeople(): People[]{
    return this.people;
  }

  getCourses(): Courses[]{
    return this.courses;
  }

  getExperience(): Experience[]{
    return this.experience;
  }

  getFrontEnd(): FrontEnd[]{
    return this.frontEnd;
  }

  getBackEnd(): BackEnd[]{
    return this.backEnd;
  }
  getMsc(): Msc[]{
    return this.msc;
  }



}