import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetacreditoComponent } from './componente/tarjetacredito/tarjetacredito.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetacreditoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
