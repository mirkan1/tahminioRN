import axios from 'axios';
import _ from 'lodash';
import {
	// MAKE_PREDICTION,
} from './types';

/*matchFetch
clickedMatch
getMatchInfo*/
export const matchFetch = () => {
  // Already done in .MatchActions.js
};

export const makePrediction = ({ match_id, text }) => {
	// AUTH_REQ
  // Description: Creates a prediction about the given match
	// Endpoint `POST /v1/matches/:match_id/predictions/`
	// `NOTE*: "game" is required and it must be from available games list`
	// Response 201 and Prediction object
	return (dispatch) => {
    dispatch({ type: MAKE_PREDICTION });

    axios.post(`http://api.tahmin.io/v1/matches/${match_id}/predictions/`, { 
    	headers: 
    	{ 
	    	Authorization: `Token ${token}`
				text: text,
				game: match_id
			}
		})
			.then(
				// return to the same page
			)
			.catch(
				// return to the same page with and error
				error => console.log(error));
  };
};

export const getListPrediction = ({ match_id }) => {
  // Description: Returns a list of Prediction objects of today
	// Endpoint `GET /v1/matches/:match_id/predictions/`
	// Response: 200 and list of Prediction objects

	// `NOTE: If you want to get list of matches of another day, send a request like this: /v1/users/matches/?date=20-04-2018`

	return (dispatch) => {
    dispatch({ type: GET_PREDICTION_LIST });

    axios.get(`http://api.tahmin.io/v1/matches/${match_id}/predictions/`)
			.then(() => {
        // return to the desired page
      })
			.catch(err => console.log(err));
  };
};

export const getPrediction = ({ match_id, prediction_id, TEXT, GAME }) => {
  // Description: Returns the requested prediction
	// Endpoint `GET /v1/matches/:match_id/predictions/:prediction_id/`
	// Response: 200 and a Prediction object
	return (dispatch) => {
    dispatch({ type: GET_PREDICTION });

    axios.get(`http://api.tahmin.io/v1/matches/${match_id}/predictions/${prediction_id}/`, {
    	headers: 
    	{
    		text: TEXT,
    		game: GAME
    	}
    })
			.then(() => {
        // Done prediction and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const deletePrediction = ({ match_id, prediction_id }) => {
	// AUTH_REQ
  // Description: Deletes the requested prediction
	// Endpoint `DELETE /v1/matches/:match_id/predictions/:prediction_id/`
	// Response: 204 and a Prediction object
	return (dispatch) => {
    dispatch({ type: DELETE_PREDICTION });

    axios.delete(`http://api.tahmin.io/v1/matches/${match_id}/predictions/${prediction_id}/`)
			.then(() => {
        // Done deleting prediction and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const updatePrediction = ({ match_id, prediction_id, TEXT, GAME }) => {
	// AUTH_REQ
  // Description: Updates the requested prediction
	// Endpoint `PATCH /v1/matches/:match_id/predictions/:prediction_id/`
	// Response: 200 and a Prediction object
	return (dispatch) => {
    dispatch({ type: UPDATE_PREDICTION });

    axios.patch(`http://api.tahmin.io/v1/matches/${match_id}/predictions/${prediction_id}/`, {
    	headers: 
    	{
    		text: TEXT,
    		game: GAME
    	}
    })
			.then(() => {
        // Done updating the prediction and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const postMessageToMatch = ({ match_id, text }) => {
  // AUTH_REQ
	// Description: Posts a message to the match's thread
	// Endpoint `POST /v1/matches/:match_id/messages/`
	// Response: 201 and a message object
	return (dispatch) => {
    dispatch({ type: POST_MESSAGE_TO_MATCH });

    axios.post(`http://api.tahmin.io/v1/matches/${match_id}/messages/`, {
    	headers: 
    	{
    		text: TEXT,
    	}
    })
			.then(() => {
        // Done message and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const getListOfMessages = () => {
  // AUTH_REQ
  // Description: Returns a list of Prediction objects of today
	// Endpoint `GET /v1/matches/:match_id/messages/`
	// Response: 200 and list of Message objects
	return (dispatch) => {
    dispatch({ type: GET_LIST_OF_MESSAGES });

    axios.get(`http://api.tahmin.io/v1/matches/${match_id}/messages/`)
			.then((messages) => {
				console.log(messages)
        // Render to message list
      })
			.catch(err => console.log(err));
  };
};

export const updateMessage = ({ match_id, message_id, new_message }) => {
  // AUTH_REQ
  // Description: Updates the given message to the match's thread
	// Endpoint `PATCH /v1/matches/:match_id/messages/:message_id/`
	// Response: 200 and a message object
	return (dispatch) => {
    dispatch({ type: UPDATE_MESSAGE });

    axios.patch(`http://api.tahmin.io/v1/matches/${match_id}/messages/${message_id}}`, {
    	headers: 
    	{
    		text: new_message,
    	}
    })
			.then(() => {
        // Done message updating and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const deleteMessage = ({ match_id, message_id }) => {
  // Description: Deletes the given message
	// Endpoint `DELETE /v1/matches/:match_id/messages/:message_id/`
	// Response: 204
	return (dispatch) => {
    dispatch({ type: DELETE_MESSAGE });

    axios.delete(`http://api.tahmin.io/v1/matches/${match_id}/messages/${message_id}/`)
			.then(() => {
        // Render to message list
      })
			.catch(err => console.log(err));
  };
};

export const getMessage = ({ match_id, message_id }) => {
  // Description: Returns the requested message
	// Endpoint `GET /v1/matches/:match_id/messages/:message_id/`
	// Response: 200 and a Message object
	return (dispatch) => {
    dispatch({ type: GET_MESSAGE });

    axios.get(`http://api.tahmin.io/v1/matches/${match_id}/messages/${message_id}/`)
			.then((message) => {
        console.log(message)
        // Render to message list
      })
			.catch(err => console.log(err));
  };
};

export const upvotePrediction = ({ match_id, prediction_id }) => {
  // Description: Upvotes the given prediction
	// Endpoint `POST /v1/matches/:match_id/predictions/:prediction_id/upvote/`
	// Response: 200
	return (dispatch) => {
    dispatch({ type: UPVOTE_PREDICTION });

    axios.post(`http://api.tahmin.io/v1/matches/${match_id}/predictions/${prediction_id}/upvote`)
			.then(() => {
        // upvote the message and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const undoUptovePrediction = ({ match_id, prediction_id }) => {
  // Description: Undo upvotes the given prediction
	// Endpoint `POST /v1/matches/:match_id/predictions/:prediction_id/undoupvote/`
	// Response: 200
	return (dispatch) => {
    dispatch({ type: UNDO_UPVOTE_PREDICTION });

    axios.post(`http://api.tahmin.io/v1/matches/${match_id}/predictions/${prediction_id}/undoupvote`)
			.then(() => {
        // undo the upvote the message and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const getAMatch = ({ match_id }) => {
  // Already done in .AuthActions.js
};

export const getAvailableGames = ({ match_id }) => {
  // Description: Returns the available game types for prediction
	// Endpoint `GET /v1/matches/:match_id/games/`
	// Response 200 and list of Game objects
	return (dispatch) => {
    dispatch({ type: GET_AVAILABLE_GAMES });

    axios.post(`http://api.tahmin.io/v1/matches/${match_id}/games/`)
			.then((games) => {
				console.log(games)
        // undo the upvote the message and render to the same page
      })
			.catch(err => console.log(err));
  };
};

export const getMatchlistMeta = () => {
  // Description: Returns the metadata of the matchlist. For now it only contains dates.
	// Endpoint `GET /v1/matches/meta/`
	// Response 200 and
	return (dispatch) => {
    dispatch({ type: GET_MATCHLIST_META });

    axios.post(`http://api.tahmin.io/v1/matches/meta`)
			.then(() => {
				// render to the meta page
      })
			.catch(err => console.log(err));
  };
};
