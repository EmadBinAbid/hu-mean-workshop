import { Component, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'ga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Googular';

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit()
  {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
