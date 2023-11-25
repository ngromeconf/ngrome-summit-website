import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Observable } from 'rxjs';
import { Timeline } from '../models/timeline.models';
import { HttpClient } from '@angular/common/http';
import { TimePipe } from '../components/pages/index/timeline/time.pipe';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  meta: [
    {
      name: 'description',
      content: 'Here you can check the full agenda of 1 Dec 2023',
    },
    {
      name: 'author',
      content: 'NGRome Team',
    },
    {
      property: 'og:title',
      content: 'NGRome Summit Agenda',
    },
    {
      property: 'og:description',
      content: 'Here you can check the full agenda of 1 Dec 2023',
    },
    {
      property: 'og:image',
      content: 'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxiii%2Fspeakers-list.jpg?alt=media&token=563bf3e3-b086-4847-982d-6c299b9814b4',
    },
  ],
};

@Component({
  selector: 'app-agenda.page',
  standalone: true,
  template: `
    <section class="text-white">
      <div class="container mx-auto flex flex-col p-6">
        <h2 class="py-4 text-5xl font-bold text-center">NGRome Summit Agenda</h2>
        <div class="divide-y divide-gray-700">
          @if (agendaItems$ | async; as agendaItems) {
            @for (agenda of agendaItems.agenda; track $index) {
          <div
            class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div
              class="flex items-center justify-center lg:col-span-1 col-span-full"
            >
              @if (agenda.type === 'activity') {
                <img ngSrc="{{agenda.image}}" class="w-16 logo-img" width="100" height="100" />
              } @else {
                <img
                  ngSrc="{{agenda.image}}"
                  class="rounded-full"
                  width="200"
                  height="200"
                />
              }
            </div>
            <div
              class="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left"
            >
              <span class="text-lg tracki uppercase dark:text-violet-400"
                >{{ $index | timePipe : agendaItems }}</span
              >
              @if (agenda.speaker) { <span class="text-2xl md:text-5xl font-bold">{{agenda.speaker}}</span> }
              <span class="text-xl font-bold md:text-2xl"
                >{{agenda.title}} </span
              >
              <span class="mt-4 dark:text-gray-300"
                >{{agenda.description}}</span
              >
            </div>
          </div>
            }
          } 
          
          
        </div>
      </div>
    </section>
   
  `,
  styles: `.logo-img {
    fill: red;
  }`,
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
