import { Component } from '@angular/core';
import { FooterComponent } from '../shared/ui/footer/footer.component';
import { HeroComponent } from "../components/pages/index/hero/hero.component";
import { FeaturesComponent } from "../components/pages/index/features/features.component";
import { TimelineComponent } from "../components/pages/index/timeline/timeline.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    
      <app-hero />
      <app-features />
      <app-timeline />
    
  `,
    styles: [
        `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
    ],
    imports: [FooterComponent, HeroComponent, FeaturesComponent, TimelineComponent]
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
