const fetch = require('node-fetch');
exports.handler = async function(event, context) {
  const url = event.queryStringParameters.url;
  const response = await fetch(url);
  const data = await response.text();

  return {
    statusCode: 200,
    body: data,
  };
};
