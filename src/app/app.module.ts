import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { FacadeService } from './calc/facade/facade.service';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'calc', component: CalcComponent },
  { path: 'calc/facade', component: FacadeComponent },
  { path: 'calc/countertop', component: CountertopComponent },
  { path: 'calc/geometry', component: GeometryComponent },
  { path: 'calc/result', component: ResultComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'info', component: InfoComponent },
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
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [RoadmapService, FacadeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
