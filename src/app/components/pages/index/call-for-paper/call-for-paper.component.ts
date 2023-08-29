import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-for-paper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-gray-900 ">
      <div
        class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
      >
        <h2
          class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
        >
          <span class="block">
            Are you a developer with something to share?
          </span>
        </h2>
        <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
          NGROME is looking for speakers to share their knowledge and experience
          with our community. If you have a great idea for a talk, we want to
          hear from you! Our conference is open to speakers of all levels of
          experience.<br>
          The deadline to apply is September 30, 2023.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <a
            href="https://forms.gle/DJd79VP5cuiJT4Nd6"
            target="_blank"
            class="bg-gradient-to-r mr-auto text-white from-red-600 via-pink-500 to-purple-600 hover:from-red-500 hover:to-purple-500 rounded shadow hover:shadow-lg py-2 px-4"
          >
            Submit your paper!</a
          >
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./call-for-paper.component.css'],
})
export class CallForPaperComponent {}
