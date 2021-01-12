import {
  transition,
  trigger,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition(
    'Home => Calc, Home => Queue, Home => Info, Calc => Queue, Calc => Info, Queue => Info, Calc => One, One => Two, One => Three, One => Four, Two => Three, Two => Four, Three => Four',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          zIndex: '-1',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ right: '-100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('0.35s ease-out', style({ right: '100%' }))]),
        query(':enter', [animate('0.35s ease-out', style({ right: '0%' }))]),
      ]),
      query(':enter', animateChild()),
    ]
  ),
  transition(
    'Calc => Home, Queue => Home, Queue => Calc, Info => Home, Info => Calc, Info => Queue, Two => One, Three => One, Three => Two, Four => One, Four => Two, Four => Three',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          zIndex: '-1',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('0.35s ease-out', style({ left: '100%' }))]),
        query(':enter', [animate('0.35s ease-out', style({ left: '0%' }))]),
      ]),
      query(':enter', animateChild()),
    ]
  ),
]);
