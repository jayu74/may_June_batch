import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';



@NgModule({
  declarations: [
    OwnerloginComponent,
    HotelRegistrationComponent,
    OwnerSignUpComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
  ],
})
export class OwnerModule { }
