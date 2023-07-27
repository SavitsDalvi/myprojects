import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm!:FormGroup;
  constructor(private router:Router){

  }
  
back()
{
  this.router.navigateByUrl('home');
}
  login(){
    this.router.navigateByUrl('owner/ownerlogin');
  }
  

}
