import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { TIMELINE, Timeline } from './timeline';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimePipe],
  template: `<section>
    <div class="text-white py-8">
      <div
        class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24"
      >
        <div
          class="flex flex-col w-full items-center justify-between place-content-center sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
        >
          <p class="ml-2 text-red-600 uppercase tracking-loose">
            SUMMIT AGENDA
          </p>
          <p
            class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2"
          >
            One track, one love
          </p>
          <p class="text-sm md:text-base text-gray-50 mb-4">
            One day with experts and passionate about Angular
          </p>
          <a
            href="#"
            class="bg-gradient-to-r mr-auto text-white from-red-600 via-pink-500 to-purple-600 hover:from-red-500 hover:to-purple-500 rounded shadow hover:shadow-lg py-2 px-4"
          >
            Explore full agenda</a
          >
        </div>
        <div class="ml-0 w-full md:ml-12 lg:w-2/3 sticky">
          <div class="container mx-auto w-full h-full">
            <div class="relative wrap overflow-hidden p-10 h-full">
              <div
                class="border-2-2 border-red-555 absolute h-full border"
                style="right: 50%; border: 2px solid #fff; border-radius: 1%;"
              ></div>
              <div
                class="border-2-2 border-red-555 absolute h-full border"
                style="left: 50%; border: 2px solid #fff; border-radius: 1%;"
              ></div>
              <ng-container
                *ngFor="let agenda of agendaItems.agenda; index as i"
              >
                <div
                  class="mb-4 flex justify-between items-center w-full"
                  [ngClass]="{
                    'flex-row-reverse left-timeline': i % 2 === 0,
                    'right-timeline': i % 2 === 1
                  }"
                >
                  <div class="order-1 w-5/12"></div>
                  <div
                    class="order-1 w-5/12 px-1 py-2 text-right"
                    [ngClass]="{
                      'text-right': i % 2 === 0,
                      'text-left': i % 2 === 1
                    }"
                  >
                    <p class="mb-2 text-base text-red-600">
                      {{ i | timePipe }}
                    </p>
                    <h4 class="mb-2 font-semibold text-lg md:text-2xl">
                      {{ agenda.title }}
                    </h4>
                  </div>
                </div>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  public agendaItems: Timeline = TIMELINE;
}
