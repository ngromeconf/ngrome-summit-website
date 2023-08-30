import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="mt-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-semibold text-white capitalize lg:text-4xl">
        Main sponsor and awesome
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
          >location</span
        >
      </h1>
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg"
          >
            <div class="px-4 flex-auto"></div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center mt-16">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
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
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
          </div>
          <h3 class="text-3xl mb-2 font-semibold text-white leading-normal">
            Microsoft HQ Roma
          </h3>
        </div>
        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-pink-500"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11893.301387767895!2d12.4587945!3d41.8212919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258b3c68c87603%3A0x6f408f20a8cbe525!2sMicrosoft!5e0!3m2!1sit!2sit!4v1691055519409!5m2!1sit!2sit"
              width="100%" height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent {}
