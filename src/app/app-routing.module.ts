import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingleRecipeComponent } from './components/single-recipe/single-recipe.component';

const routes: Routes = [
  { path:'', redirectTo:"home",pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'details/:link', component: SingleRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
