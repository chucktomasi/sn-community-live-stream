
    hasFinishedAllStations : function(workoutGr) {

		var numberOfStations = parseInt(gs.getProperty('x_snc_health_club.stations'), 10);
		var finishedStations = this._getFinishedStations(workoutGr);

		gs.info('hasFinishedAllStations(): ' + JSON.stringify(finishedStations, null, 4));
		if (this._objectSize(finishedStations) == numberOfStations) {
			return true;
		}

		return false;

	},

	_getFinishedStations : function(thisWorkoutGr) {
		
		var stationList = {};
		var contactType = thisWorkoutGr.contact.x_snc_health_club_workout_type.toString();
		var contactDifficulty = thisWorkoutGr.contact.x_snc_health_club_workout_difficulty.toString();
		var contactID = thisWorkoutGr.contact.toString();
		gs.info('contactType=' + contactType + ' difficulty=' + contactDifficulty);

		var workoutGr = new GlideRecord(CONTACT_WORKOUT_M2M);
		workoutGr.addQuery('contact', contactID);
		workoutGr.addQuery('workout.type', contactType);
		workoutGr.addQuery('workout.difficulty', contactDifficulty);
		workoutGr.addQuery('state', 'finished');
		workoutGr.query();

		while (workoutGr.next()) {
			var stationID = workoutGr.getValue('station');
			stationList[stationID] = workoutGr.station.getDisplayValue();
		}

		return stationList;
	},

	_objectSize : function(obj) {
		var size = 0, key;
		for (key in obj) {
			if (obj.hasOwnProperty(key))
				size++;
		}
		return size;
	},
