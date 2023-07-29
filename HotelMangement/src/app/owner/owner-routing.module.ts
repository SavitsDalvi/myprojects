import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersucessComponent } from './ownersucess/ownersucess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';

const routes: Routes = [{path:'',component:OwnerhomeComponent},
{path:'ownerHome',component:OwnerhomeComponent},
{path:'ownersignup',component:OwnersignupComponent},
{path:'ownersucess',component:OwnersucessComponent},
{path:'newhotelregi',component:NewhotelregistrationComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
