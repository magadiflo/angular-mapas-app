import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
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
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 14;
  coordenadas: { lng: number; lat: number } = { lng: -78.5219181954366, lat: -9.134615916388139 };

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.coordenadas,
      zoom: this.zoomLevel,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(this.coordenadas)
      .addTo(this.mapa);
  }

}
