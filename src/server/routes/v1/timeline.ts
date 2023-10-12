import { defineEventHandler } from 'h3';
import { Timeline } from "src/app/models/timeline.models";

export default defineEventHandler(() => (timeline));

const timeline: Timeline = {
    startTime: new Date(2023, 11, 1, 8, 45),
    agenda: [
      {
        duration: 60,
        title: 'Registration',
      },
      {
        duration: 15,
        title: 'Opening Remarks',
      },
      {
        duration: 40,
        title: 'Opening Keynote ',
      },
      {
        duration: 25,
        title: 'NgRx SignalStore - Journey from Vision to First Release',
        speaker: 'Marko Stanimirović',
      },
      {
        duration: 10,
        title: 'ELI5 Angular Hydration',
        speaker: 'Soumaya Erradi'
      },
      {
        duration: 40,
        title: 'Coffee Break',
      },
      {
        duration: 25,
        title: 'Building Bard from scratch with MakerSuite and PaLM API',
        speaker: 'Gerard Sans'
      },
      {
        duration: 10,
        title: 'Lightning talk',
      },
      {
        duration: 25,
        title: 'Panel',
      },
      {
        duration: 90,
        title: 'Networking & Lunch',
      },
      {
        duration: 10,
        title: 'Lightning talk',
      },
      {
        duration: 25,
        title: 'All Roads Lead to Rome: Building an Empowered Product Team',
        speaker: 'Giuseppe Ettorre',
      },
      {
        duration: 25,
        title: 'There\'s Safety in Angular',
        speaker: 'Alisa Duncan',
      },
      {
        duration: 10,
        title: 'Lightning talk',
      },
      {
        duration: 40,
        title: 'Coffee Break',
      },
      {
        duration: 25,
        title: 'Talk',
      },
      {
        duration: 40,
        title: 'Keynote',
      },
      {
        duration: 10,
        title: 'Closing Remarks',
      },
    ],
  }