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

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999;
      cursor: pointer;
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
  }

  agregarMarcador(): void {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.coordenadas)
      .addTo(this.mapa);
  }

  irMarcador(): void {
    
  }

}
