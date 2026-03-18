import { Component, signal, OnInit, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  title = signal<string>('');
  users = signal<UserInterface[]>([]);

  titleChangeEffect = effect(() => {
    console.log('Title changed to:', this.title());
  });

  usersTotal = computed(() => this.users().length);

  ngOnInit(): void {
    setTimeout(() => {
      // using set will replace the entire array, while using update allows us to modify the existing array without replacing it
      // mutating the array directly will not trigger change detection, so we need to use the update method to ensure that the changes are detected and the UI is updated accordingly
      // this.users.set([
      //   { id: '1', name: 'John Doe' },
      //   { id: '2', name: 'Jane Doe' },
      //   { id: '3', name: 'Jack Doe' }
      // ]);
      this.users.update(prevUsers => [
        ...prevUsers,
        { id: '1', name: 'John Doe' }]);
    }, 2000);
  }

  changeTitle(event: Event) {
    const titleInput = event.target as HTMLInputElement;
    this.title.set(titleInput.value);
  }
}
