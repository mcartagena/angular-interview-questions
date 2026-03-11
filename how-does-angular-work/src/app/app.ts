import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { SharingData } from './sharing-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [SharingData]
})
export class App {
  currentPage = 1;

  constructor(sharingData: SharingData) {
    console.log('App Total pages from SharingData service:', sharingData.totalPages);
  }

  notifyParent(value: number):void{
    console.log('Notified parent with value', value);
  }
}
