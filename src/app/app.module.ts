import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UpdateDbModule } from './update-db/update-db.module';

const routes: Routes = [
  { path: '', redirectTo: '/update-db', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    UpdateDbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
