import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-ticket',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex m-2 justify-between pt-4 z-index-10 " [ngClass]="{'fixed bottom-10 right-10': scrolled}">
      <a
        
        class="bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        type="button"
        href="https://ngrome.io/"
        target="_blank"
      >
        GO TO 2024 EDITION
      </a>
    </div>
  `,
  styleUrls: ['./button-ticket.component.css'],
})
export class ButtonTicketComponent {


  scrolled = false;
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
  
    const numb = window.scrollY;
    if (numb >=500){
      this.scrolled = true;
    }
    else {
      this.scrolled = false;
    }
  }

}
