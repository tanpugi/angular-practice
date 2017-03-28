import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A Test Recipe 1", "This is test", "http://www.communications.tas.gov.au/__data/assets/image/0003/263271/Explore_the_possibilities_strapline_version_of_the_logo_horizontal_version.jpg"),
    new Recipe("A Test Recipe 2", "This is test", "http://www.communications.tas.gov.au/__data/assets/image/0003/263271/Explore_the_possibilities_strapline_version_of_the_logo_horizontal_version.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
  }
}
