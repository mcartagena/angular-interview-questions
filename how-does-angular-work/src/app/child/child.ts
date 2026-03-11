import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SharingData } from '../sharing-data';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  providers: [SharingData]
})
export class Child {
  @Input() currentPage?: number;
  @Output() notifyParent = new EventEmitter<number>();

  constructor(sharingData: SharingData) {
    console.log('Child Total pages from SharingData service:', sharingData.totalPages);
  }
}
