import { date } from './../../../how-does-angular-work/node_modules/zod/src/v4/core/regexes';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateService } from './date-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  dateService: DateService;
  constructor(dateService: DateService) {
    this.dateService = dateService;
  }

  ngOnInit(): void {
      console.log('Dates',
       this.dateService.getToday(),
       this.dateService.getTomorrow(),
       this.dateService.getYesterday());
  }
}
