import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTicketComponent } from '../../../../shared/ui/button-ticket/button-ticket.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section
      class="relative bg-[url('/browser_photo.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 bg-transparent from-black/95 to-black/25 bg-gradient-to-r bg-gradient-to-l"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
          <h1
            class="my-4 text-3xl md:text-5xl text-white font-semibold leading-tight text-left"
          >
            December 1st, 2023
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl/relaxed text-left">
            This year's conference will take place on
            <strong class="text-white">December 1st, 2023</strong>, in
            <strong class="text-white">Rome, Italy</strong>.<br />
            <strong class="text-white">NGRome</strong>&nbsp;<span
              class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
              >Summit</span
            >
            is the perfect place to learn new skills, network with other
            developers, and get inspired. The summit features a wide range
            of topics, including: Web development, Mobile development, DevOps, Security and Soft Skills.
          </p>

          <div class="mt-8 flex flex-wrap gap-4 justify-items-center">
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
