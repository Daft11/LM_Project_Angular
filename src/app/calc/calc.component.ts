import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoadmapService } from './roadmap/roadmap.service';
import { stepModel } from './roadmap/step.model';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
  providers: [RoadmapService],
})
export class CalcComponent implements OnInit {
  roadMap: stepModel[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roadmapService: RoadmapService
  ) {}

  ngOnInit(): void {
    this.roadMap = this.roadmapService.getRoadmap();
  }

  onNextClick() {
    this.router.navigate(['facade'], { relativeTo: this.route });
  }
}
