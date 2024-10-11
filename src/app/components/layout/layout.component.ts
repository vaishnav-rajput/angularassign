import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/class/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isLoggedIn : boolean = false;
   
  router = inject(Router)

  // constructor(private userService = UserService){}
  userService = inject(UserService);


  ngOnInit(){
    this.updateAuthState();
  }

  updateAuthState(){
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  handleAuth(){
    if(this.isLoggedIn){
      this.userService.clearToken;
      this.isLoggedIn = false;
      this.router.navigate(['login'])

    } else{
      this.router.navigateByUrl('login')
    }
  }
}
