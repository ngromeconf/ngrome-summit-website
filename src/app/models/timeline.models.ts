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

