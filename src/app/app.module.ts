import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NgxCountdownModule } from '../../projects/ngx-countdown/src/public-api'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCountdownModule],
  providers: [],
  exports: [NgxCountdownModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
