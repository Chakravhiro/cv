import {Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() English: any;
 
  // TITLE 
  public headEnglish: any = { title: 'MY SKILLS', subtitle: 'SKILLS AND TOOLS' };
  public head: any = this.headEnglish;


  // ENGLISH
  public skill_1: any = [
    [{
      title: 'HTML & CSS',
      progress: 95
    }],
    [{
      title: 'Angular',
      progress: 90
    }],
    [{
      title: 'Typescript',
      progress: 85
    }],
    [{
      title: 'ReactJS',
      progress: 75
    }]
  ];

  public skill_2: any = [

    [{
      title: 'MS Office ',
      progress: 90
    }],
    [{
      title: 'Toad',
      progress: 95
    }],
    [{
      title:'Sql Developer',
      progress:90
    }],
    [{
      title:'Confluence,JIRA',
      progress:90
    }],
    [{
      title:'Postman,Swagger',
      progress:90
    }],
    [{
      title:'Git',
      progress:90
    }],
    [{
      title:'Maven/Npm',
      progress:90
    }],
    [{
      title:'Docker',
      progress:90
    }],
    [{
      title:'Microsoft Azure',
      progress:90
    }],
    [{
      title:'GCP',
      progress:90
    }],

  ];

  public skill_3: any = [

    [{
      title: 'Core Java',
      progress: 90
    }],
    [{
      title: 'Spring Boot',
      progress: 95
    }],
    [{
      title:'Quarkus',
      progress:90
    }],
    [{
      title:'Spring Data JPA',
      progress:90
    }],
    [{
      title:'Spring Security,Keycloak',
      progress:90
    }],
    [{
      title:'Linux/Bash Scripting',
      progress:90
    }],
    [{
      title:'Junit Testing',
      progress:80
    }],

  ];
  
  public skillEnglish: any = [
    { title: 'Frontend', info: this.skill_1 },
    { title: 'Backend', info: this.skill_3 },
    { title: 'Tools', info: this.skill_2 },
  ];
  // END ENGLISH


  // ESPANOL
  

  // DEFAULT 
  public skills: any = this.skillEnglish;




  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.skills = this.skillEnglish;
      this.head = this.headEnglish;
    } 
  }


}
