import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  private subscription: Subscription;
  message: any;
  showMsg:boolean = false;
  constructor(private statusService: StatusService) { }
  ngOnInit() {
    this.subscription = this.statusService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
