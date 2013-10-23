'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
  $('#clear').click(clearPhotos);
  $('#photos').on('dblclick', '.photo', removeImage);
  $('#photos').on('click', '.photo', selectImage);
  $('#delete').click(deleteSelected);
  $('#save').click(saveSelected);
}

function saveSelected(){
  var $selectedImages = $('.selected');
  $selectedImages.removeClass('selected');
  $('#saved-photos').prepend($selectedImages);
}


function deleteSelected(){
  $('.selected').remove();
}

function selectImage(){
  $(this).toggleClass('selected');
}

function clearPhotos(){
  $('#photos').empty();
}

function removeImage(){
  $(this).remove();
}

function searchFlickr(){
  var API_KEY = '2f0368063655500de447ed20a00a5e08';
  // PER_PAGE and page aren't in quotes so they can be left as numbers here so we can increment them, even though in the line where url is defined it will make it a string because of the string concatenation
  var PER_PAGE = 9;
  var page = 1;

  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
}

function results(data){
  for(var i = 0; i < data.photos.photo.length; i++){
    createImage(data.photos.photo[i]);
  }
}

function createImage (photo){
  var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);
}