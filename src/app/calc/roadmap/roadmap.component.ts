import { Component, OnInit } from '@angular/core';

import { RoadmapService } from './roadmap.service';
import { stepModel } from './step.model';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  providers: [RoadmapService],
})
export class RoadmapComponent implements OnInit {
  roadMap: stepModel[];
  width: number;
  activeOffset: number;
  containerWidth: number;

  constructor(private roadMapService: RoadmapService) {}
  ngOnInit(): void {
    this.roadMap = this.roadMapService.getRoadmap();
  }

  reciveData(event: { activeOffset: number; containerWidth: number }) {
    this.activeOffset = event.activeOffset;
    this.containerWidth = event.containerWidth;
  }
}
