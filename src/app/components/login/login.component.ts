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

  userObj : User = new User()

  router = inject(Router)

  onLogin(){
    this.userService.loginUser(this.userObj).subscribe((res: any) => {
      if(res.access_token){
        alert("user logged in")
        localStorage.setItem("userToken", JSON.stringify(res.access_token))

        this.router.navigateByUrl('/home')
        this.userObj = new User()

      } else {
        alert(res.message)
      }
    }
  )
    
  }
}
