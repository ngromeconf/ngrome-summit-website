import { defineEventHandler } from 'h3';
import { Timeline } from "src/app/models/timeline.models";

export default defineEventHandler(() => (timeline));

const timeline: Timeline = {
    startTime: new Date(2023, 11, 1, 8, 45),
    agenda: [
      {
        duration: 50,
        title: 'Registration',
      },
      {
        duration: 10,
        title: 'Opening Remarks',
      },
      {
        duration: 40,
        title: 'Quo vadis, Angular?',
        speaker: 'Pawel Kozlowski',
      },
      {
        duration: 25,
        title: 'NgRx SignalStore - Journey from Vision to First Release',
        speaker: 'Marko Stanimirović',
      },
      {
        duration: 25,
        title: 'Panel',
      },
      
      
      {
        duration: 40,
        title: 'Coffee Break',
      },
      {
        duration: 10,
        title: 'ELI5 Angular Hydration',
        speaker: 'Soumaya Erradi'
      },
      {
        duration: 20,
        title: 'Implement the backend of your application with Azure Functions, NodeJS!',
        speaker: 'Massimo Bonanni',
      },
      {
        duration: 25,
        title: 'Talk',
        speaker: '',
      },
      {
        duration: 25,
        title: 'Panel',
      },
      {
        duration: 80,
        title: 'Networking & Lunch',
      },
      {
        duration: 10,
        title: 'Harnessing the Power of Signals in Angular Applications',
        speaker: 'Mateusz Stefańczyk',
      },
      {
        duration: 25,
        title: 'There\'s Safety in Angular',
        speaker: 'Alisa Duncan',
      },
      {
        duration: 20,
        title: 'Lightning talk',
        speaker: 'Davide Passafaro',
      },
      {
        duration: 25,
        title: 'Panel',
      },
      {
        duration: 40,
        title: 'Coffee Break',
      },
      {
        duration: 25,
        title: 'All Roads Lead to Rome: Building an Empowered Product Team',
        speaker: 'Giuseppe Ettorre',
      },
      {
        duration: 25,
        title: 'Building Bard from scratch with MakerSuite and PaLM API',
        speaker: 'Gerard Sans'
      },
      {
        duration: 40,
        title: 'The era of Angular intelligent apps, with Azure Open AI',
        speaker: 'Natalia Venditto',
      },
      {
        duration: 10,
        title: 'Closing Remarks',
      },
    ],
  }