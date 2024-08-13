var mbAttrOpenStreetMap_Mapnik = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	mbUrlOpenStreetMap_Mapnik = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    				maxZoom: 20,
    				subdomains:['mt0','mt1','mt2','mt3']
});

// Setingan Ukuran Peta BaseMap
var OpenStreetMap_Mapnik = L.tileLayer(mbUrlOpenStreetMap_Mapnik, {maxZoom: 22, attribution: mbAttrOpenStreetMap_Mapnik});
	
var map = L.map('map', {
	maxZoom: 22,
	center: [-0.3226530480279275, 100.22768030884147],
	minZoom: 7,
	layers: [OpenStreetMap_Mapnik]
}).setView([-0.3226530480279275, 100.22768030884147], 12);

var lyrBatasADM = L.geoJSON.ajax('geojson/BATAS ADM.geojson').addTo(map);