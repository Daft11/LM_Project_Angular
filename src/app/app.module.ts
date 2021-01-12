import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QueueComponent } from './queue/queue.component';
import { CalcComponent } from './calc/calc.component';
import { InfoComponent } from './info/info.component';
import { FacadeComponent } from './calc/facade/facade.component';
import { RoadmapComponent } from './calc/roadmap/roadmap.component';
import { CountertopComponent } from './calc/countertop/countertop.component';
import { GeometryComponent } from './calc/geometry/geometry.component';
import { ResultComponent } from './calc/result/result.component';
import { RoadmapService } from './calc/roadmap/roadmap.service';
import { OnCalcLoadsDirective } from './directives/on-calc-loads.directive';
import { FacadeService } from './services/facade.service';
import { CountertopService } from './services/countertop.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { animationState: 'Home' },
    pathMatch: 'full',
  },
  {
    path: 'calc',
    data: { animationState: 'Calc' },
    // component: CalcComponent,
    // pathMatch: 'full',
    children: [
      { path: '', component: CalcComponent },
      {
        path: 'facade',
        component: FacadeComponent,
        data: { animationState: 'One' },
      },
      {
        path: 'countertop',
        component: CountertopComponent,
        data: { animationState: 'Two' },
      },
      {
        path: 'geometry',
        component: GeometryComponent,
        data: { animationState: 'Three' },
      },
      {
        path: 'result',
        component: ResultComponent,
        data: { animationState: 'Four' },
      },
    ],
  },
  {
    path: 'queue',
    component: QueueComponent,
    data: { animationState: 'Queue' },
  },
  { path: 'info', component: InfoComponent, data: { animationState: 'Info' } },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CalcComponent,
    RoadmapComponent,
    FacadeComponent,
    CountertopComponent,
    GeometryComponent,
    ResultComponent,
    QueueComponent,
    InfoComponent,
    OnCalcLoadsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [RoadmapService, FacadeService, CountertopService],
  bootstrap: [AppComponent],
})
export class AppModule {}
