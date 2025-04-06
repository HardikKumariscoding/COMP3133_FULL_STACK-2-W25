

import {Component} from '@angular/core';

@Component({
    selector:'students',
    template:'<h2>{{getTitle()}}</h2>'
})

export class StudentsComponent{
    date = this.getCurrentDate()

title = `My list of students and date is ${this.date.toLocaleString('default',{month:'long'})}  ${this.date.getDate()} ${this.date.getFullYear()}` ;



getTitle() {
    return this.title;
}


getCurrentDate(){
   let date = new Date();

   return date
}




}

