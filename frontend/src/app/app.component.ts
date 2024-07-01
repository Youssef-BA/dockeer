import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';  // Importer RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],  // Ajouter RouterOutlet ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  project = {
    name: '',
    email: '',
    description: '',
    budget: 0
  };

  // Ajoutez une méthode onSubmit pour gérer la soumission du formulaire
  onSubmit() {
    console.log(this.project);
    alert('Formulaire soumis avec succès!');
  }
}
