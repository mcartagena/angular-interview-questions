import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor, NgTemplateOutlet } from '@angular/common';
import { ChildComponent } from "./child-component/child-component";

export interface Article {
  id: string;
  title: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, ChildComponent, NgTemplateOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  article: Article | null = null;
  newArticle: Article = { id: '1', title: 'New Article' };
  numbers: number[] = [1, 2, 3, 4, 5];

}
