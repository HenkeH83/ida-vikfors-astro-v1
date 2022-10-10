fetch('https://api.netlify.com/api/v1/sites/process.env.SITE_ID/builds', {
  body: {
    clear_cache: true
  },
  headers: {
    authorization: 'Bearer process.env.ACCESS_TOKEN',
    'content-type': 'application/json'
  },
  method: 'post'
});