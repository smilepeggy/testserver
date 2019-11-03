import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public lists: any[] = [];
  constructor(public http: HttpClient) { }
  getData() {
    //alert('Get');
    let api = "http://127.0.0.1:8081";
    //let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      //this.lists = response.result;
    })
  }

  postData() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var api = "http://127.0.0.1:8081";
    this.http.post(api, { username: 'Peggy', age: '24' }).subscribe((response) => {
      console.log(response);
    })
    //alert('Post');
  }

  
  //用這個方法不用後端code改跨域 但POST好像就不行
  GetJsonData() {
    var api = "http://127.0.0.1:8081";
    //let api = "http://a.itying.com/api/productlist";

    this.http.jsonp(api, 'callback').subscribe((response) => {
      console.log(response);
    })
    //alert('GetJsonData');
  }
}
