import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {
setEmail = "dan@aol.com";
subscription = "Advanced"
setPassword = "DAF";
forFillForm = {
email:"",
subscription: "",
password: ""
}
wasSubmitted = false;
@ViewChild('secondForm', {static:true} ) fillForm: NgForm
  constructor() { }

  ngOnInit() {
  }
  submitSecondForm(form:NgForm){
    console.log(form);
    this.wasSubmitted = true;
    this.forFillForm.email = this.fillForm.value.data.emailform2;
    this.forFillForm.subscription = this.fillForm.value.subscription;
    this.forFillForm.password = this.fillForm.value.password;
    this.fillForm.reset();
  }

}
