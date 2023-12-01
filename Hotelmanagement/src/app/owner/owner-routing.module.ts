import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';

const routes: Routes = [
  {path: "",component : OwnerloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
