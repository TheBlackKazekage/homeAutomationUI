import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {CONFIG} from './config'

@Injectable()
export class ConfigService {
    constructor() { }
    address = CONFIG.address;
    title = CONFIG.title;
    devicesEndpoint = CONFIG.devicesEndpoint;

}