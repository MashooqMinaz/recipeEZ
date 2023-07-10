import { ActivatedRoute } from '@angular/router';
import { Hits } from './../../models/recipeModel';
import { Component } from '@angular/core';
import { RecipeServiceService } from 'src/app/service/recipe-service.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.scss']
})
export class SingleRecipeComponent {
  food!:Hits
  constructor(private activatedRoute:ActivatedRoute, foodService:RecipeServiceService) {
    this.activatedRoute.params.subscribe((param)=>{
      foodService.singleRecipe(param['link']).subscribe(val=>{
        this.food = val
        console.log(val);
        console.log(param);


      })
    })
  }
}
