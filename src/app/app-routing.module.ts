import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'actionssheet', loadChildren: './actionssheet/actionssheet.module#ActionssheetPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
