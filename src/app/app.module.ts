import {NgModule, Type} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {AppComponent} from './app.component';


import {DeviceDetailComponent} from './devices/device-detail.component';
import {DashboardComponent} from './dashboard.component';
import {DevicesComponent} from './devices/devices.component';
import {GeneralComponent} from './general/general.component';
import {StatusComponent} from './status/status.component';
import {DeviceService} from './devices/device.service';
import {ConfigService} from './config.service';
import {AdminComponent} from './admin/admin.component';
import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [ 
        AppComponent, 
        DeviceDetailComponent, 
        DevicesComponent, 
        DashboardComponent, 
        GeneralComponent, 
        StatusComponent,
        AdminComponent ],
    providers: [DeviceService, ConfigService],
    bootstrap:    [ AppComponent ]
})
export class AppModule  { }
