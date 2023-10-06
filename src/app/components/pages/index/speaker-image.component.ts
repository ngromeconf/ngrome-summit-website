import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Timeline, timelineItems } from './timeline/timeline';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-speaker-image',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="mb-16">
    <!-- Code block starts -->

    <div class="container flex justify-center mx-auto pt-16">
      <h1 class="text-3xl font-semibold text-white capitalize lg:text-4xl">
        Featured
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
          >Speaker</span
        >
      </h1>
    </div>
    <div class="w-full px-10 pt-10">
      <div class="container mx-auto">
        <div
          role="list"
          aria-label="Behind the scenes People "
          class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <div
            role="listitem"
            class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            *ngFor="let speaker of speakers$ | async"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-20 w-full flex justify-center">
                <div class="h-32 w-32">
                  <img
                    src="{{speaker.speakerImage}}"
                    alt="Display Picture of Andres Berlin"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="px-6 mt-16">
                <h1 class="font-bold text-3xl text-center mb-1">
                  {{speaker.speaker}}
                </h1>
                <p class="text-gray-800 text-sm text-center">
                  {{speaker.jobTitle}}
                </p>
                <p class="text-center text-gray-600 text-base pt-3 font-normal invisible hidden md:visible md:block">
                  {{speaker.description}}
                </p>
                <div class="w-full flex justify-center pt-5 pb-5">
                  <a *ngIf="speaker.githubUrl" href="{{speaker.githubUrl}}" target="_blank" class="mx-5">
                    <div aria-label="Github" role="img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                      >
                        <path
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a *ngIf="speaker.twitterUrl" href="{{speaker.twitterUrl}}" class="mx-5">
                    <div aria-label="Twitter" role="img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter"
                      >
                        <path
                          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `,
  styles: [],
})
export class SpeakerImageComponent {

  public speakers$: Observable<timelineItems[]>;
  constructor(private http:HttpClient){ 
    this.getSpeakers();
  }
  getSpeakers() {
    this.speakers$ = this.http.get<timelineItems[]>('/api/v1/speakers-list');
  }

}
