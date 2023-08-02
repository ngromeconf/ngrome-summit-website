import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-moore',
  standalone: true,
  imports: [CommonModule],
  template: `<a
    [href]="goToUrl"
    target="_blank"
    class="inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-gray-100 rounded-full hover:underline hover:bg-red-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </a>`,
  styleUrls: ['./button-moore.component.css'],
})
export class ButtonMooreComponent {
  @Input() goToUrl: string = '';
}
