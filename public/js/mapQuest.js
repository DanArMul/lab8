function initMap() {
	L.mapquest.key = 'Z9jMzqlHveNEOS8ATtELnJYwZPIQ9MOQ';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	  center: [32.87852911015582, -117.23588967260979],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});
}