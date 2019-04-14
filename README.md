# NgxCountdown

## Using Directive

#### in module

```typescript
import { NgxCountdownModule } from 'ngx-countdown'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCountdownModule],
  providers: [],
  exports: [NgxCountdownModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

#### in template
Basically counter rotating image a bit for every second

```html
<div style="text-align:center">
  <h1 ngxCountdown [ngxCountdownTimeout]="30" (cdTicToc)="onCdTicToc($event)">Yo!!</h1>
  <img
    [ngStyle]="{ transform: transformDeg }"
    width="300"
    alt="Angular Logo"
    src="path/to/pic"
  />
</div>
<div class="actions">
    <button (click)="pause()">Pause</button>
    <button (click)="play()">Play</button>
    <button (click)="reset()">Reset</button>
</div>
```

#### in component

```typescript
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
  }

  pause() {
    this.countdown.pause()
  }

  reset() {
    this.countdown.reset()
  }
}


```

### Using CountdownBarComponent

### in module

```typescript
import { NgxCountdownModule } from '../../projects/ngx-countdown/src/public-api'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCountdownModule],
  providers: [],
  exports: [NgxCountdownModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### in template
```html
<ngx-countdown-bar #counter [timeout]="30"></ngx-countdown-bar>

<div class="actions">
    <button (click)="pause()">Pause</button>
    <button (click)="play()">Play</button>
    <button (click)="reset()">Reset</button>
</div>
```

### in component

```typescript
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

  @ViewChild('counter') counter: CountDownBarComponent

  play() {
    this.counter.play()
  }

  pause() {
    this.counter.pause()
  }

  reset() {
    this.counter.reset()
  }
}

```

#### Custom colors
```css
ngx-countdown-bar {
  --bar-border-color: #3ca55c;
  --bar-bg-color: #ffffff;
  --bar-fill-color: #3ca55c;
  --filled-text-color: white;
  --unfilled-text-color: black;
  --text-right-offset: 40px;
  --fill-animation: 200ms ease-in-out;
  --gradient-start-color: #ef6947;
  --gradient-end-color: var(--bar-fill-color);
}
```
