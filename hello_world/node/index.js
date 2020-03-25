express = require('express');

const app = express();

app.post('/', (request, response) => {
    const payload = request.body;
    console.log(payload);
    return response.json({'success': true});
});

app.listen(3334);
