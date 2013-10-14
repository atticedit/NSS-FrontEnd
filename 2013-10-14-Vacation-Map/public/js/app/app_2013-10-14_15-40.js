// my version from 3:40 PM, replaced by Chyld's from github

'use strict';

// Firebase Schema
var Δdb;
var Δlocations;

// Local Schema
var db = {};
db.locations = [];
db.map = null;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://ls-vacation-map.firebaseio.com/');
  Δlocations = Δdb.child('locations');
  Δlocations.on('child_added', dbLocationAdded);
  $('#set-zoom').click(clickSetZoom);
  $('#add-location').click(clickAddLocation);
  initMap(36, -86, 5);
}

function initMap(lat, lng, zoom){
  var mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP};
  db.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function dbLocationAdded(snapshot){
  var location = snapshot.val();
  db.locations.push(location);
  htmlAddLocation(location);
  htmlAddMarker(location);
}

// ---------------------------------------------------- //
// ---------------------------------------------------- //
// ---------------------------------------------------- //

function htmlAddLocation(location){
  var $option = $('<option>');
  $option.val(location.name);
  $option.text(location.name);
  $('#location-select').append($option);
}

function htmlAddMarker(location){
  var latLng = new google.maps.Marker(location.coordinates.lb, location.coordinates.mb);
  var marker = new google.maps.Marker({map: db.map, position: latLng, title: location.name});
}

// ---------------------------------------------------- //
// ---------------------------------------------------- //
// ---------------------------------------------------- //

function clickSetZoom(){
  var zoom = getValue('#zoom', parseInt);
  db.map.setZoom(zoom);
}

function clickAddLocation(){
  // not passing getValue a function because we don't want any conversion
  var name = getValue('#location');
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': name}, function(results, status){
    var location = {};
    location.name = results[0].formatted_address;
    location.coordinates = results[0].geometry.location;
    Δlocations.push(location);
  });
}



// from https://github.com/chyld/NSS-FrontEnd/blob/master/2013-10-11-Visual-Stock-Market/js/app/app.js
function getValue(selector, fn){
  var value = $(selector).val();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

// from https://github.com/chyld/NSS-FrontEnd/blob/master/2013-10-11-Visual-Stock-Market/js/app/app.js
function parseUpperCase(string){
  return string.toUpperCase();
}

// from https://github.com/chyld/NSS-FrontEnd/blob/master/2013-10-11-Visual-Stock-Market/js/app/app.js
function parseLowerCase(string){
  return string.toLowerCase();
}