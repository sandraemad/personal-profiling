import { Routes } from '@angular/router';
import { DepressionComponent } from './depression/depression.component';
import { AnixityComponent } from './anixity/anixity.component';

export const routes: Routes = [
  { path: 'depression', component: DepressionComponent },
  { path: 'anixity', component: AnixityComponent },
];
