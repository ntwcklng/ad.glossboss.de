const express = require('express')
const app = express()
const Gists = require('gists')
const gists = new Gists()
let urls

app.get('/:id', (req, res) => {
  return gists.download(
    { id: '5a12f330edd410e0c0e40af05e03803d' },
    (err, result) => {
      if (err) return err
      const gistsUrls = result.files['urls'].content
        .split('\n')
        .map(line => line.split(',').filter(url => url.charAt(0) !== '#'))
      urls = new Map(gistsUrls)
      if (urls.has(req.params.id)) {
        return res.redirect(urls.get(req.params.id))
      }
      res.send('Was machst du hier?')
    }
  )
})

app.get('/', (req, res) => {
  res.redirect('https://glossboss.de/')
})

var server = app.listen(3000, function() {
  console.log('Server listening on port 3000')
})
