import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
  	if(user.name == undefined || user.mName == undefined|| user.lName == undefined|| 
           user.userame == undefined ||  user.email == undefined || user.password == undefined 
           || user.passwordvalidate == undefined )
      {
  		  return false
  		}
  			else {
	  		return true
  		}
	}
  
  validateEmail(email){
 	  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

  validateLogin(user){
    if(!user.username || !user.password && user.password != user.passwordvalidate)
      return false
    else  
      return true
  }
}

