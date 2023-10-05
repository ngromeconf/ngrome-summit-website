export type timelineItems = {
  duration: number;
  title: string;
  speaker?: string;
  jobPosition?: string;
  speakerImage?: string;
  githubUrl?: string,
  twitterUrl?: string,
  jobTitle?: string,
  description?: string,
};

export type Timeline = {
  startTime: Date;
  agenda: timelineItems[];
};

export const TIMELINE: Timeline = {
    startTime: new Date(2023, 11, 1, 8, 45),
    agenda: [
      {
        duration: 60,
        title: 'Registration & Coffee',
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
        title: 'Lighthing talk',
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
        duration: 10,
        title: 'Lighthing talk',
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
        title: 'Lighthing talk',
      },
      {
        duration: 25,
        title: 'Building an Empowered Product Team',
        speaker: 'Giuseppe Ettorre',
      },
      {
        duration: 25,
        title: 'There\'s Safety in Angular',
        speaker: 'Alisa Duncan',
      },
      {
        duration: 10,
        title: 'Lighthing talk',
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