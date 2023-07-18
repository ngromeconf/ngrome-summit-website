import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: ` <div
      class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->

      <div
        class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
      >
        <h1
          class="my-4 text-3xl md:text-5xl text-white font-bold leading-tight text-center md:text-left"
        >
          NGRome
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
          >
            Summit
          </span>
          is taking place in Rome!
        </h1>
        <p
          class="leading-normal text-gray-300 md:text-2xl mb-8 text-center md:text-left"
        >
          Whether you are a beginner, intermediate, or an expert, this will be
          the best opportunity to learn about the latest trends in the Angular
          world and web technologies.
        </p>

        <div class="flex items-center justify-between pt-4">
          <button
            class="bg-gradient-to-r from-red-600 via-pink-500 to-pink-700 hover:from-red-600 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
            type="button"
          >
            Get Your Ticket
          </button>
        </div>
      </div>

      <!--Right Col-->
      <div class="w-full xl:w-3/5 p-12 overflow-hidden">
        <img
          class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
          src="/browser_photo.png"
        />
      </div>
    </div>
   `,
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {}
