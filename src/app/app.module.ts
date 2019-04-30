import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NgxCountdownModule } from 'ngx-countdown-comp'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCountdownModule],
  providers: [],
  exports: [NgxCountdownModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
