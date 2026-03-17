import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private configService: ConfigService) {
    console.log('API URL:', this.configService.configFoo?.apiUrl);
    console.log('Timeout:', this.configService.configFoo?.timeout);
  }
}
