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
      progress: 95,
      image: './assets/images/html-css.jpg'
    }],
    [{
      title: 'Angular',
      progress: 90,
      image: './assets/images/Angularcli.png'

    }],
    [{
      title: 'Typescript',
      progress: 85,
      image: './assets/images/typescript.png'
    }],
    [{
      title: 'ReactJS',
      progress: 75,
      image: './assets/images/reactjs.png'
    }]
  ];

  public skill_2: any = [

    [{
      title: 'MS Office ',
      progress: 90,
      image: './assets/images/microsoft.png'

      
    }],
    [{
      title: 'Toad',
      progress: 95,
      image: './assets/images/Toad.png'
    }],
    [{
      title:'Sql Developer',
      progress:90,
      image: './assets/images/sqldeveloper.jpg'
    }],
    [{
      title:'Confluence,JIRA',
      progress:90,
      image: './assets/images/jira.png'
    }],
    [{
      title:'Postman,Swagger',
      progress:90,
      image: './assets/images/postman.png'
    }],
    [{
      title:'Git',
      progress:90,
      image: './assets/images/git.png'
    }],
    [{
      title:'Maven/Npm',
      progress:90,
      image: './assets/images/maven.png'
    }],
    [{
      title:'Docker',
      progress:90,
      image: './assets/images/docker.png'
    }],
    [{
      title:'Microsoft Azure',
      progress:90,
      image: './assets/images/azure.png'
    }],
    [{
      title:'GCP',
      progress:90,
      image: './assets/images/googlecloud.png'
    }],

  ];

  public skill_3: any = [

    [{
      title: 'Core Java',
      progress: 90,
      image: './assets/images/java.png'
      
    }],
    [{
      title: 'Spring Boot',
      progress: 95,
      image: './assets/images/springboot.jpg'
    }],
    [{
      title:'Quarkus',
      progress:90,
      image: './assets/images/quarkus.png'
    }],
    [{
      title:'Spring Data JPA',
      progress:90,
      image: './assets/images/springdata.png'
    }],
    [{
      title:'Spring Security,Keycloak',
      progress:90,
      image: './assets/images/keycloak.png'

    }],
    [{
      title:'Linux/Bash Scripting',
      progress:90,
      image: './assets/images/bash.jpg'
    }],
    [{
      title:'Junit Testing',
      progress:80,
      image: './assets/images/junit.png'
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
