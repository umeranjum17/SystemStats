import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ElectronService}from "app/core/services"
import { electron } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private electronService:ElectronService) { 
   
  }

  ngOnInit(): void { 
  }

}
