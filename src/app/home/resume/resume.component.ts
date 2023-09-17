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
  
  public headEnglish: any = { title: 'RESUME', subtitle: '' };

  public head: any = this.headEnglish;

  constructor() {

    const job_1: Job = new Job('Professional Product Developer', '(May 2023-Current)', 'Dedalus Health Care Services',
      'Dedalus Group is the leading european provider of digital solutions for Healthcare'
        + '</P><ul><li>- Write well designed, testable, efficient Code and Review it.</il><li>- Experience on Java 8, Java Quarkus, Data JPA ,Keycloak</li><li>- Generated Swagger Document using openapi for all the Backend APis in the project</li><li>- Utilized the latest Software development tools like GIT, GITHUB, Docker, Confluence ,Swagger, JUNIT, Postman, Maven, TOAD</li></ul>', 1,'/assets/images/dedalus.jpg', 'https://www.dedalus.com/global/en/');


    const job_2: Job = new Job('Associate Software Developer', '(APR 2021 - May 2023)', 'CGI',
      '<ul> <li>- Write well designed, testable, efficient Code and Review it.</li><li>- Hands-on Experience in Linux Commands by working in putty to fetch and commit changes in the Database.</li><li>- Experience on Automation of Jobs using Bash Scripts.</li><li>- Experience on Java 8, Java Spring Boot, Data JPA ,Spring Security.</li><li>- Knowledge of Developing REST API for a full Stack application.</li><li>- Experience working on relational databases(Oracle 10g).</li><li>- Trained on Deployment of Webapps in Microsoft Cloud(Azure).</li><li>- Debugged code and located root causes of problems by reviewing configuration files and logs.</li><li>- Knowledge on Frontend Technologies Like Angular , Html, CSS, JavaScript.</li><li>- Experience in Agile Development Process</li><li>- Utilized the latest Software development tools like GIT, GITHUB, Putty, WinSCP ,Swagger, JUNIT, Postman, Maven, TOAD</li></ul>', 1,'/assets/images/cgi.jpg','https://www.cgi.com/en');


    const school_1: Job = new Job('Full Stack Intern', 'Jan-2021-Apr-2021', 'MyKidsdrawing',
      '<ul><li>Participated in the Project development through entire Software Development Lifecycle(SDLC).</li><li>- Designed and implemented new web components across new and existing designs.</li><li>- Developed a Web application using Java Spring Boot Technologies that enable kids to show case their drawing and get evaluated by  Artists(www.mykidsdrawing.com)</li></ul>', 1,'/assets/images/bk.jpg','https://www.beyondklasses.com/');

    
    
     
    
    
    this.jobsEnglish = [job_1,job_2,school_1];
    
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
