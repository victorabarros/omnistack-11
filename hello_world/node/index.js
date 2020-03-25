var express = require('express'),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 8080;

app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});

app.listen(port);

app.post("/someRoute", function(req, res) {
  console.log(req.body);
  res.send({ status: 'SUCCESS' });
});
