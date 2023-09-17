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
  jobsEspanol: Job[];
  
  public headEnglish: any = { title: 'RESUME', subtitle: '' };

  public head: any = this.headEnglish;

  constructor() {

    const job_1: Job = new Job('Professional Product Developer', 'May 2023-Current', 'Dedalus Health Care',
      'Dedalus Group is the leading european provider of digital solutions for Healthcare'
        + '</P><ul><li>- Write well designed, testable, efficient Code and Review it.</il><li>- Experience on Java 8, Java Quarkus, Data JPA ,Keycloak</li><li>- Generated Swagger Document using openapi for all the Backend APis in the project</li><li>- Utilized the latest Software development tools like GIT, GITHUB, Docker, Confluence ,Swagger, JUNIT, Postman, Maven, TOAD</li></ul>', 1);


    const job_2: Job = new Job('Associate Software Developer', 'APR 2021 - May 2023', 'CGI',
      '<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>', 1);


    const school_1: Job = new Job('CARRER', '2017-2019', 'SCHOOL',
      '<P>SOME DESCRIPTION.</P>', 1);

    
    
      const trabajo_1: Job = new Job('DESCRIPCIÓN', '2020-2022', 'COMPAÑIA',
      '<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        + '', 1);


    const trabajo_2: Job = new Job('DESCRIPCIÓN', '2019', 'COMPAÑIA',
      '<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>', 1);


    const escuela_1: Job = new Job('CARRERA', '2017-2019', 'ESCUELA',
      '<P>ALGUNA DESCRIPCIÓN.</P>', 1);
    
    
    this.jobsEnglish = [job_1,job_2,school_1];
    this.jobsEspanol = [trabajo_1,trabajo_2,escuela_1];
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
