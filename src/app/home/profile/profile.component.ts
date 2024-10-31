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
      title: 'Summary:', data: 'Dedicated and Experienced Software Professional , Proficient in adapting to new software applications, Self motivated with excellent Communication skills, Strong Creative , Logical , Technical and analytic skills. Team Player with an eye for detail Having 3.8 years of experience in Full Stack Web Development , HTML, CSS, Bootstrap , Java, Spring Boot, Quarkus, Angular Framework, tools like git, GitHub, postman, JIRA, Database (MySQL,Oracle DB,Postgre SQl)'
      
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
