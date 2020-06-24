import { TestBed } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StatusService } from './status.service';

describe('StatusService', () => {
  let service: StatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule]
    });
    service = TestBed.inject(StatusService);
  });

 /* it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
