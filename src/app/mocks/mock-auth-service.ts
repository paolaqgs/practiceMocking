import { AuthService } from "../service/auth.service";

export class MockAuthService extends AuthService{
    override authenticated = true; 

    override isAuthenticated(){
        return this.authenticated;
    }
}