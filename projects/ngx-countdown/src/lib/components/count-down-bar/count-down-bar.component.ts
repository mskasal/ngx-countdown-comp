import { Component, ViewChild, ElementRef } from '@angular/core'
import { CountdownTimerRef } from '../countdown-ref'
import { TimerModel } from '../../TimerModels'

@Component({
  selector: 'ngx-countdown-bar',
  templateUrl: './count-down-bar.component.html',
  styleUrls: ['./count-down-bar.component.css'],
})
export class CountDownBarComponent extends CountdownTimerRef {
  @ViewChild('loadbar') loadbar: ElementRef
  @ViewChild('gradientOffset') gradientOffset: ElementRef

  onCdTicToc(event: TimerModel) {
    this.timer = event.stepTimer
    this.state = event.state

    this.loadbar.nativeElement.style.transform = `translateX(-${100 -
      ((this.leftSeconds || 0.001) * 100) / this.timeout}%)`
    this.gradientOffset.nativeElement.setAttribute(
      'offset',
      `${100 - (((this.leftSeconds || 0.001) * 100) / this.timeout) * 1.7}%`
    )
    this.tictoc.emit(event)
  }
}
