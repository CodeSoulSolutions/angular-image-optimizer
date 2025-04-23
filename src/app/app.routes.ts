import { Routes } from '@angular/router';
import { BasicUsageComponent } from './examples/basic-usage/basic-usage.component';
import { ResponsiveImagesComponent } from './examples/responsive-images/responsive-images.component';
import { PriorityImagesComponent } from './examples/priority-images/priority-images.component';

export const routes: Routes = [
  { 
    path: 'basic', 
    component: BasicUsageComponent,
    title: 'Basic Usage - Angular Image Optimizer'
  },
  { 
    path: 'responsive', 
    component: ResponsiveImagesComponent,
    title: 'Responsive Images - Angular Image Optimizer'
  },
  { 
    path: 'priority', 
    component: PriorityImagesComponent,
    title: 'Priority Images - Angular Image Optimizer'
  },
  { path: '', redirectTo: '/basic', pathMatch: 'full' }
];