import { RouterModule, Routes } from '@angular/router';
import { MenuItems } from './menu-items/menu-items';
import { Home } from './home/home';
import { ToDoList } from './to-do-list/to-do-list';

import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'menu-items', component: MenuItems },
  { path: 'to-do-list', component: ToDoList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
