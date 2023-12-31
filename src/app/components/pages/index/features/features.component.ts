import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMooreComponent } from '../../../../shared/ui/button-moore/button-moore.component';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `<section>
    <div class="container mt-8 px-6 py-10 mx-auto">
      <h1 class="text-3xl font-semibold text-white capitalize lg:text-4xl">
        A full day <br />
        dedicated to
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
          >developers</span
        >
      </h1>

      <p class="mt-4 text-gray-100 xl:mt-6">
        We will have a flexible space that separates the presentation areas from
        the lounge. A dedicated Sponsor area and a lounge for free-time,
        collaboration, and getting in touch our close-knit community with over
        100 in person attendees .
      </p>

      <div
        class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
      >
        <div class="p-8 space-y-3 border-2 border-red-500 rounded-xl">
          <span class="inline-block text-white dark:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </span>

          <h1
            class="text-2xl font-semibold text-gray-100 capitalize dark:text-white"
          >
            COMMUNITY
          </h1>

          <p class="text-gray-200 dark:text-gray-300 pb-4">
            We love communities, and we are a community and a group of
            passionate devs, and enthusiastic developer that use the Angular
            framework. Our mission is to connect Italian developers to the
            global community. Fostering new relationships within Italy, and
            across borders. Simultaneously develop new skills and having moments
            of fun.
          </p>

          <!-- <app-button-moore /> -->
        </div>

        <div
          class="p-8 space-y-3 border-2 border-white-400 dark:border-red-300 rounded-xl"
        >
          <span class="inline-block text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </span>

          <h1
            class="text-2xl font-semibold text-gray-100 capitalize dark:text-white"
          >
            DIVERSITY
          </h1>

          <p class="text-gray-200 dark:text-gray-300 pb-4">
            We are running our Diversity Program, which provides individuals
            from underrepresented groups with support to attend NGRome
            editions.<br />
            We are very grateful and would like to say a big "Thank You" to the
            companies and individuals who donate to our Diversity Program.
          </p>

          <!-- <app-button-moore goToUrl="https://ngrome.io/diversity" /> -->
        </div>

        <div class="p-8 space-y-3 border-2 border-red-500 rounded-xl">
          <span class="inline-block text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </span>

          <h1
            class="text-2xl font-semibold text-gray-100 capitalize dark:text-white"
          >
            FUN
          </h1>

          <p class="text-gray-200 dark:text-gray-300 pb-4">
            NGRome
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
            >
              Summit
            </span>
            is not just a tech conference. It's also a fun and stimulating event
            for people who work in the tech industry. Here are some of the ways
            to have fun like participating in workshops, play games with our
            communities and sponsors and enjoy the food and drinks.
          </p>

          <!-- <app-button-moore /> -->
        </div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./features.component.css'],
  imports: [CommonModule, ButtonMooreComponent],
})
export class FeaturesComponent {}
