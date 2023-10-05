import { Component } from '@angular/core';
import { FooterComponent } from '../shared/ui/footer/footer.component';
import { HeroComponent } from '../components/pages/index/hero/hero.component';
import { FeaturesComponent } from '../components/pages/index/features/features.component';
import { TimelineComponent } from '../components/pages/index/timeline/timeline.component';
import { SponsorsComponent } from '../components/shared/sponsors/sponsors.component';
import { CommunityPartnerComponent } from '../components/shared/community-partner/community-partner.component';
import { MapsComponent } from '../shared/ui/maps/maps.component';
import { CallForPaperComponent } from '../components/pages/index/call-for-paper/call-for-paper.component';
import { SpeakerImageComponent } from "../components/pages/index/speaker-image.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-hero />
    <app-sponsors />
    <app-features />
    <app-speaker-image />
    <app-maps />
    <app-timeline />
    <app-community-partner />
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
    imports: [
        FooterComponent,
        HeroComponent,
        FeaturesComponent,
        TimelineComponent,
        SponsorsComponent,
        CommunityPartnerComponent,
        MapsComponent,
        CallForPaperComponent,
        SpeakerImageComponent
    ]
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
