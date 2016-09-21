import { Component, Type } from '@angular/core';
import '../rxjs-operators';
import { Device } from './device';
import { DeviceService } from './device.service';
import { OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  templateUrl: './device.component.html'
})
export class DevicesComponent implements OnInit {
  ngOnInit(): void {
    this.getDevices();
  }
  title = 'Mott Residence';
  devices: Device[];
  constructor(private deviceService: DeviceService) { }
  getDevices(): void {
    this.deviceService.getDevices().then(devices => this.devices = devices);
  }
  fade(nodeid: number, level: number) {
    if (level) {
      this.deviceService.fade(_.find(this.devices, function (o) { return o.nodeid == nodeid; }), level);
      console.log(nodeid, level);
    }
  }

}