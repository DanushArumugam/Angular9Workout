import {Component} from '@angular/core';

@Component({
    selector:'parent',
    templateUrl:'./parent.html'
})

export class ParentComponent{
     //from child to Parent commounication
    public userName ='';
    public userPhone ='';
    //from parent to child commounication
    public cityName ='';
    public stateName='';

    nameEventHandler($event:any){
        this.userName=$event;
    }

    phoneEventHandler($event:any){
        this.userPhone=$event;
    }

}
