import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTicketComponent } from '../../../../shared/ui/button-ticket/button-ticket.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section
      class="relative bg-[url('/browser_photo.png')] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 sm:bg-gradient-to-r sm:bg-gradient-to-l"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1
            class="my-4 text-3xl md:text-5xl text-white font-semibold leading-tight text-center md:text-left"
          >
            NGRome
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
            >
              Summit
            </span>
            ['December 1st', 2023]
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl/relaxed">
            Whether you are a beginner, intermediate, or an expert, this will be
            the best opportunity to learn about the latest trends in the Angular
            world and web technologies.
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <app-button-ticket />
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule, ButtonTicketComponent],
})
export class HeroComponent {}
