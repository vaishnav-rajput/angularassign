import { Component, inject } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Router } from '@angular/router';
import { User } from 'src/app/model/class/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userService = inject(UserService)

  userObj : User = new User();
  // token!: string ;

  router = inject(Router)

  onLogin(){
    this.userService.loginUser(this.userObj).subscribe(
      (res: any) => {
      if(res.access_token){
        alert("user logged in");
        // localStorage.setItem("token", res.access_token)
        this.userService.setToken(res.access_token)
        console.log("the token set to ", res.access_token)
        // this.token = res.access_token;
        this.router.navigateByUrl('/home');
        this.userObj = new User();
      } 
    },(error) => {
      console.error('An error occurred: ', error);
    }
  )
    
  }
}
