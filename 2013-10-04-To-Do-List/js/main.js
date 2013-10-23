'use strict';

$(document).ready(initialize);

function initialize()
{

  $('#add').click(addTask);
}

function addTask()
{
  var $newDate = $('#newDate');
  var $tasklist = $('#tasklist');
  var $newTask = $('#newTask');

  var $tr = $('<tr>');
  var $date = $('<td>');
  $date.addClass('date');
  var $task = $('<td>');
  $task.addClass('task');
  var $color = $('<td>');
  $color.addClass('color');
  var $done = $('<td>');
  $done.addClass('done');
  var $remove = $('<td>');
  $remove.addClass('remove');
  var $move = $('<td>');
  $move.addClass('move');

  // var $colorbox = ____;
  // var $checkbox = _____;

  var $removeImg = $('<img>');
  $removeImg.attr('src', 'images/remove.png');
  $removeImg.addClass('remove');

  var $upImg = $('<img>');
  $upImg.attr('src', 'images/up.jpg');
  $upImg.addClass('up');

  var $downImg = $('<img>');
  $downImg.attr('src', 'images/down.jpg');
  $downImg.addClass('down');

  $date.append($newDate);
  $task.append($newTask);
  // $color.append($colorbox);
  // $done.append($checkbox);
  $remove.append($removeImg);
  $move.append($upImg, $downImg);
  $tr.append($date, $task, $color, $done, $remove, $move);
  $tasklist.append($tr);

  $newDate.focus();
}