<script>

var mymap = L.map('mapid').setView([40.66079, -7.91085], 19);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
function fmarker0() {
  switchScene(scenes[0]);
}
var marker0 = L.marker([40.66066, -7.91074]).addTo(mymap);
marker0.on('click', fmarker0 );

function fmarker1() {
  switchScene(scenes[1]);
}
var marker1 = L.marker([40.66059, -7.91081]).addTo(mymap);
marker1.on('click', fmarker1 );

function fmarker2() {
  switchScene(scenes[2]);
}
var marker2 = L.marker([40.66069, -7.91105]).addTo(mymap);
marker2.on('click', fmarker2 );

function fmarker3() {
  switchScene(scenes[3]);
}
var marker3 = L.marker([40.66093, -7.91088]).addTo(mymap);
marker3.on('click', fmarker3 );

function fmarker4() {
  switchScene(scenes[4]);
}
var marker4 = L.marker([40.66058, -7.91095]).addTo(mymap);
marker4.on('click', fmarker4 );

function fmarker5() {
  switchScene(scenes[5]);
}
var marker5 = L.marker([40.66052, -7.91111]).addTo(mymap);
marker5.on('click', fmarker5 );

function fmarker6() {
  switchScene(scenes[6]);
}
var marker6 = L.marker([40.66052, -7.91093]).addTo(mymap);
marker6.on('click', fmarker6 );

function fmarker7() {
  switchScene(scenes[7]);
}
var marker7 = L.marker([40.66045, -7.91111]).addTo(mymap);
marker7.on('click', fmarker7 );
</script>
