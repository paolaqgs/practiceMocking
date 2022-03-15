import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAuthService } from '../mocks/mock-auth-service';
import { AuthService } from '../service/auth.service';

import { LoginComponent } from './login.component';
//import { MockAuthService } from '../mocks/mock-authservice';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    //authService = new MockAuthService();
    authService = new AuthService();
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = new LoginComponent(authService);
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true when user is not authenticated aka needs login', () => {
    let spyAuthenticated = spyOn(authService,"isAuthenticated").and.returnValue(false);
    //authService.authenticated = false;
    expect(component.needsLogin()).toBeTruthy(); // == toBe(true)
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('should return false when user authenticated', () =>{
    let spyAuthenticated = spyOn(authService,"isAuthenticated").and.returnValue(true);
    //authService.authenticated = true;
    expect(component.needsLogin()).toBeFalsy(); // ==toBe(false)
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
