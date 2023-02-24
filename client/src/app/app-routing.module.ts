import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ArticlesComponent } from './news/articles/articles.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component:HomeComponent},
  {path:'news', component:NewsComponent},
  {path:'news/:id', component:ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
