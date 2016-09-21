import {Component} from '@angular/core';

import { Device } from '../devices/device';
import { DeviceService } from '../devices/device.service';
import { OnInit } from '@angular/core';

@Component({
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    constructor(private deviceService: DeviceService) { }
    devices: Device[];
    ngOnInit(): void {
        this.getDevices();
    }
    getDevices(): void {
        this.deviceService.getDevices().then(devices => this.devices = devices);
    }
}