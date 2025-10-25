import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export type UserRole = 'employee' | 'student' | 'administrator';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {
  private apiUrl = 'https://tvoj-backend-api.com'; // zamijeni sa svojim endpointom

  constructor(private http: HttpClient) {
    this.http.get<{email:string, role:string}>('http://localhost:5000/api/authget')
      .subscribe({
        next:res=>console.log('User info:',res),
        error:err=>console.error(err)
      });

  }
  logout():Observable<any>{
    return this.http.post('$this.apiUrl}/authlogout',{})
  };
  // Login
  login(email: string, password: string): Observable<{ token: string, role: UserRole }> {
    return this.http.post<{ token: string, role: UserRole }>(
      `${this.apiUrl}/login`,
      { email, password }
    );
  }

  // Logout
  /*logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }*/

  // Spremi token i rolu
  setSession(token: string, role: UserRole) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  // Provjera ulogovanosti
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Role provjere
  isEmployee(): boolean {
    return localStorage.getItem('role') === 'employee';
  }

  isStudent(): boolean {
    return localStorage.getItem('role') === 'student';
  }

  isAdministrator(): boolean {
    return localStorage.getItem('role') === 'administrator';
  }

  // Dohvati token i rolu
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): UserRole | null {
    return localStorage.getItem('role') as UserRole | null;
  }
}
