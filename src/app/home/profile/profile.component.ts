import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit, OnChanges  {
  

  public titleEnglish: string = "Chakravarthy J";
  public subtitleEnglish: string = "Software Developer";
  

  public title = this.titleEnglish;
  public subtitle = this.subtitleEnglish;


  // You can use a HTML tags in 'data'
  public profileEnglish: any =
    {
      title: 'Professional Summary:',
       data: 'Dedicated and Experienced Software Professional with 4.8 years of experience in Full Stack Web Development. Proficient in designing and developing scalable Microservices using Java, Spring Boot, and Quarkus, and building dynamic front-end applications with React. Skilled in leveraging Google Cloud Platform (GCP) services for cloud-native development and deployment. Highly adaptable, self-motivated, and detail-oriented with strong analytical, logical, and technical skills. A proven team player with excellent communication and problem-solving abilities. Experienced with Git, GitHub, Postman, JIRA, and relational databases like MySQL, Oracle, and PostgreSQL.'
    };
  
  
  public profile = this.profileEnglish;
  @Input() English: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.title = this.titleEnglish;
      this.subtitle = this.subtitleEnglish;
      this.profile = this.profileEnglish;
    } 
    
  }


}
