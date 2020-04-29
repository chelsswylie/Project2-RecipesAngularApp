import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'searchCriteria',
    component: SearchCriteriaComponent,
  },
  {
    path: 'favoritesPage',
    component: FavoritesPageComponent,
  },
  {
    path: 'recipeList',
    component: RecipeListComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    FavoritesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
