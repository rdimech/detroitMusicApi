import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
// import { HttpClient } from 'selenium-webdriver/http';
import { SearchCriteriaComponent } from './search/search.component';
import { EventListComponent } from './search/list/list.component';
import { BucketListPageComponent } from './search/bucket/bucket.component';
import { RouterModule, Routes } from '@angular/router';
import { Api } from './services/api.service';

// **Routing**
const appRoutes: Routes = [
  { path: '', component: SearchCriteriaComponent },
  { path: 'bucket', component: BucketListPageComponent },
  // { path: '', redirectTo: '/people', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    EventListComponent,
    BucketListPageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
