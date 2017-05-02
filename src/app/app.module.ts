import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';

import {
  MdButtonModule,
  MdIconModule,
  MdListModule
} from '@angular/material';

import {
  AppComponent,
  HomeComponent,
  SideNavComponent
} from './containers';
import {
  SideNavItemComponent
} from './components';

import { reducer } from './reducers';
import { ExampleEffects } from './effects';

import { routes } from './routes';

const components = [
  AppComponent,
  HomeComponent,
  SideNavComponent,
  SideNavItemComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    EffectsModule.run(ExampleEffects),
    HttpModule,
    RouterModule.forRoot(routes),
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(), // NOTE. Must come after `StoreModule`

    // Material Imports
    MdButtonModule,
    MdIconModule,
    MdListModule
  ],
  exports: [
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
