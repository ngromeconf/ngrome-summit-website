import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTicketComponent } from "../../../../shared/ui/button-ticket/button-ticket.component";

@Component({
    selector: 'app-hero',
    standalone: true,
    template: ` <div
      class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->

      <div
        class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
      >
        <h1
          class="my-4 text-3xl md:text-5xl text-white font-semibold leading-tight text-center md:text-left"
        >
          NGRome
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
          >
            Summit
          </span>
          [December 1, 2023]
        </h1>
        <p
          class="leading-normal text-gray-300 md:text-2xl mb-8 text-center md:text-left"
        >
          Whether you are a beginner, intermediate, or an expert, this will be
          the best opportunity to learn about the latest trends in the Angular
          world and web technologies.
        </p>

        <app-button-ticket />
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
    imports: [CommonModule, ButtonTicketComponent]
})
export class HeroComponent {

  
  
}
