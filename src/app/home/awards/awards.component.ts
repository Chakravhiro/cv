import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() English: any;

  public headEnglish: any = { title: 'Certifications', subtitle: 'Programming' , subtitle2:'Cloud' ,subtitle3:'Programing'};
  public head: any = this.headEnglish;

  public programing: any = [

    {
      img: '/assets/images/hack.png',
      title: 'Angular',
      name: 'Hackerrank',
      link: 'https://www.hackerrank.com/certificates/0e494c94e21d'
    },
    {
      img:'/assets/images/hack.png',
      title: 'Java',
      name: 'Hackerrank',
      link:'https://www.hackerrank.com/certificates/d5588274524d'

    },
    {
    img:'/assets/images/hack.png',
    title: 'Mysql',
    name: 'Hackerrank',
    link:'https://www.hackerrank.com/certificates/c2428e63985d'
    },
    {
      img:'/assets/images/Full.png',
      title: 'Enterprise Developer to Full Stack Developer',
      name: 'Skillsoft',
      link:'https://skillsoft.digitalbadges.skillsoft.com/04023631-84ba-4c9f-b546-fb6fe914ad0e'
      },
      {
        img:'/assets/images/Angular.png',
        title: 'Angular 11',
        name: 'Skillsoft',
        link:'https://skillsoft.digitalbadges.skillsoft.com/42f2f452-995e-4e0b-a1bd-8c341022838a'
        }
  

  ];

  public cloud: any = [

    {
      img: '/assets/images/microsoft.png',
      title: 'Microsoft Azure',
      name: 'AZ-900',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/JChakravarthy-2734/846BDAC8D4700503?sharingId=F04C50125BAB75AA'
    },
    {
      img:'/assets/images/microsoft.png',
      title: 'Microsoft Azure',
      name: 'DP900',
      link:'https://learn.microsoft.com/api/credentials/share/en-us/JChakravarthy-2734/B0F52D53F92813EC?sharingId=F04C50125BAB75AA'

    },
    {
    img:'/assets/images/microsoft.png',
    title: 'Microsoft Azure',
    name: 'AI900',
    link:'https://learn.microsoft.com/api/credentials/share/en-us/JChakravarthy-2734/B0F52D53F92813EC?sharingId=F04C50125BAB75AA'
    }

  ];

  public db: any = [

    {
      img: '/assets/images/Meta.png',
      title: 'Advanced MySQL Topic',
      name: 'Meta',
      link: 'https://www.coursera.org/account/accomplishments/certificate/APAZTDHGNZWU'
    },
    {
      img:'./assets/images/Meta.png',
      title: 'Database Structures with MySQL',
      name: 'Meta',
      link:'https://www.coursera.org/account/accomplishments/certificate/WLLNYHKBJY7M'

    },
    

  ];

  public devops: any = [

    {
      img: '/assets/images/Google.png',
      title: 'Version Control using Git',
      name: 'Google',
      link: 'https://www.coursera.org/account/accomplishments/verify/U87YLBSZPCRQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
    },
    {
      img:'/assets/images/Kode.png',
      title: 'Docker',
      name: 'Kodecloud',
      link:'https://kodekloud.com/certificate-verification/2D0F9B04618C-2D0F8FA2906A-2D0F8F7406BE/'

    },
    

  ];


  
  public skillEnglish: any = [
    { title: 'Programming', info: this.programing },
    { title: 'Cloud', info: this.cloud },
    {title:'Database', info: this.db},
    {title:'Devops', info: this.devops}
   
  ];
  
  public awards: any = this.skillEnglish;

  ngOnInit() {
  }



  ngOnChanges() {
    if (this.English) {
      this.awards = this.skillEnglish;
      this.head = this.headEnglish;
    } 
  }

}
