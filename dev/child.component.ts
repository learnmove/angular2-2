import {Component,EventEmitter,Output} from 'angular2/core';
@Component({
    selector:'child-comp',
    template:`
    <hr>
    i am child
        <input type="text" (keyup)="onchange(childv.value)" #childv>to father
        <div>
        爸給孩子的值 :{{parentv}}
        </div>
    `,
    inputs:['parentv:parentvalue'],
    // outputs:['childchanged'] 換成@output
})
export class ChildComp{
parentv:string;
@Output() childchanged=new EventEmitter<string>();
onchange(value:string)
{    
    this.childchanged.emit(value);
}
}