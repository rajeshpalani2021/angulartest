import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Progress Bar';

  //Demo purpose only, Data might come from Api calls/service
  public counts = [
    '1. Passed Validation',
    '2. Data API',
    '3. Transformation',
    '4. Generated File',
    '5. Transfered',
  ];
  public orderStatus = '4. Generated File';
  public countsStatus = [];

  map = new Map<String, boolean>();
  successBoolean = true;
  constructor(){
    this.map.set("1. Passed Validation",false);
    this.map.set("2. Data API",false);
    this.map.set("3. Transformation",false);
    this.map.set("4. Generated File",false);
    this.map.set("5. Transfered",false);
    // this.map.forEach((value: Booloean, key: string) => {
    //   console.log(key, value);
    // });

  }

  ngOnInit() {
    console.log("Hello TypeScript world!");
  //  var successBoolean = true;
    // for(let i=0;i<this.counts.length;i++) {
    //   console.log(this.counts[i])
    //   this.countsStatus.push(successBoolean);
    //   if(this.counts[i] == this.orderStatus){
    //     successBoolean = false;
    //   }
    //   console.log(this.countsStatus);
    // }
    for(let i=0;i<this.map.size;i++) {
        console.log(this.counts[i])
        this.map.set(this.counts[i],this.successBoolean);
        // this.countsStatus.push(this.successBoolean);
        if(this.counts[i] == this.orderStatus){
          this.successBoolean = false;
        }
        console.log(this.map.get(this.counts[i]));
        // console.log(this.countsStatus);
      }
      console.log(this.map.values);
      this.map.forEach((value: boolean, key: String) => {
      console.log(key, value);
    });
  }

  

}
