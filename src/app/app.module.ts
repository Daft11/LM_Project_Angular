import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FacadeService } from './services/facade.service';
import { CountertopService } from './services/countertop.service';
import { CalculateService } from './services/calculate.service';
import { OnCalcLoadsDirective } from './directives/on-calc-loads.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectedComponent } from './calc/selected/selected.component';

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
    SelectedComponent,
    OnCalcLoadsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RoadmapService,
    FacadeService,
    CountertopService,
    CalculateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
