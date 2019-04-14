import { NgModule } from '@angular/core'
import { NgxCountdownDirective } from './ngx-countdown.directive'
import { CountDownBarComponent } from './components/count-down-bar/count-down-bar.component'

@NgModule({
  declarations: [NgxCountdownDirective, CountDownBarComponent],
  imports: [],
  exports: [NgxCountdownDirective, CountDownBarComponent],
})
export class NgxCountdownModule {}
