import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  tabs = [
    {
      title: 'tab1',
      active: false
    },
    {
      title: 'tab2',
      active: false
    },
    {
      title: 'tab3',
      active: false
    }
  ];



  constructor() {}


  tabSelected( evento ){

    this.tabs.forEach( tab =>{
      if( tab.title === evento.tab ){
        tab.active = true;
      }else{
        tab.active = false;
      }
    });
    
  }
}
