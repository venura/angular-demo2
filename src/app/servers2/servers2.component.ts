import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers2',
  templateUrl: './servers2.component.html',
  styleUrls: ['./servers2.component.css']
})
export class Servers2Component implements OnInit {
  allowAddServer: boolean = false;
  serverCreationStatus = "No server was created!";
  serverName: string = "Default1";
  constructor() {   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

}