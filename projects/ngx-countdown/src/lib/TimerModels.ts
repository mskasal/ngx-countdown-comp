export type TimerStateType = 'PLAYING' | 'PAUSED' | 'COMPLETED' | 'PENDING'

export interface TimerModel {
  state: TimerStateType
  stepTimer?: number
  completeTimer?: number
}
