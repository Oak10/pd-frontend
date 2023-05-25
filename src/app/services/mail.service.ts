import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient){ }

  private baseUrl = `${environment.apiMailUrl}/recommendation/produce`;

  sendMailNotification()  {
    console.log("send mail notification");
    this.http.get(this.baseUrl).subscribe((data: any) => {
      console.log(data);
    });
  }

}
