import { ValidateService } from '../../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng2Bs3ModalModule, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  name: String;
  mName: String;
  lName: String;
  username: String;
  email: String;
  password: String;
  passwordvalidate: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
   ) { 
  }

  ngOnInit() {
  }


  @ViewChild('myFirstModal')
  modal1: ModalComponent;

  onRegisterSubmit() {

  	const user = {
  		name: this.name,
      mName: this.mName,
      lName: this.lName,
  		username: this.username,
  		email: this.email,
  		password: this.password,
      passwordvalidate: this.passwordvalidate
  	}

  



  if(!this.validateService.validateRegister(user)){
	  this.flashMessage.show('Please fill in all fields', {cssClass : 'alert-danger', timeout: 3000})
  }

  if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show('Please enter a correct Email', {cssClass : 'alert-danger', timeout: 3000})
 		return false
  }

  this.authService.registerUser(user).subscribe(data =>{
    if(data.success){
      this.flashMessage.show('You are now registered, please check your e-mail to confirm and login!', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/register']);
    } else {
      this.flashMessage.show('Something went wrong, try again!', {cssClass: 'alert-danger', timeout: 3000});
      //this.router.navigate(['/register']);
    }
  })
 }
}