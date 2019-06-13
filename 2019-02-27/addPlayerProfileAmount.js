// Test script for rolled up amount

var gameGr = new GlideRecord('x_snc_jeopardy_game');
gameGr.get('2043220ddb5fef0069c5fd131d96197f');

var ju = new Util(gameGr);
var winner = ju.findWinner();

ju.addPlayerProfileAmount(winner.playerID, winner.amount);