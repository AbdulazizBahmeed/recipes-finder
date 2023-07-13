import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from "../app/interfaces/Recipe";


@Injectable({
  providedIn: 'root'
})
export class FetchRecipesService {

  constructor(private _http: HttpClient){}

  getRecipes(ingrediants: string) {
    const url = "https://api.spoonacular.com/recipes/findByIngredients?";
    const apiKey = "2b0b42e86b094497873ff72810cd0bfd";
    const apiRequestUrl = `${url}apiKey=${apiKey}&ingredients=${ingrediants}`;
    return this._http.get(apiRequestUrl);
  }
}
