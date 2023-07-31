import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="mt-36 lg:mt-44">
    <p class="text-3xl font-semibold text-white capitalize lg:text-4xl ">
      MAIN SPONSOR
    </p>
    <ul
      role="list"
      class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
    >
      <li>
        <ul
          role="list"
          class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
        >
          <li class="flex place-content-center">
            <div class="bg-white w-10/12 shadow-lg rounded-lg text-center p-8 mt-8">
              <img
                alt="Transistor"
                loading="lazy"
                width="658"
                height="140"
                decoding="async"
                data-nimg="1"
                style="color:transparent"
                src="/sponsors/Microsoft_logo.svg"
              />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>`,
  styleUrls: ['./sponsors.component.css'],
})
export class SponsorsComponent {}
