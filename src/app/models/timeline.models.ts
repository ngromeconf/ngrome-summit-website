export type activity = 'talk' | 'activity';

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
  image?: string;
  type?: activity
};

export type Timeline = {
  startTime: Date;
  agenda: timelineItems[];
};

