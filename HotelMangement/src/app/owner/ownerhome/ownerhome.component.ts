import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm!:FormGroup;
  //endPoint:string;
  ownerData : any;
  validUser:boolean=false;

  constructor(private router:Router,
    private fb:FormBuilder,
    private commonApiCallService:CommonApiCallService){

  }
  
back()
{
  this.router.navigateByUrl('home');
}
  login(){
    this.router.navigateByUrl('owner/ownersignup');
  }
  

}
