import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string = '';
  constructor(private router: Router,private acRoute:ActivatedRoute) { }
  ngOnInit(): void {
  this.username = this.acRoute.snapshot.queryParamMap.get('username');
  }
  //back button click
  redirectPage(){
    this.router.navigate(['/login']);
  }

}
