import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    pwd: new FormControl(''),
  });



}
