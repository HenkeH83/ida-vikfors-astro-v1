fetch('https://api.netlify.com/api/v1/sites/e2d0123a-f497-4680-af5e-14904b6e59ba/builds', {
  body: {
    clear_cache: true
  },
  headers: {
    authorization: 'Bearer pJz_CWROyxmN6NOaaZyFip-XhfJvolXvbL6F6_e8FMM',
    'content-type': 'application/json'
  },
  method: 'post'
})