import { Component } from '@angular/core';
import { ImagemComponent } from './imagem/imagem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImagemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-biscoito';
}
