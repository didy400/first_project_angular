import { Component } from '@angular/core';
import { JSONPlaceholderService } from './services/jsonplaceholder.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cyberlead-project';

    
  data:Array<any>
  details:Array<any>
  
  constructor(private JSONplaceholder: JSONPlaceholderService) {
    this.data = new Array<any>()
  };

  ngOnInit(){
    this.JSONplaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  };
  getDetails(){
    this.data
  }
}


  