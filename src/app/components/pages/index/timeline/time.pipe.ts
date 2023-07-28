import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


export type timelineItems = {
  duration: number;
  title: string;
};

export type Timeline = {
  startTime: Date;
  agenda: timelineItems[];
};

@Pipe({ name: 'timePipe', standalone: true })
export class TimePipe implements PipeTransform {

  // or use a rest parameter
  transform(duration: number, index: any, timeline: Timeline): any {
    //console.log(duration, index, timeline);

    return this.increaseTime(index, timeline);
  }

  private increaseTime(actualIndex: number, timeline: Timeline) {
    let _startTime = timeline.startTime;
    let _addTime = 0;
    timeline.agenda.every((element, index) => {
      if (actualIndex === index) return false;
      _addTime += element.duration;
      return true;
    });

    const _newDate = this.addMinutes(_startTime, _addTime);
    return new DatePipe('en-US').transform(_newDate,'HH:mm');
    
  }

  private addMinutes(date: Date, minutes:number) {
    return new Date(date.getTime() + minutes * 60000);
  }
}
