import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {StatusService} from '../status.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  loginStatus = false;
  username = 'samujwala';
  password = 'testtest';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private statusService: StatusService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['samujwala', Validators.required],
      password: ['testtest', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get fc() {
    return this.loginForm.controls;
  }
//form submit event
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
   setTimeout(()=>{
      this.authenticationService.login(this.fc.username.value, this.fc.password.value)
        .subscribe(
          data => {
            this.loginStatus = true;
            this.statusService.success('login successful',true);
            this.authenticationService.setLoginStatus(this.loginStatus);
            this.router.navigate(['/home']).then(r => console.log(r));
          },
          error => {
            this.statusService.error('Error Occurred',true);
            this.loading = false;
          });
    }, 2000);

  }
  //clear form control values
  onReset(){
    this.loginForm.reset();
  }

}
