import { Directive, DoCheck, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appOnCalcLoads]',
})
export class OnCalcLoadsDirective implements DoCheck {
  routeEventsSub: Subscription;
  activeElement: HTMLElement;
  isOnCalcRoute: boolean;
  containerWidth: number = 0;
  activeOffset: number = 10;
  @Output() refreshData = new EventEmitter<{
    activeOffset: number;
    containerWidth: number;
  }>();

  constructor(private route: Router) {
    this.routeEventsSub = this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        this.isOnCalcRoute = e.url.includes('/calc/');
        this.containerWidth = this.isOnCalcRoute ? 90 : 0;
        setTimeout(() => {
          this.refreshData.emit({
            activeOffset: this.activeOffset,
            containerWidth: this.containerWidth,
          });
        }, 0);
      });
  }

  // @HostBinding('style.top') offsetTop: number;

  ngDoCheck() {
    this.activeElement = document.querySelector('li.pipeline__element.active');
    if (this.activeElement)
      this.activeOffset = this.activeElement.offsetTop - 2;
  }
}
