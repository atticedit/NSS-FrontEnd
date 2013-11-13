var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var Player = mongoose.model('Player');

exports.connection = function(socket){
  socket.emit('connected', {status: 'connected'});
  socket.on('disconnect', socketDisconnect);
  socket.on('startgame', socketStartGame);
};

function socketDisconnect(){
}

function socketStartGame(data){
  console.log('received a start game message from a browser');
  console.log(data);

  Game.findOne({name: data.name}, function(err, game){
    if(game){
      console.log('found old game');
      console.log(game);
      addPlayer(game, data);
    } else {
      new Game({name: data.name}).save(function(err, game){
        console.log('created new game');
        console.log(game);
        addPlayer(game, data);
      });
    }
  });
}

function addPlayer(game, data){
  new Player({name: data.player, color: data.color}).save(function(err, player){
    console.log('player created');
    console.log(player);

    player.health = 100;
    player.save(function(err, player){

    });

  });
}