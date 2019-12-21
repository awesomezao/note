let express = require('express'),
	app = express();
app.listen(1002, _ => {
	console.log('OK!');
});
app.use(express.static('./'));