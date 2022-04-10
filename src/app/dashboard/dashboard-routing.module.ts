import { Routes } from '@angular/router';
import { LayoutComponent } from '../template/layout/layout.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CRMComponent } from './crm/crm.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: AnalyticsComponent,
            },
            {
                path: "crm",
                component: CRMComponent,
            },

        ]
    },
];

export default routes;
