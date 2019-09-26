import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'translation-body',
  templateUrl: './translation-body.component.html',
  styleUrls: ['./translation-body.component.scss']
})
export class TranslationBodyComponent implements OnInit {

  word$;
  startOfYear = new Date(new Date().getFullYear().toString());
  dayOfTheYear;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.checkDates()
    this.setWord()
  }

  checkDates(){
    var now = new Date();
    // console.log(this.startOfYear.getTime())
    var diff = (now.getTime() - this.startOfYear.getTime()) + (((this.startOfYear.getTimezoneOffset()) - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    this.dayOfTheYear = day
  }

  setWord(){
    this.dataService.getWord$()
    .subscribe(
      (res) => {
        console.log(res.list)
        // console.log(this.dayOfTheYear/73)
        this.word$ = res.list[Math.floor(this.dayOfTheYear/73)]
        // [(Math.floor(Math.random() * 5))]
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
  }

}
