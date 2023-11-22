import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Observable } from 'rxjs';
import { Timeline } from '../models/timeline.models';
import { HttpClient } from '@angular/common/http';
import { TimePipe } from '../components/pages/index/timeline/time.pipe';

@Component({
  selector: 'app-agenda.page',
  standalone: true,
  template: `
    <div class="p-4 mt-4">
      @if (agendaItems$ | async; as agendaItems) {
      <div class="container">
        <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
          @for (agenda of agendaItems.agenda; track $index) {
          <div class="flex md:contents">
            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-white pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow text-center"
              ></div>
            </div>
            <div
              class="bg-white col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
            >
              <h3 class="font-semibold text-lg mb-1 text-black">
                {{ agenda.speaker }}
              </h3>
              <h3 class="font-semibold text-xl mb-1 text-black">
                {{ agenda.title }}

              </h3>
              <h3 class="font-normal text-md mb-1 text-black">
                {{ agenda.description }}
              </h3>
              <p class="leading-tight text-justify w-full text-black">
              @if (agenda.svgIcon) {  
              <img [ngSrc]="agenda.svgIcon" width="30" height="30"/>
              }
                {{ $index | timePipe : agendaItems }}
              </p>
            </div>
          </div>
          }
        </div>
      </div>
      } @else {
      <p>No data found</p>
      }
    </div>
  `,
  styles: ``,
  imports: [CommonModule, TimePipe, NgOptimizedImage],
})
export default class AgendaComponent {
  public agendaItems$: Observable<Timeline>;

  constructor(private http: HttpClient) {
    this.getSpeakers();
  }

  getSpeakers() {
    this.agendaItems$ = this.http.get<Timeline>('/api/v1/timeline');
  }

  updateAgenda() {}
}
