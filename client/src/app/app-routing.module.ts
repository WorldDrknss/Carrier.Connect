import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ArticlesComponent } from './news/articles/articles.component';
import { PartnersComponent } from './partners/partners.component';
import { DriversComponent } from './drivers/drivers.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component:HomeComponent},
  {path:'partners', component:PartnersComponent},
  {path:'drivers', component:DriversComponent},
  {path:'news', component:NewsComponent},
  {path:'news/:id', component:ArticlesComponent},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
