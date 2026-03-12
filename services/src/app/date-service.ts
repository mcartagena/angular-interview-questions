import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  getToday(): Date {
    const startDateInTimeStamp = new Date().setHours(0, 0, 0, 0);
    return new Date(startDateInTimeStamp);
  }
  getTomorrow(): Date {
    return new Date(this.getToday().setDate(this.getToday().getDate() + 1));
  }
  getYesterday(): Date {
    return new Date(this.getToday().setDate(this.getToday().getDate() - 1));
  }
}
