import { defineEventHandler } from 'h3';
import { Timeline } from "src/app/models/timeline.models";

export default defineEventHandler(() => (timeline));

const timeline: Timeline = {
    startTime: new Date(2023, 11, 1, 8, 45),
    agenda: [
      {
        duration: 40,
        title: 'Registration Opening',
        svgIcon: 'icons/icon-ticket.svg'
      },
      {
        duration: 10,
        title: 'Opening Remarks',
        speaker: 'NGRome Team',
        svgIcon: 'icons/icon-opening.svg'
      },
      {
        duration: 40,
        title: 'Quo vadis, Angular?',
        speaker: 'Pawel Kozlowski',
        description: 'This year, people have noticed something interesting is happening with Angular. The pace of feature development has taken off, and the framework seems to be moving forward by leaps and bounds! What’s going on? More importantly - how all those new features fit together into the cohesive story? This talk is the overview of the recent changes in Angular, the larger philosophy behind those changes as well as the glimpse into the future work.',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 25,
        title: 'NgRx SignalStore - Journey from Vision to First Release',
        speaker: 'Marko Stanimirović',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 20,
        title: 'Panel with Pawel Kozlowski, Marko Stanimirović',
        svgIcon: 'icons/icon-panel.svg'
      },
      {
        duration: 45,
        title: 'Coffee Break',
        svgIcon: 'icons/icon-tabler-coffee.svg'
      },
      
      {
        duration: 25,
        title: 'Better Angular Architectures with Standalone Components, Signals, Nx, & Co',
        speaker: 'Fabian Gosebrink',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 20,
        title: 'Harnessing the Power of Signals in Angular Applications',
        speaker: 'Mateusz Stefańczyk',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 20,
        title: 'ELI5 Angular Hydration',
        speaker: 'Soumaya Erradi',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 20,
        title: 'Panel with Fabian Gosebrink, Mateusz Stefańczyk, Soumaya Erradi',
        svgIcon: 'icons/icon-panel.svg'
      },
      {
        duration: 80,
        title: 'Networking & Lunch',
        svgIcon: 'icons/icon-pizza.svg'
      },
      {
        duration: 25,
        title: 'Implement the backend of your application with Azure Functions, NodeJS!',
        speaker: 'Massimo Bonanni',
        svgIcon: 'icons/icon-microphone.svg'
      },
      
      {
        duration: 25,
        title: 'There\'s Safety in Angular',
        speaker: 'Alisa Duncan',
        svgIcon: 'icons/icon-microphone.svg'
      },
      
      {
        duration: 25,
        title: 'Building Bard from scratch with MakerSuite and PaLM API',
        speaker: 'Gerard Sans',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 20,
        title: 'Panel with Massimo Bonanni, Alisa Duncan, Gerard Sans',
        svgIcon: 'icons/icon-panel.svg'
      },
      {
        duration: 30,
        title: 'Coffee Break',
        svgIcon: 'icons/icon-tabler-coffee.svg'
      },
      {
        duration: 25,
        title: 'All Roads Lead to Rome: Building an Empowered Product Team',
        speaker: 'Giuseppe Ettorre',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 15,
        title: 'Go Dynamic with Reactive Forms',
        speaker: 'Davide Passafaro',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 40,
        title: 'The era of Angular intelligent apps, with Azure Open AI',
        speaker: 'Natalia Venditto',
        svgIcon: 'icons/icon-microphone.svg'
      },
      {
        duration: 20,
        title: 'Panel with Giuseppe Ettorre, Davide Passafaro, Natalia Venditto',
        svgIcon: 'icons/icon-panel.svg'
      },
      {
        duration: 10,
        title: 'Closing Remarks',
        speaker: 'NGRome Team'
      },
    ],
  }