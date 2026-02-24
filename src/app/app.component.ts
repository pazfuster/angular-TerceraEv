import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MiPrimerComponenteComponent} from './components/mi-primer-componente/mi-primer-componente.component';
import {MiSegundoComponenteComponent} from './components/mi-segundo-componente/mi-segundo-componente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiPrimerComponenteComponent, MiSegundoComponenteComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-primera-app';
}
