import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  name = new FormControl('Ashish');

  profileForm = new FormGroup({
    fName: new FormControl('',Validators.required),
    lName: new FormControl('')
  });
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
     .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
     );
  }

}
