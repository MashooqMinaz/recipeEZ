import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Hits } from 'src/app/models/recipeModel';
import { RecipeServiceService } from 'src/app/service/recipe-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  input = new Subject<string>();
  recipeData!:Hits[]

  constructor(private recipeService:RecipeServiceService){
    this.input.pipe(
      debounceTime(1000),
      distinctUntilChanged()).subscribe(values => {
        this.OnChanges(values)

      })
  }

  // ngOnInit(): void {
  //   this.OnChanges('');
  // }

  OnChanges(input: string) {

    this.recipeService.getRecipe(input).subscribe(val => {
      this.recipeData = val

    })
  }

}
