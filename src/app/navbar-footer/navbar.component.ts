import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDropdownOpen = false;

  constructor(private router: Router) { }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
  onLogout() {
    // Handle logout logic here, e.g., clearing user data from storage, etc.
    console.log('User logged out');
    this.isDropdownOpen = false;
    this.router.navigate(['/signin']);
  }
}
