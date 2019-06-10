import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'app/login/login-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: LoginServiceService) { }

  private showNavBar: boolean = false

  ngOnInit() {
    this.authService.showNavBarEmitter.subscribe(
      (mode: boolean) => {
        if (mode !== null) {
          this.showNavBar = mode
        }
      }
    )
  }

  isAuth() {
    return this.authService.isAuthenticated()
  }

  onLogout() {
    this.authService.logout()
  }

}
