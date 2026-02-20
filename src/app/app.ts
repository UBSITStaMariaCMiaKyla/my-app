import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component/home.component';
import { UserInteractionComponent } from './user-interaction/user-interaction.component/user-interaction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, UserInteractionComponent],
  templateUrl: './app.html',
})
export class App {}