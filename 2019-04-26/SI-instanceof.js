	initialize: function(game) {
		
		if (game instanceof GlideRecord) {
			this.gameGr = game;
			this.gameID = game.getUniqueValue();
		} else {
			var gr = new GlideRecord(GAME_TABLE);
			gr.get(game);
			this.gameGr = gr;
			this.gameID = game;
		}
		
		this.defaultGameState = 'pending';
		this.defaultCardState = 'queued';
	},
