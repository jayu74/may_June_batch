import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';


@NgModule({
  declarations: [
    OwnerloginComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
  ],
})
export class OwnerModule { }
