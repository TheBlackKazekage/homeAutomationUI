import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent }      from './devices/devices.component';
import { DashboardComponent }    from './dashboard.component';
import { GeneralComponent }      from './general/general.component';
import { StatusComponent }       from './status/status.component';
import { AdminComponent }       from './admin/admin.component';
const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/devices',
      pathMatch: 'full'
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
   {
    path: 'dashboard',
    component: DashboardComponent
  },
   {
    path: 'general',
    component: GeneralComponent
  },
   {
    path: 'status',
    component: StatusComponent
  },
   {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);