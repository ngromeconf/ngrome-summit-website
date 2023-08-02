import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: ` <!--Footer-->
    <div class="w-full pt-16 pb-12 text-sm text-center md:text-left fade-in">
      <a class="text-gray-500 no-underline hover:no-underline" href="#"
        >&copy; SATYRICON FACTORY LTD - All Rights Reserved.</a
      >
    </div>`,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
