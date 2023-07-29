import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {
  HotelRegistrationForm!:FormGroup;
  constructor( private router:Router){}
  back(){
    this.router.navigateByUrl('/owner/ownerHome')
  }
  submitDetails(){
    this.router.navigateByUrl('owner/ownerSuccess');
  }


}
