

<script>
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon } from 'ol/style';
import { MIN_VALUE } from 'long';


export default {
  name: "Minimap",
  props: {
    team1coords: Array,
    team2coords: Array,
    hideFunc: Function
  },
  data() {
    return {
      map: null,
      marker1: null,
      marker2: null
    }
  },
  methods: {
  },
  mounted() {
   console.log("map mounted", this.team1coords);
   let windowSize = Math.min(window.innerWidth, window.innerHeight)
   var zoomVal;
   if (windowSize<550){
    zoomVal = 12;
   }
   if (windowSize>=550){
    zoomVal = 13;
   }
   let mapOptions = {
    center: [59.330, 18.0698],
    zoomSnap: 0,
    zoom: zoomVal,
    zoomControl: false,
    boxZoom: false,
    doubleClickZoom: false,
    dragging: false
   }
   let map = new L.map('map', mapOptions);

   let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
   map.addLayer(layer)

   var customIcon1 = L.icon({
    iconUrl: '/src/assets/stryk2.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  var customIcon2 = L.icon({
    iconUrl: '/src/assets/fingerborg2.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });


  this.marker1 = L.marker(this.team1coords, {icon: customIcon1}).addTo(map);
  this.marker2 = L.marker(this.team2coords, {icon: customIcon2}).addTo(map);

  },
  watch: {
    team1coords(newVal) {
      this.marker1.setLatLng(newVal);
    },
    team2coords(newVal) {
      this.marker2.setLatLng(newVal);
    }
  }
}

</script>


<template>
 <div id="mapFrame">
  <button type="0" class="btn btn-outline-secondary btn-sm" style="background-color: white; position: absolute; top:7px; right:8px; z-index: 990; height: 35px; width: 35px;" @click="hideFunc"><span style="color: red; top:1px; right: 3px; font-weight: 1000;" class="material-symbols-outlined">
close
</span></button>

<div id="map"></div>
 </div> 

</template>

<style scoped>
#map {
  
  width: 80vw;
  height: 80vw;
  border: solid 6px red;
  border-radius: 20px;
}
#mapFrame {
  width: 80vw;
  height: 80vw;
  position: fixed;
  z-index: 300;
  top: calc(50vh - 40vw);
  left: calc(50vw - 40vw);
}



@media (min-aspect-ratio: 1/1) {
  #map {
    width: 80vh;
    height: 80vh;
    border: solid 6px red;
    border-radius: 20px;
  }
  #mapFrame {
  width: 80vh;
  height: 80vh;
  position: fixed;
  z-index: 300;
  top: calc(50vh - 40vh);
  left: calc(50vw - 40vh);
  }

}
</style>
