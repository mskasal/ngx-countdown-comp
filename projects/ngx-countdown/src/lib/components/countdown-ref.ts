import { ViewChild, Input } from '@angular/core'
import { NgxCountdownDirective } from '../ngx-countdown.directive'

export class CountdownTimerRef {
  state: string
  timer: number
  @Input() timeout: number

  @ViewChild(NgxCountdownDirective) countdown: NgxCountdownDirective

  play() {
    this.countdown.play()
  }

  pause() {
    this.countdown.pause()
  }

  reset() {
    this.countdown.reset()
  }

  get leftSeconds(): number {
    return this.timeout - this.timer
  }

  get minute(): number {
    return Math.floor(this.leftSeconds / 60) || 0
  }

  get second(): number {
    return this.timeout - this.minute * 60 - this.timer || 0
  }

  get preSecond() {
    return this.second >= 10 ? '' : '0'
  }

  get leftTime(): string {
    return `${this.minute}:${this.preSecond}${this.second}`
  }
}
