import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mapasApp';

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
}
