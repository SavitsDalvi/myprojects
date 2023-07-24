import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';

const routes: Routes = [{path:'',component:OwnerhomeComponent},
{path:'ownersignup',component:OwnersignupComponent},
{path:'ownerlogin',component:OwnerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
