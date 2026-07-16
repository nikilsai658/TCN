import { Component } from '@angular/core';
import { Login } from '../login/login';
import { RouterLink, RouterOutlet, } from "@angular/router";

@Component({
  selector: 'app-auth',
  imports: [Login, RouterLink, RouterOutlet],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {}
