import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { COMMUNITIES, Communities } from './communities';

@Component({
  selector: 'app-community-partner',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pt-12 pb-8 mx-auto lg:pb-16">
      <p
        class="text-3xl pb-8 md:text-4xl font-semibold text-red-600 leading-normal md:leading-relaxed mb-2"
      >
        COMMUNITY PARTNERS
      </p>
      <div
        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
      >
        <a
          href="#"
          class="flex items-center lg:justify-center"
          *ngFor="let community of communities"
        >
          <img
            [ngSrc]="community.logoUrl"
            [alt]="community.name"
            fetchpriority="low"
            height= "400"
            width="400"
          />
        </a>
      </div>
    </div>
  </section>`,
  styleUrls: ['./community-partner.component.css'],
})
export class CommunityPartnerComponent {
  public communities: Communities = COMMUNITIES;
}
