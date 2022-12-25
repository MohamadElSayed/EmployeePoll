function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveTweetToDatabase({
      text,
      author: authedUser,
      replyingTo,
    }).then((tweet) => dispatch(addTweet(tweet)));
  };
}

function handleInitialData() {
  return (dispatch) => {};
}

//when components are connected to store they're called containers
