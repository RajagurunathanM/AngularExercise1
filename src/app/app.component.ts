import { Component, OnInit,  VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {

  alert('Click the components tab to see the Magic');

}
  name = 'Angular ' + VERSION.major; 
}
 