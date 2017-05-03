import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ColorPickerModule } from './components/color-picker/color-picker.module';

import { AppComponent } from './app.component';
import { ShowHideBarComponent } from './show-hide-bar/show-hide-bar.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ColorPickerModule,
    StoreModule.provideStore({environment}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
