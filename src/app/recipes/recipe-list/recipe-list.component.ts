import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe (
      'Albondigas',
      'Las albóndigas se pueden acompañar con cualquier salsa. En esta receta nos hemos decantado por una salsa tradiconal elaborada con cebollas, zanahorias, ajo, harina, vino blanco, aceite y sal.',
      'https://www.hogarmania.com/archivos/201911/008-albondigas-salsa-xl-668x400x80xX-1.jpg'
    ),
    new Recipe (
      'Albondigas',
      'Las albóndigas se pueden acompañar con cualquier salsa. En esta receta nos hemos decantado por una salsa tradiconal elaborada con cebollas, zanahorias, ajo, harina, vino blanco, aceite y sal.',
      'https://www.hogarmania.com/archivos/201911/008-albondigas-salsa-xl-668x400x80xX-1.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
