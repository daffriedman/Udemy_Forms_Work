import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //secretQuestion ="pet";
  secretQuestion ="teacher";
  title = 'FirstFormWork';
  suggestUserName() {
    const suggestedName = 'Superuser';
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
