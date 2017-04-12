import { Component,EventEmitter } from 'angular2/core';
import { ChildComp } from "./child.component";

@Component({
    selector: 'my-app',
    template: `
        Hello World
        <input type="text" (keyup)="0" #childv>
        <child-comp [parentvalue]="childv.value" (childchanged)="fromchild($event)"></child-comp>
        孩子來的值  {{fromchildv}}
       
    `,
    directives:[ChildComp]
})
export class AppComponent {
fromchildv:string;
childv:string
fromchild(value:string){
    this.fromchildv=value;
}
}
