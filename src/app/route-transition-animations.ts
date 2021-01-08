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
    'One => Two, One => Three, One => Four, Two => Three, Two => Four, Three => Four',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ right: '-100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('0.5s ease-out', style({ right: '100%' }))]),
        query(':enter', [animate('0.5s ease-out', style({ right: '0%' }))]),
      ]),
      query(':enter', animateChild()),
    ]
  ),
  transition(
    'Two => One, Three => Two, Three => One, Four => Three, Four => Two, Four => One',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('0.5s ease-out', style({ left: '100%' }))]),
        query(':enter', [animate('0.5s ease-out', style({ left: '0%' }))]),
      ]),
      query(':enter', animateChild()),
    ]
  ),
]);
