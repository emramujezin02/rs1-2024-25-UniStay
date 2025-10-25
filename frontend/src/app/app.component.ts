import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from './services/test.service';
import { MyAuthService } from './services/auth-services/my-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  message = '';

  // 👇 Dodajemo oba servisa i Router u konstruktor
  constructor(
    private testService: TestService,
    private authService: MyAuthService, // ✅ malo slovo 'a', isto kao što si ga definisala
    private router: Router
  ) {}

  ngOnInit(): void {
    this.testService.testBackend().subscribe({
      next: (data: any) => (this.message = data),
      error: (err: any) => (this.message = 'Greška u vezi s backendom!')
    });
  }

  // 👇 Logout metoda ide izvan konstruktora
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: (err: any) => console.error(err)
    });
  }
}
