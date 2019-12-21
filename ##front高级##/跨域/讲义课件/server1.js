let express = require('express'),
	app = express();
app.listen(1001, _ => {
	console.log('OK!');
});
app.use(express.static('./'));