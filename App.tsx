import './App.css'
import RL_Picture from './RL_Picture.jpg';
import photo from './TaskManager.png';
import photo1 from './FinanceManager.png';

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'CV_MuginovRR.pdf'; 
  link.click();
};

function App() {

  return (
    <>
    <div className="HeroSection">
      <div>
        <img src ={RL_Picture}></img>
      </div>
      <div className ="HeroText">
        <h1>Muginov Rinat</h1>
        <h2>Fullstack Developer</h2>
        <h2>Moscow, Russia</h2>
        <h3>+79126467701, ur.rinatmuginov@gmail.com</h3>
        <h3>A fullstack developer with experience in creating websites and automating processes. Skilled in big data processing, interface architecture design, and API integration. Always ready to learn and apply new technologies.</h3>
        <h3>Contact me</h3>
        <div className="ButtonsContainer">
          <button><a href="https://t.me/ur_rinatmuginov">Telegram</a></button>
          <button><a href="https://api.whatsapp.com/send?phone=79126467701">WhatsApp</a></button>
          <button onClick={() => window.open('tel:+79126467701')}>Call Me</button>
        </div>
        <div className="DownloadContainer">
          <button onClick={downloadCV}>Download CV</button>
        </div>
      </div>
    </div>
    <hr className="divider"/>
    <div className="MissionStatement">
      <h2>Mission Statement</h2>
      <h3>My mission as a developer is to <i>create efficient, user-friendly digital tools</i> that make people's work and learning easier. I believe in <i>continuous improvement, clean code, and the power of technology to connect people and ideas</i>.</h3>
    </div>
    <hr className="divider"/>
    <div className="About">
      <h2>Professional Skills</h2>
      <ul>
        <li><strong>Programming Languages:</strong> Python, C#, JavaScript</li>
        <li><strong>Web Technologies:</strong> HTML, CSS, TypeScript, React, JavaScript, Vite, Bootstrap</li>
        <li><strong>Data:</strong> SQL (PostgreSQL, MySQL), Pandas</li>
        <li><strong>Technologies & Methodologies:</strong> Agile, REST API, OOP</li>
        <li><strong>Languages:</strong> Russian, English – B2, Chinese - Beginner</li>
      </ul>   
    </div>
    <hr className="divider"/>
    <div className="WorkExperience">
      <h2>Work Experience</h2>
      <ul>
        <h3><strong>November 2021 – July 2025, System Administrator</strong> , Ural Federal University</h3>
        <li>Developed an automated system for checking student answers in open tests using Python, Streamlit, and NLP, <strong>reducing teachers' checking time by 70%</strong> and decreasing their workload by approximately <strong>40%</strong></li>
        <li>Created Python scripts using Pandas to automate data entry into journals</li>
        <li>Designed and implemented a PostgreSQL database</li>
        <li>Provided IT support for 50+ users, including software configuration and network setup</li>
        <li>Optimized, upgraded, and maintained workstations</li>
        <li>Managed inventory, documentation, and procurement</li>
      </ul>
    </div>
    <hr className="divider"/>
    <div className="PetProjects">
      <h2>Study Projects</h2>
      <h3></h3>
      <button><a href="https://github.com/RinatMuginov">GitHub</a></button>
      <h3><strong>Task Manager by Vite + TypeScript + React</strong></h3>
      <h3>I made a web application for task management using Vite and TypeScript as part of a course from T1. I made user registration, login, and data storage in a database. I got experience working with client-server architecture.</h3>
      <img src ={photo}></img>
      <h3><strong>Finance Manager by Python + Django + PostgreSQL</strong></h3>
      <h3>I developed a system for tracking income and expenses for my family using Python, Django, and PostgreSQL. I made a web interface for managing transactions. I am planning to add a module based on machine learning to analyze finances and give recommendations for saving money.</h3>
      <img src ={photo1}></img>
      <h3><strong>Telegram bot for write post in Telegram Channel</strong></h3>
      <h3>I developed a Telegram bot for running a movie club in a mini-social network format using Python and aiogram. It makes the schedule, reminds about sessions, collects reviews from 3 club administrators after the showing, and automatically publishes the reviews. I got experience working with the Telegram API, asynchronous programming.</h3>
    </div>
    <hr className="divider"/>
    <div className="Education">
      <h2>Education</h2>
      <ul>
      <li>Ural Federal University, UrFU, 2021-2025, Intellectual Systems in Humanitarian Area</li>
      <li>University of science and technologies, MISIS, 2025-2027, Infomatics Business Analytycs</li>
      <li>ERP Management and System Analytics in Entertainment Industry, 2024 - 2025</li>
      </ul>
    </div>
    </>
  )
}

export default App
