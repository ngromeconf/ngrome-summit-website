import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface SponsorInterface {
  name: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="mt-36 lg:mt-44">
    <ul
      role="list"
      class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
    >
      <li *ngFor="let item of mainSponsor">
        <span
          class="whitespace-nowrap rounded-full bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 px-2.5 py-0.5 text-sm text-white uppercase"
        >
          Main sponsor
        </span>
        <ul role="list" class="flex flex-col items-center sm:flex-row">
          <li class="flex place-content-center">
            <div
              class="relative block overflow-hidden bg-white w-10/12 shadow-lg rounded-lg text-center p-8"
            >
              <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"
              ></span>
              <a [href]="item.url" target="_blank">
                <img
                  [alt]="item.name"
                  loading="lazy"
                  width="658"
                  height="140"
                  decoding="async"
                  data-nimg="1"
                  style="color:transparent"
                  [src]="item.image"
                />
              </a>
            </div>
          </li>
        </ul>
      </li>
    </ul>

    <ul
      role="list"
      class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
    >
      <li *ngFor="let item of goldSponsors">
        <span
          class="whitespace-nowrap rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 px-2.5 py-0.5 text-sm text-white uppercase"
        >
          gold sponsor
        </span>
        <ul
          role="list"
          class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
        >
          <li class="flex place-content-center">
            <div
              class="relative block overflow-hidden bg-white w-6/12 shadow-lg rounded-lg text-center p-8"
            >
              <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600"
              ></span>
              <a [href]="item.url" target="_blank">
                <img
                  [alt]="item.name"
                  loading="lazy"
                  width="658"
                  height="140"
                  decoding="async"
                  data-nimg="1"
                  style="color:transparent"
                  [src]="item.image"
                />
              </a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul
      role="list"
      class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
    >
      <li *ngFor="let item of silverSponsor">
        <span
          class="whitespace-nowrap rounded-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 px-2.5 py-0.5 text-sm text-white uppercase"
        >
          silver sponsor
        </span>
        <ul
          role="list"
          class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
        >
          <li class="flex place-content-center">
            <div
              class="relative block overflow-hidden bg-white w-5/12 shadow-lg rounded-lg text-center p-8"
            >
              <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500"
              ></span>
              <a [href]="item.url" target="_blank">
                <img
                  [alt]="item.name"
                  loading="lazy"
                  width="658"
                  height="140"
                  decoding="async"
                  data-nimg="1"
                  style="color:transparent"
                  [src]="item.image"
              /></a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>`,
  styleUrls: ['./sponsors.component.css'],
})
export class SponsorsComponent {
  public mainSponsor: SponsorInterface[] = [
    {
      name: 'Microsoft',
      image: './sponsors/Microsoft-logo.svg',
      url: 'https://microsoft.com',
    },
  ];

  public goldSponsors: SponsorInterface[] = [
    {
      name: 'Key Partner',
      image: './sponsors/KeyPartner-logo.svg',
      url: 'https://www.keypartner.com/',
    },
    {
      name: 'ICT Group',
      image: './sponsors/ict-group-logo.svg',
      url: 'https://ict-group.it/',
    },
  ];
  public silverSponsor: SponsorInterface[] = [
    {
      name: 'Fervento',
      image: './sponsors/fervento-logo.svg',
      url: 'https://fervento.com',
    },
  ];
}
