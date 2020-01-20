import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) signupForm: NgForm
  //secretQuestion ="pet";
  secretQuestion ="teacher";
  answer = "";
  genders = ['male', 'female'];
  setGender = "male"
  title = 'FirstFormWork';
  suggestUserName() {
    const suggestedName = 'Daniel';
    //method to fill the the form with click of button
    //using the setvalue problem is that must setvalue of everything 
    //even if just a empty string.better to use the patchvalue see downnext
    //that allows setting seperate values do not need to set everything 
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email: 'da@gmail.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'yup',
    //   gender: 'male'
    // })
    
    this.signupForm.form.patchValue({
    //remember need to place it on the .form to work
      userData:{
        username:suggestedName
      }
    })
  }
  //THIS IS USING THE FORM METHOD
  onSubmit(form:NgForm){
    console.log(form);
   //console.error("no info");
    
  }
  //THIS IS USING THE VIEWCHILD
  //onSubmit(){
    ///console.log(this.signupForm);
    
 // }

    
}
