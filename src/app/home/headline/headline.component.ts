import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit, OnChanges {

  @Input() English: any;
  public name: string = "CHAKRAVARTHY J";
  public titleEnglish: string = "SOFTWARE ENGINEER";
 

  public title = this.titleEnglish;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.English) {
      this.title = this.titleEnglish;
    } 
  }

}
