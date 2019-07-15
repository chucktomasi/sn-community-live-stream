// Partial code from the YouTube script include
// Note, this code is tightly coupled with my community live stream app

	getComments : function(episodeGr) {
		try {
			var yt = episodeGr.getValue('youtube_url');
			if (!yt) {
				return;
			}

			var video_id = this.getIdFromUrl(yt);
			if (!video_id) {
				return;
			}
			var r = new sn_ws.RESTMessageV2('x_snc_cls.YouTube', 'Get Comments');
			r.setStringParameterNoEscape('key', this.api_key);
			r.setStringParameterNoEscape('video_id', video_id);

			var response = r.execute();
			var responseBody = response.getBody();
			var httpStatus = response.getStatusCode();

			if (httpStatus == "200") {
				return JSON.parse(responseBody);
			}

			return;
		}
		catch(ex) {
			var message = ex.message;
		}	
	},

    	commentExists : function(commentId) {
		
		var commentGr = new GlideRecord('x_snc_cls_comment');
		if (commentGr.get('id', commentId)) {
			return true;
			
		}
		
		return false;
		
	},
