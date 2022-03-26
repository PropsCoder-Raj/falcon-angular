import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public title: Title, public appC: AppComponent) {
    title.setTitle("Login | " + appC.title);
  }

  ngOnInit(): void {
  }

}
