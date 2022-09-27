import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `.mapa-container {
      width: 100%;
      height: 100%;
    }
    
    .row {
      position: fixed;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px; 
      background-color: white;
      z-index: 999;
    }
    `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: { lng: -78.5219181954366, lat: -9.134615916388139 },
      zoom: 14,
    });
  }

}
