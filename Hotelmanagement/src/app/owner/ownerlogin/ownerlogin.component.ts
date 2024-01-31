import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OwnerModule } from '../owner.module';


@Component({
  selector: 'app-ownerlogin',
  templateUrl:'./ownerlogin.component.html',
  styleUrls: ['./ownerlogin.component.css']
})
export class OwnerloginComponent {
  loginForm!: FormGroup

}
