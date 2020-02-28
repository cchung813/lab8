function initMap() {
	// add your code here
	L.mapquest.key = '7z0y3xvt3A8VohnvUNqCL7nvaLcVG7x3';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.8778504,-117.2368428],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false,
	});

	//Add a marker to the map
	L.marker([32.8778504,-117.2368428]).addTo(map);
}