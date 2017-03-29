import { EventEmitter, Injectable } from '@angular/core'; 
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe(
            "A Test Recipe 1", 
            "This is test xcxc", 
            "http://www.communications.tas.gov.au/__data/assets/image/0003/263271/Explore_the_possibilities_strapline_version_of_the_logo_horizontal_version.jpg",
            [
                new Ingredient("Bawang", 1),
                new Ingredient("Vetsin", 5)

            ]),
        new Recipe(
            "A Test Recipe 2",
            "This is test",
            "http://www.communications.tas.gov.au/__data/assets/image/0003/263271/Explore_the_possibilities_strapline_version_of_the_logo_horizontal_version.jpg",
            [
                new Ingredient("Okra", 56)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}