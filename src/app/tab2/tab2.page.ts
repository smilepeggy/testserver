import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public actionSheetController: ActionSheetController, public http: HttpClient) {

  }
  ngOnInit() {
  }


  // cuz "await. present", need to use "async, you were learning in cordova(?_12"
  async postData() {
    const tab2 = await this.actionSheetController.create({
      header: 'I am Action Sheet',
      mode: 'ios', // show in Android with ios mode

      buttons: [{
        text: 'Delete',
        role: 'destructive', //become red color_12(?
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }]
    });
    await tab2.present();
  }

  postData2() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');


    let postData = {
      user: "123@yahoo.com",
    }

    // this.http.post("http://127.0.0.1:8081", postData, { observe: 'response' })
    //   .subscribe(data => {
    //     console.log(data);
    //     console.log('good');

    //   }, error => {
    //     console.log(error);
    //     console.log('error');

    //   });

    // this.http.post('http://127.0.0.1:8081', {
    //   content: 'hello',
    //   submittedBy: 'Josh'
    // }).subscribe((response) => {
    //   console.log(response);
    // });

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var api = "http://127.0.0.1:8081"; this.http.post(api, {
      user:{ user_id: '01'}, auto:{auto_id: '36842' }} 
      ,httpOptions).subscribe(response => {
      console.log(response);
    });
    var api = "http://127.0.0.1:8081"; this.http.post(api, {
      "command":"update",
      "user":{
        "user_id":1,
        "user_name":"honey",
        "name":"John",
        "surname":"Doe",
        "phone":"01596584684",
        "mail":"JohnDoe@b-tu.de",
        "password":"se'j6584",
        "geolocation":[ 51.767799, 14.328328]
      },
      "auto":{
        "auto_id":36842,
        "auto_name":"#BumbleBee",
        "brand":"Mercedes",
        "model":"A150E",
        "production_year":2018,
        "mielage":9766,
        "battery_capacity":45,
        "minimum_battery_discharge":15,
        "maximum_battery_charge":97,
        "current_battery_state":65,
        "geolocation":[ 51.767799, 14.328328]
      }
    } ,httpOptions).subscribe(response => {
      console.log(response);
    });

    // this.http.get('http://127.0.0.1:8081').subscribe((response) => {
    //   console.log(response);
    // });

  }
}