export type timelineItems = {
  duration: number;
  title: string;
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
        title: 'Talk',
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
        title: 'Talk',
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