import { Component, Type } from '@angular/core';
import { ConfigService } from './config.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private configService: ConfigService) { }
  address = this.configService.address;
  title = this.configService.title;
}
