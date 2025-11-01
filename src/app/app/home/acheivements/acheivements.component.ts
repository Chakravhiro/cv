import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.css']
})
export class AcheivementsComponent implements OnInit {

  constructor() { }
    @Input() English: any;
   
    // TITLE 
    public headEnglish: any = { title: 'ACHEIVMENTS', subtitle: 'ACHEIVEMENT CERTIFICATES' };
    public head: any = this.headEnglish;
  

  ngOnInit(): void {
  }

   public skill_1: any = [
    [{
      title: 'Dedalus Star Performer',
      progress: 95,
      image: './assets/images/Dedalus_ach.jpg'
    }],
  ]

   public skill_2: any = [
    [{
      title: 'Altimetrik Star Performer',
      progress: 95,
      image: './assets/images/Altimetrik_ach.png'
    }],
  ]
 public skillEnglish: any = [
    { title: 'Dedalus', info: this.skill_1 },
    { title: 'Altimetrik', info: this.skill_2 }
 ]




  public skills: any = this.skillEnglish;



}
