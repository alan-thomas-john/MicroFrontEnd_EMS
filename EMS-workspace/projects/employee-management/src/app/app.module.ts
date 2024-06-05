import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeCompArr } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StateModule } from 'projects/state/src/public-api';
import { employeeReducer } from 'projects/state/src/lib/employee.reducer';

@NgModule({
  declarations: [
    AppComponent,
    routeCompArr
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(employeeReducer),
    EffectsModule.forRoot([]),
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
