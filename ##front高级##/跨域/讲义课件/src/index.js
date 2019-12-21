import axios from 'axios';

axios.get('/user/list').then(res => {
	console.log(res);
});

axios.post('/user/login');