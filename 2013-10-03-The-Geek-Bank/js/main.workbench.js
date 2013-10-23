'use strict';

$(document).ready(initialize);

function initialize()
{
  $('#set_logo').click(logoSet);
  $('#set_balance').click(balanceSet);
  $('#deposit_funds').click(depositFunds);
  $('#withdraw_funds').click(withdrawFunds);
}

function logoSet()
{
  var $logo = $('<img>');
  var logoSrc = $('#logo_src').val();
  $logo.attr('src', logoSrc);
  $('#logo').append($logo);
}

function balanceSet()
{
  var initBalance = $('#init_balance').val();
  initBalance = parseInt(initBalance, 10);
  $('#balance').text(initBalance);
}

function depositFunds()
{

}

function withdrawFunds()
{


}