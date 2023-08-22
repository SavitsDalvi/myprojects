import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm!:FormGroup;
   endPoint!:string;
   ownerData : any;
  // validUser:boolean=false;
  // forgetPasswordForm!: FormGroup;
  // showForgetPasswordForm: boolean=false;
  // forgotPassword:boolean = false;
  // userName!:string;

  constructor(private router:Router,private fb:FormBuilder,
    private commonApiCallService:CommonApiCallService,
    private commonService:CommonService){}
//     private commonApiCallService:CommonApiCallService,
//     ){
// }
ngOnInit(){
  this.endPoint = this.commonService.journey;
//   this.endPoint=this.commonService.journey;  
//   this.forgotPassword =this.commonService.forgotPassword;
//   this.userName =this.commonService.userName;
  console.log('endPoint..',this.endPoint);
  this.loginFormDetails();
//   this.getOwnerApiData();
 }

loginFormDetails()
{
  this.loginForm= this.fb.group({
    userName:[],
    password:[]
  })
}
// forgoPasswordFormDetails()
// {
//   this.forgetPasswordForm = this.fb.group({
//     newPassword: [],
//     confirmPassword:[]
// })
// }
  login(){
    console.log(this.loginForm.value)
    this.getOwnerApiData();
    //this.router.navigateByUrl('owner/ownersucess');
  }
  getOwnerApiData(){
    this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
       this.ownerData = getOwnerResponse;
     });
  }

//     console.log(this.loginForm.value);
//     if(this.loginForm.value.userName){
//       this.commonService.userName = this.loginForm.value.userName;
//     }

//     if (this.ownerData){
//       this.ownerData.find((ownerData: any) =>{
//         if (ownerData.UserName ===this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password){
//           this.validUser = true;
//         }
//       });
//     if(this.validUser){
//     this.router.navigateByUrl('owner/ownersucess');
//   }
//   else{
//     this.commonService.warningToaster('Password is incorrect','Warning',{
//       timeOut: 10000,
//       positionClass:'toast-top-center'})
//       this.commonService.forgotPassword = true;
//       this.router.navigateByUrl('owner/ownerHome');
//     }
//   }
//   }
  back()
  {
    this.router.navigateByUrl('home');
  }}
//   async getOwnerApiData(){
//     // this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
//     //   this.ownerData = getOwnerResponse;
//     // })
//     this.ownerData = await this.commonApiCallService.getApiCall(this.endPoint).toPromise()
//     console.log('this.ownerData',this.ownerData);

//   }

//   // isValidUser(){
//   //   this.ownerData.forEach((ownerData:any)=>{
//   //     if(ownerData.UserName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
//   //       this.validUser = true;
//   //     }     
//   //   });
//   // }
// forgetPassword(){
//   this.showForgetPasswordForm =!this.showForgetPasswordForm;
//   this.forgoPasswordFormDetails();
// }
// Submit()
// {
//   this.updatePassword();
//   this.showForgetPasswordForm =!this.showForgetPasswordForm;
//   this.forgotPassword = false;
// }
// async updatePassword(){
//   var user: any;
//   this.ownerData.forEach((data: any) =>{
//     if(data.UserName === this.userName){
//       user = data;

//     }
//   })
//   if(user){
//     let request ={
//       Password: this.forgetPasswordForm.value.newPassword
//     }
//     // this.commonApiCallService.patchApiCall(this.endPoint,request,user.id ).subscribe((respo:any)=>{
//       //   console.log(respo);
//       // })
//       await this.commonApiCallService.patchApiCall(this.endPoint, request, user.id).toPromise()
   
//     }
//     else{
//       alert('user is not exist')
//     }
//   }
// }

