import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hits, RecipeModel } from '../models/recipeModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http:HttpClient) {}

  BASE_URL = 'https://api.edamam.com/api/recipes/v2?'
  API_ID = '45676a43'
  API_KEY = '99d8965dbab24cf7182bfea4cb1fba13'

  getRecipe(input:string):Observable<Hits[]>{
    return this.http.get<RecipeModel>(`${this.BASE_URL}type=public&q=${input}s&app_id=${this.API_ID}&app_key=${this.API_KEY}`).pipe(map(res=>res.hits))
  }

  singleRecipe(url:string){
    return this.http.get<any>(url)
  }

}
