import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-server-test',
  templateUrl: './server-test.page.html',
  styleUrls: ['./server-test.page.scss'],
})
export class ServerTestPage implements OnInit {


  public url: any = "http://127.0.0.1:8081";
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  // 1.fast_charge
  fast_charge() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // var api = "http://127.0.0.1:8081";
    this.http.post(this.url, {
      "command": "fast_charge",
      "user": {
        "user_id": 1
      },
      "auto": {
        "auto_id": 36842
      }
    }).subscribe((response) => {
      console.log(response);
    })
  }
  // 2.get_auto_state
  get_auto_state() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.url, {
      "command": "get_auto_state",
      "user": {
        "user_id": 1
      },
      "auto": {
        "auto_id": 36842
      }
    }).subscribe((response) => {
      console.log(response);
    })
  }
  // 3. get_charge_session
  get_charge_session() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.url, {
      "command": "get_charge_session",
      "user": {
        "user_id": 1
      },
      "auto": {
        "auto_id": 36842
      },
      "charge_session": {
        "session_id":0 //		"session_id":0 (ask last sesion) 有問題
      }
    }).subscribe((response) => {
      console.log(response);
    })
  }
  // 4. new_auto
  new_auto() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.url, {
      "command": "new_auto",
      "user": {
        "user_id": 1
      },
      "auto": {
        "auto_id": 0,
        "auto_name": "#BumbleBee",
        "brand": "Mercedes",
        "model": "A150E",
        "production_year": 2018,
        "mielage": 9666,
        "battery_capacity": 45,
        "minimum_battery_discharge": 15,
        "maximum_battery_charge": 97,
        "geolocation": [51.767799, 14.328328]
      }
    }).subscribe((response) => {
      console.log(response);
    })
  }
  // 5. new_user
  new_user() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.url, {
      "command": "new_user",
      "user": {
        "user_id": 0,
        "user_name": "honey",
        "name": "John",
        "surname": "Doe",
        "phone": "01596584684",
        "mail": "JohnDoe@b-tu.de",
        "password": "se'j6584"
      }
    }).subscribe((response) => {
      console.log(response);
    })
  }
  // 6.update
  update() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.url, {
      "command": "update",
      "user": {
        "user_id": 1,
        "user_name": "honey",
        "name": "John",
        "surname": "Doe",
        "phone": "01596584684",
        "mail": "JohnDoe@b-tu.de",
        "password": "se'j6584",
        "geolocation": [51.767799, 14.328328]
      },
      "auto": {
        "auto_id": 36842,
        "auto_name": "#BumbleBee",
        "brand": "Mercedes",
        "model": "A150E",
        "production_year": 2018,
        "mielage": 9766,
        "battery_capacity": 45,
        "minimum_battery_discharge": 15,
        "maximum_battery_charge": 97,
        "current_battery_state": 65,
        "geolocation": [51.767799, 14.328328]
      }
    }).subscribe((response) => {
      console.log(response);
    })
  }


}
