import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CircleComponent } from './circle/circle.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavBarComponent , CircleComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-Portfolio';
}
