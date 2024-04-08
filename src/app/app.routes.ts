import { Routes } from '@angular/router';
import { NewgameComponent } from './newgame/newgame.component';
import { StartComponent } from './start/start.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: NewgameComponent },
  { path: 'start', component: StartComponent}
];
