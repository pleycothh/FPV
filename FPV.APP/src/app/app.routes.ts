import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashComponent } from './flash/flash.component';

export const routes: Routes = [
    {
      path: '',
      component: FlashComponent,
      children: [
        { path: '', redirectTo: 'flash', pathMatch: 'full' },
        { path: 'flash', component: FlashComponent },
      
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

