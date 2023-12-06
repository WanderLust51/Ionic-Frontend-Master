import { Component, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus()
    console.log(status)
  }
  
  constructor() {
    Network.addListener('networkStatusChange', (status: any) => {
      console.log('Cambio de red:', status)
    })
    this.logCurrentNetworkStatus()
  }

}
