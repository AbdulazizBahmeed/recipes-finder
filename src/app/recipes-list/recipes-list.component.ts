import { Component } from '@angular/core';
import {Recipe} from '../interfaces/Recipe'
import { FetchRecipesService } from '../fetch-recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes:any;

  constructor(private fetchRecipesService: FetchRecipesService) {}

  getRecipes(ingredients:string): void {
    this.fetchRecipesService.getRecipes(ingredients).subscribe(res =>{
      console.log(res)
      this.recipes = res
    });
  }
}
