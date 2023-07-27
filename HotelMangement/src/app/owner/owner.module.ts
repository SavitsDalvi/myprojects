import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared/shared.module';
import { OwnersucessComponent } from './ownersucess/ownersucess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';


@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnerLoginComponent,
    OwnersucessComponent,
    NewhotelregistrationComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OwnerModule { }
