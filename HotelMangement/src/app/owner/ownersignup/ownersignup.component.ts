import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  //[x: string]: any;
  journey!:string;
  signUpForm!:FormGroup;
  postResponse:any;
  constructor(private fb:FormBuilder,
    private router:Router,
    private apiCallService:CommonApiCallService,
    private commonService:CommonService){}
   
  ngOnInit(){
    this.journey = this.commonService.journey;
    console.log('this.journey',this.journey);

      this.FormDetails();
    }

    FormDetails()
    {
      this.signUpForm = this.fb.group({
        name:['',[]],
        email:['',[]],
        mobile:['',[]],
        password:['',[]],
        gender:['',[]],
      })
    }
    submit(){
      let request={
        UserName : this.signUpForm.value.name,
        Email: this.signUpForm.value.email,
        mobile: this.signUpForm.value.mobile,
        Password: this.signUpForm.value.password,
        Gender:this.signUpForm.value.gender
      }
      this.apiCallService.postApiCall(this.journey,request).subscribe(resp=>{
        console.log(resp);
      })

      //if(this.postResponse){
        this.router.navigateByUrl('owner/ownersucess');
        //}


      }
    back()
    {
      this.router.navigateByUrl('owner/ownerHome');
    }
  }

