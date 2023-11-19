const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('docs'));

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`math-city started on http://localhost:${port}`)
});
