import { TestBed, waitForAsync } from '@angular/core/testing';
import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({selector: 'app-employee-list', template: ''})
class EmployeeListComponent {
}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmployeeListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
