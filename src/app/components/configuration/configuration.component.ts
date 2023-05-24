import { Component } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {

  constructor( private mailService: MailService) { }
  
  sendNotificationsDaily = false;
  sendNotificationsWeekly = false;
  sendNotificationsMonthly = false;

  sendMailNotificatio() {
    this.mailService.sendMailNotification();
  }

}
