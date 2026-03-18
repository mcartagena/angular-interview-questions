import { Component, signal, OnInit, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface UserInterface{
  id: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  users = signal<UserInterface[]>([])

  user = computed(() =>
    this.users().length > 0? this.users()[0] : { id: '', name: '', role: '' }
  );

  ngOnInit(): void {
    setTimeout( () => {
      this.users.update(prevUsers =>
        [...prevUsers,
          { id: '1', name: 'foo', role: 'developer'},
          { id: '1', name: 'bar', role: 'admin'},
          { id: '1', name: 'baz', role: 'qa'},
        ]
      )
    }
      ,2000)
  }
}
