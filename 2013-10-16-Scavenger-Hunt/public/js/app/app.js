'use strict';

// Firebase Schema
var Δdb;
var Δpositions;

// Local Schema (defined in keys.js)
db.positions = [];
db.path = [];

var geoOptions = {enableHighAccuracy: true, maximumAge: 1000, timeout: 27000};

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase(db.keys.firebase);
  Δpositions = Δdb.child('positions');
  Δpositions.on('child_added', dbPositionAdded);
  $('#start').click(clickStart);
  $('#stop').click(clickStop);
  $('#add').click(clickAdd);
  initMap(36, -86, 6);
  Δpositions.remove();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function dbPositionAdded(snapshot){
  var position = snapshot.val();
  var latLng = new google.maps.LatLng(position.latitude, position.longitude);

  db.positions.push(position);

  if(db.positions.length === 1){
    htmlInitializePolyLine();
    htmlAddStartMarker(latLng);
  } else {
    htmlAddCurrentPositionMarker(latLng);
    }

  db.path.push(latLng);
  db.marker.setPosition(latLng);
  htmlSetCenterAndZoom(latLng);
  $('#debug').text(position.time);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickStart(){
  db.watchId = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
}

function clickStop(){
  navigator.geolocation.clearWatch(db.watchId);
}

function clickAdd(){
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlAddStartMarker(latLng){
  var image = 'img/eye_16x12.png';
  db.marker = new google.maps.Marker({map: db.map, position: latLng, icon: image});
}

function htmlAddCurrentPositionMarker(latLng){
  var image ='img/eye_16x12.png';
  db.marker = new google.maps.Marker({map: db.map, position: latLng, icon: image});
}

function htmlSetCenterAndZoom(latLng){
  db.map.setCenter(latLng);
  db.map.setZoom(20);
}

function htmlInitializePolyLine(){
  var polyLine = new google.maps.Polyline({
    map: db.map,
    geodesic: true,
    strokeColor: '#0000ff',
    strokeOpacity: 0.7,
    strokeWeight: 1,
  });

  db.path = polyLine.getPath();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function initMap(lat, lng, zoom){
  var mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP};
  db.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function geoSuccess(location){
  var position = {};
  position.latitude = location.coords.latitude;
  position.longitude = location.coords.longitude;
  position.time = moment().format('MMMM Do YYYY, h:mm:ss a');
  // debugger;

  Δpositions.push(position);
}

function geoError(){
  console.log('Sorry; No position available.');
}