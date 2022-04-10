import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import routes from './dashboard-routing.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CRMComponent } from './crm/crm.component';


@NgModule({
  declarations: [AnalyticsComponent, CRMComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class DashboardModule { }
