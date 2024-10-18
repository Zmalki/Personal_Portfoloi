import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [ ],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss'
})
export class CircleComponent {

  constructor() {}

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv.pdf';  // Pfad zu deiner Datei
    link.download = 'cv.pdf';  // Name der herunterzuladenden Datei
    link.click();
  }

}

