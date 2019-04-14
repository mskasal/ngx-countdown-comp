import { Component, ViewChild } from '@angular/core'
import {
  NgxCountdownDirective,
  CountDownBarComponent,
  TimerModel,
  TimerStateType,
} from '../../projects/ngx-countdown/src/public-api'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-countdown-demo'
  timer: number
  state: TimerStateType
  constructor() {}

  @ViewChild(NgxCountdownDirective) countdown: NgxCountdownDirective
  @ViewChild('counter') counter: CountDownBarComponent

  get transformDeg() {
    return `rotate(${this.timer * 6}deg)`
  }

  onCdTicToc(event: TimerModel) {
    console.log(event)

    this.timer = event.stepTimer
    this.state = event.state
  }

  play() {
    this.countdown.play()
    this.counter.play()
  }

  pause() {
    this.countdown.pause()
  }

  reset() {
    this.countdown.reset()
    this.counter.reset()
  }
}
