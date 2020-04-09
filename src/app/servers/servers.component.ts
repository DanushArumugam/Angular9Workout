import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template:`<app-server></app-server>`,
  styleUrls: ['./servers.component.scss']
  
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus = "No Server was Created!"
  serverName ='';
  serverCreated =false;
  

  constructor() { 
    
     setTimeout(()=>{
       this.allowNewServer=true;
     },2000);
  }
  
  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus = "Server is Created! Server name is "+this.serverName;
  }
  onUpdateServer(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
