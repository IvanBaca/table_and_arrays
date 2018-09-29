import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule,MatSlideToggleModule,MatCheckboxModule,MatTabsModule} from '@angular/material/';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { Main } from './Main/main';

@NgModule({
  declarations: [

    Main,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [

    Main,
  ]
})
export class AppModule { }

