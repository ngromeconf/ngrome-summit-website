import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Timeline, TIMELINE } from './timeline';



@Pipe({ name: 'timePipe', standalone: true })
export class TimePipe implements PipeTransform {

  // or use a rest parameter
  transform(index: any): any {
    return this.increaseTime(index, TIMELINE);
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
