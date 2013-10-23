'use strict';

$(document).ready(initialize);

function initialize()
{
  $('#set_logo').click(logoSet);
  $('#set_balance').click(balanceSet);
  $('#deposit_funds').click(depositFunds);
  $('#withdraw_funds').click(withdrawFunds);
  $('#deposit_list').on('click', '.deposited', depositClicked);
  $('#withdrawal_list').on('click', '.withdrawn', withdrawalClicked);
}

function logoSet()
{
  var $logo = $('<img>');
  var logoSrc = $('#logo_src').val();
  $logo.attr('src', logoSrc);
  $('#logo').append($logo);
  $('#logo_setup').hide();
}

function balanceSet()
{
                                          // set variable balance to value of #init_balance
  var balance = $('#init_balance').val();
                                          // convert balance to an integer
  balance = parseInt(balance, 10);
                                          // set the value of #balance to (balance run through makeCurrency)
  // $('#balance').val(makeCurrency(balance));
                                          // set the value of #balance to balance
  $('#balance').val(balance);
                                          // hide the initial balance input and button
  $('#balance_setup').hide();
}

function depositFunds()
{
                                          // set variable amount to value of #amount
  var amount = $('#amount').val();
                                          // convert amount to an integer
  amount = parseInt(amount, 10);
                                          // set variable balance to value of #balance
  var balance = $('#balance').val();
                                          // convert balance to an integer
  balance = parseInt(balance, 10);
                                          // set balance to balance + amount
  balance += amount;
                                          // set the value of #balance to balance
  $('#balance').val(balance);
                                          // set $deposit to a newly created li
  var $deposit = $('<li>');
                                          // add class of deposited to $deposit
  $deposit.addClass('deposited');
                                          // set the text of $deposit to amount
  $deposit.text(amount);
                                          // display $deposit as an li of #deposit_list
  $('#deposit_list').prepend($deposit);
}

function withdrawFunds()
{
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  var balance = $('#balance').val();
  balance = parseInt(balance, 10);
  balance -= amount;
  $('#balance').val(balance);
  var $withdrawal = $('<li>');
  $withdrawal.addClass('withdrawn');
  $withdrawal.text(amount);
  $('#withdrawal_list').prepend($withdrawal);
}

function depositClicked()
{
  var $amount = $(this);
  var amount = $amount.val();
  var balance = $('#balance').val();
  balance -= amount;
  $('#balance').val(balance);
  $amount.remove();
}

function withdrawalClicked()
{
  debugger;
  var $amount = $(this);
  var amount = $amount.val();
  var balance = $('#balance').val();
  balance += amount;
  $('#balance').val(balance);
  $amount.remove();

}

// function makeCurrency(number)
// {
//   return '$' + number + '.00';
// }