import { Component, ViewChild } from '@angular/core'
import { NgxCountdownDirective, CountDownBarComponent, TimerModel, TimerStateType } from 'ngx-countdown-comp'
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
    console.log('from directive', event)

    this.timer = event.stepTimer
    this.state = event.state
  }

  compTicToc(event: TimerModel) {
    console.log('from component', event)
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
