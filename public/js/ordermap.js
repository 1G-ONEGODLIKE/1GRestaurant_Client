var map = L.map('map').setView([18.79915, 98.95064],18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords = [[18.79915, 98.95064], [18.7973, 98.95219], [18.79399, 98.95036], [18.79436, 98.94842]];
resname  = ['You', '1', '2', '3']

let cl = coords.length;

for (let i = 0; i < cl; i++) {
    // Popups 
    var pop = L.popup ({
        closeOnClick: true
    }).setContent(i == 0 ? 'Your location' : 'Restaurant')

    // Markers
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);

    // Change marker icon for 1,2,3
    if (i > 0) {
        marker.setIcon(L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28]
        }));
    }

    // Circles
    var blueCircle = L.circle(coords[0], {
        radius: 50,
        color: "blue",
    }).addTo(map);
    
    for (let i = 1; i < cl; i++) {
        var circle = L.circle(coords[i], {
            radius: 30,
            color: "gold",
        }).addTo(map);
    }

    // Labels
    var toollip  = L.tooltip({
        permanent: true
    }).setContent(resname[i]);
    marker.bindTooltip(toollip);

    // Distance with Polygon
    var distance = L.polygon([
        [18.79915, 98.95064],
        [18.7973, 98.95219]
    ]).addTo(map);
    var distance = L.polygon([
        [18.79915, 98.95064],
        [18.79399, 98.95036]
    ]).addTo(map);
    var distance = L.polygon([
        [18.79915, 98.95064],
        [18.79436, 98.94842]
    ]).addTo(map);
}