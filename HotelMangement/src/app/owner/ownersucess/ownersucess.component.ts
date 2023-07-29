import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersucess',
  templateUrl: './ownersucess.component.html',
  styleUrls: ['./ownersucess.component.scss']
})
export class OwnersucessComponent {
  constructor(private router:Router){
    
  }
  hotelRegistration(){
this.router.navigateByUrl('owner/newhotelregi');
  }

}
