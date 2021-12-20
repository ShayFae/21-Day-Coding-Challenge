const parseTranscripts = (messages) => {
  let test = [];
  for(let i = 0; i < messages.length; i++) {
      test.push(messages[i].origin + ": " + messages[i].message);
  }
  return test;
};
