export const MESSAGE = 'MESSAGE';

export function displayMessage(text){
    return {
        type: MESSAGE,
        text
    }
}


export function displayAfter5Secs() {
    return function(dispatch) {
      dispatch(displayMessage("wait for 5 secs"));
      return setTimeout(() => {
          dispatch(displayMessage('I was dispatched after 5 secs.'));
      }, 5000);
    }
}

