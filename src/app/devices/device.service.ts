import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Device} from './device';
import {DEVICES} from './mock-devices'
import { ConfigService } from '../config.service'



@Injectable()
export class DeviceService {
    constructor(private http: Http, private configService: ConfigService) { }
    private headers = new Headers({'Content-Type': 'application/json'});
    private devicesUrl = this.configService.devicesEndpoint;

    

    getDevices():Promise<Device[]> {
        
        // return Promise.resolve(DEVICES); // uncomment this if you dont actually have a zstick
        return this.http.get(this.devicesUrl)
            .toPromise()
            .then(response => response.json().devices as Device[])
            .catch(this.handleError);

    }
    fade(device, level):Promise<void> {
        console.log('in fader');
        return this.http.post(`${this.devicesUrl}/${device.nodeid}/fade`, `{"id":${device.nodeid},"level":${device.level}}`, {headers: this.headers})
        .toPromise()
        .then(()=>device)
        .catch(this.handleError);
        
    }
    private handleError(error: any): Promise<any> {
        console.error('an error occured', error);
        return Promise.reject(error.message || error);
    }
}