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
    }

  ];

  public cloud: any = [

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
    }

  ];


  
  public skillEnglish: any = [
    { title: 'Programming', info: this.programing },
    { title: 'Cloud', info: this.cloud },
   
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
