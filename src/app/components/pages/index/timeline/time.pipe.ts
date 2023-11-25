import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Timeline } from '../../../../models/timeline.models';



@Pipe({ name: 'timePipe', standalone: true })
export class TimePipe implements PipeTransform {

  // or use a rest parameter
  transform(index: any, agendaItems: Timeline): any {
    return this.increaseTime(index, agendaItems);
  }

  private increaseTime(actualIndex: number, timeline: Timeline) {
    let _startTime = new Date(timeline.startTime);
    let _addTime = 0;
    timeline.agenda.every((element, index) => {
      if (actualIndex === index) return false;
      _addTime += element.duration;
      return true;
    });

    const _newDate = this.addMinutes(_startTime, _addTime);
    return new DatePipe('en-US','GMT').transform(_newDate,'HH:mm');
    
  }

  private addMinutes(date: Date, minutes:number) {
    return new Date(date.getTime() + minutes * 60000);
  }
}
