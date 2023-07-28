import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { FooterComponent } from './shared/ui/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header class="sticky top-0 z-10 backdrop-blur-sm bg-black/50" />
    <div class="h-full">
      <!--Main-->
      
        <router-outlet></router-outlet>

        <!--Footer-->
        <div
          class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
        >
          <app-footer />
        </div>
    </div>
  `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `,
  ],
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {}
