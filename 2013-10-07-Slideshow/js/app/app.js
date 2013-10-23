'use strict';

var photos = [];
var currentIndex = 0;
var timer = 0;
var page = 1;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
}

function searchFlickr(){
  var API_KEY = '2f0368063655500de447ed20a00a5e08';
                                                    // PER_PAGE and page aren't in quotes so they can be left as numbers here so we can increment them, even though in the line where url is defined it will make it a string because of the string concatenation
  var PER_PAGE = 3;

  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);

                                                    // just added as a bit of debugging to give the url of the current result
                                                    // console.log(url);
}

function results(data){
  photos = data.photos.photo;
                                                    // already have the data from Flickr
                                                    // call the createImage function once a second, until we close the page
  timer = setInterval(createImage, 1000);
}

                                                    // here we removed the parameter 'data' that we passed to this createImage function in the last project
function createImage (){
                                                    // console.log('you are being called by a timer');
  var photo = photos[currentIndex];

  try
  {
    var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
    var $div = $('<div>');
    $div.addClass('photo');
    $div.css('background-image', url);
    $('#photos').prepend($div);

    if(currentIndex < photos.length - 1){
      currentIndex++;
    } else {
      clearInterval(timer);
      currentIndex = 0;
      page++;
      searchFlickr();
    }
  }
  catch(err)
  {
    clearInterval(timer);
    currentIndex = 0;
    searchFlickr();
  }
}