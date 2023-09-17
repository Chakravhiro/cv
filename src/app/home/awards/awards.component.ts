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

  


  public awardsEnglish: any = [

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


  

  
  public awards: any = this.awardsEnglish;

  ngOnInit() {
  }



  ngOnChanges() {
    if (this.English) {
      this.awards = this.awardsEnglish;
      this.head = this.headEnglish;
    } 
  }

}
