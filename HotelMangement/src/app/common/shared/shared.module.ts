import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  exports : [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
