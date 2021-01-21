import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { CountertopComponent } from './calc/countertop/countertop.component';
import { FacadeComponent } from './calc/facade/facade.component';
import { GeometryComponent } from './calc/geometry/geometry.component';
import { ResultComponent } from './calc/result/result.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
