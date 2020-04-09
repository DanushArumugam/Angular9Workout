import {Component, Output,EventEmitter, Input} from '@angular/core';


@Component({
    selector:'child1',
    templateUrl:'./child1.html'
})

export class Child1Component{
    @Output()
    nameEvent = new EventEmitter<string>();
    @Output()
    phoneEvent = new EventEmitter<string>();
    @Input()
    cityNameFromParent='';
    @Input()
    stateNameFromParent='';

    userName : string='';
    userPhone : string='';

    onNameChange(){
        this.nameEvent.emit(this.userName);
    }

    onPhoneChange(){
        this.phoneEvent.emit(this.userPhone);
    }


    


}