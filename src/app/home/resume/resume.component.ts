import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnChanges {
  @Input() English: any;

  public jobs: any = [];
  jobsEnglish: Job[];
  
  public headEnglish: any = { title: 'WORK EXPERIENCE', subtitle: '' };

  public head: any = this.headEnglish;

  constructor() {

    const job_3: Job = new Job(
      'Senior Software Engineer',
      'Apr-2025–Present',
      'Altimetrik (Client: Ford Motor Company)',
      `</p>
      <ul>
        <li>Developing and maintaining <b>cloud-native microservices</b> using <b>Spring Boot</b> and <b>Java 21</b> for Ford's enterprise applications.</li>
        <li>Deploying and managing applications on <b>Google Cloud Platform (GCP)</b> using services such as <b>Cloud Run, Pub/Sub, and Cloud Storage</b>.</li>
        <li>Building responsive front-end components with <b>React</b> and integrating with backend RESTful APIs.</li>
        <li>Implementing <b>JWT-based authentication</b> and <b>role-based authorization</b> to ensure secure API communication.</li>
        <li>Collaborating in <b>Agile</b> environments, participating in sprint planning, code reviews, and peer programming.</li>
        <li>Optimizing performance through <b>code refactoring, caching strategies</b>, and efficient database queries.</li>
        <li>Writing <b>unit and integration tests</b> using JUnit and MockServer to ensure code quality and reliability.</li>
        <li>Contributed to modernizing Ford’s architecture by leveraging <b>Java 21 features</b> and <b>microservice best practices</b>.</li>
      </ul>`,
      1,
      './assets/images/alti.png',
      'https://www.altimetrik.com/'
    );
    

    const job_1: Job = new Job(
      'Professional Product Developer',
      '(May 2023-Current)',
      'Dedalus Health Care Services',
      `Dedalus Group is the leading European provider of digital solutions for <b>Healthcare</b>
      </p>
      <ul>
      <li>Write <b>well-designed, testable, efficient code</b> and review it.</li>
      <li>Experience on <b>Java 8, Java Quarkus, Data JPA, Keycloak</b>.</li>
      <li>Generated <b>Swagger Document</b> using OpenAPI for all the backend APIs in the project.</li>
      <li>Utilized the latest software development tools like <b>GIT, GitHub, Docker, Confluence, Swagger, JUnit, Postman, Maven, TOAD</b>.</li>
      <li>Improved application performance using <b>multithreading</b> and code optimization.</li>
      <li>Experience in <b>Agile development process</b>.</li>
      <li>Implemented <b>secure and robust backend solutions</b> for sensitive data handling, complying with industry standards.</li>
      <li>Developed <b>unit tests</b> and automated testing scripts using <b>RestAssured/MockServer</b>.</li>
      <li>Knowledge on implementing <b>Generative AI models</b> in backend services.</li>
      <li>Managed <b>unit and integration testing</b> processes, contributed to <b>CI/CD implementations</b> to ensure efficient, reliable deployments.</li>
      </ul>`,
      1,
      './assets/images/dedalus.jpg',
      'https://www.dedalus.com/global/en/'
    );

    const job_2: Job = new Job(
      'Associate Software Developer',
      '(APR 2021 - May 2023)',
      'CGI',
      `<p/>
      <ul>
      <li>Write <b>well-designed, testable, efficient code</b> and review it.</li>
      <li>Hands-on experience in <b>Linux commands</b> by working in Putty to fetch and commit changes in the database.</li>
      <li>Experience on <b>automation of jobs</b> using Bash scripts.</li>
      <li>Experience on <b>Java 8, Java Spring Boot, Data JPA, Spring Security</b>.</li>
      <li>Knowledge of developing <b>REST API</b> for a full-stack application.</li>
      <li>Experience working on <b>relational databases</b> (Oracle 10g).</li>
      <li>Trained on deployment of web apps in <b>Microsoft Cloud (Azure)</b>.</li>
      <li>Debugged code and located root causes of problems by reviewing <b>configuration files and logs</b>.</li>
      <li>Knowledge on frontend technologies like <b>Angular, HTML, CSS, JavaScript</b>.</li>
      <li>Experience in <b>Agile development process</b>.</li>
      <li>Utilized the latest software development tools like <b>GIT, GitHub, Putty, WinSCP, Swagger, JUnit, Postman, Maven, TOAD</b>.</li>
      </ul>`,
      1,
      './assets/images/cgi.jpg',
      'https://www.cgi.com/en'
    );

    const school_1: Job = new Job(
      'Full Stack Intern',
      'Jan-2021-Apr-2021',
      'MyKidsdrawing',
      `<ul>
      <li>Participated in the project development through the entire <b>Software Development Lifecycle (SDLC)</b>.</li>
      <li>Designed and implemented new <b>web components</b> across new and existing designs.</li>
      <li>Developed a <b>web application</b> using <b>Java Spring Boot</b> technologies that enable kids to showcase their drawings and get evaluated by artists (www.mykidsdrawing.com).</li>
      </ul>`,
      1,
      './assets/images/bk.jpg',
      'https://www.beyondklasses.com/'
    );

    
    
     
    
    
    this.jobsEnglish = [job_3, job_1,job_2,school_1];
    
    this.jobs = this.jobsEnglish;
  }



  ngOnInit() {
  }


  ngOnChanges() {
    if (this.English) {
      this.head = this.headEnglish;
      this.jobs = this.jobsEnglish;
    } 
  }

}
