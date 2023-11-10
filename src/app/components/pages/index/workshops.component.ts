import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 id="workshops" class="text-3xl font-semibold text-white capitalize lg:text-4xl">
        Full day
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
          >workshops</span
        >
      </h1>
      <div class="flex flex-wrap mb-6">
        <div class="p-4 lg:w-1/3">
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              class="w-full object-cover object-center"
              ngSrc="./workshop-alisa-duncan.jpg"
              width="700"
              height="400"
              alt="blog"
            />
            <div class="p-6 bg-white h-full">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
              November 30 2023
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                Staying safe and secure with Angular
              </h1>
              <p class="leading-relaxed mb-3 text-left hidden md:block">
                We love Angular because it’s a best-in-class web framework with
                top-notch features and capabilities. But did you know Angular
                also keeps your application safe and secure from web
                vulnerabilities? Security breaches can impact businesses
                financially and their reputation, so ensuring we’re following
                best security practices is essential.<br> The Open Web Application
                Security Project (OWASP) guides us by identifying the most
                common and impactful web vulnerabilities.
              </p>
              <div class="flex items-center flex-wrap ">
                <a
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  href="https://ti.to/ngrome-events/staying-safe-angular-with-alisa-duncan"
                  target="_blank"
                  >Get yout ticket
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
               
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              class="w-full object-cover object-center"
              ngSrc="./workshop-nggirls.jpg"
              width="700"
              height="400"
              alt="blog"
            />
            <div class="p-6 bg-white h-full">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
              November 30 2023
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                Build and deploy your very first Angular Web Application
              </h1>
              <p class="leading-relaxed mb-3 text-left hidden md:block">
              Are you a woman interested in learning how to build web applications with the latest technologies? We have good news for you: We are holding a one-day workshops for beginners!<br>
              During the workshop you will build and deploy your very first Angular Web Application! Angular is an open-source platform for building web application, developed by Google and the community. It provides various tools to easily create a dynamic, interactive app that can run on desktop browsers and mobile.
              </p>
              <div class="flex items-center flex-wrap">
                <a
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  href="https://www.ng-girls.org/event/rome-2023"
                  target="_blank"
                  >Register
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/3">
          <div
            cla3ss="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <img
              class="w-full object-cover object-center"
              ngSrc="./workshop-gerard-sans.jpg"
              width="700"
              height="400"
              alt="blog"
            />
            <div class="p-6 bg-white h-full">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
              December 4, 2023
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
              Generative AI Masterclass using MakerSuite, PaLM 2 and Angular
              </h1>
              <p class="leading-relaxed mb-3 text-left hidden md:block">
              In this full day training, you will learn how to leverage Google's new Generative AI platform using MakerSuite and PaLM APIs to build the next generation of AI-enabled Applications and powerful chatbots with Angular.
              The workshop is hands-on and practical, but we also give an overview of all the latest advancements and ideas.<br>
              Who is the target audience? Anyone who wants to experiment with cutting edge Generative AI into their apps or websites using Angular. No previous experience with artificial intelligence is necessary.
              </p>
              <div class="flex items-center flex-wrap ">
                <a
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  href="https://ti.to/ngrome-events/generative-ai-workshop-with-gerard-sans"
                  target="_blank"
                  >Get your ticket
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styles: [],
})
export class WorkshopsComponent {}
