const express = require('express'),
	route = express.Router();

const {
	handleMD5,
	success,
	getDepartInfo,
	getJobInfo,
	getUserInfo
} = require('../utils/tools');

const {
	writeFile
} = require('../utils/promiseFS');

//=>用户登录
route.post('/login', (req, res) => {
	let {
		account = '',
			password = ''
	} = req.body || {};
	password = handleMD5(password);

	const item = req.$userDATA.find(item => {
		return (item.name === account || item.email === account || item.phone === account) && item.password === password;
	});

	if (item) {
		req.session.userID = parseFloat(item.id);
		req.session.power = getJobInfo(item.jobId, req).power || '';
		res.send(success(true, {
			power: req.session.power
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'user name password mismatch!'
	}));
});

//=>检测是否登录
route.get('/login', (req, res) => {
	const userID = req.session.userID;
	if (userID) {
		res.send(success(true));
		return;
	}
	res.send(success(false, {
		codeText: 'current user is not logged in!'
	}));
});

//=>退出登录
route.get('/signout', (req, res) => {
	req.session.userID = null;
	req.session.power = null;
	res.send(success(true));
});

//=>获取用户通讯录
route.get('/list', (req, res) => {
	let data = req.$userDATA;
	let {
		departmentId = 0,
			search = ''
	} = req.query;
	if (parseFloat(departmentId) !== 0) {
		data = data.filter(item => {
			return parseFloat(item.departmentId) === parseFloat(departmentId);
		});
	}
	if (search !== '') {
		data = data.filter(item => {
			return item.name.includes(search) || item.phone.includes(search) || item.email.includes(search);
		});
	}
	data = data.map(item => {
		return {
			id: item.id,
			name: item.name,
			sex: item.sex,
			email: item.email,
			phone: item.phone,
			departmentId: item.departmentId,
			department: getDepartInfo(item.departmentId, req).name,
			jobId: item.jobId,
			job: getJobInfo(item.jobId, req).name,
			desc: item.desc
		}
	});
	if (data.length > 0) {
		res.send(success(true, {
			data: data
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//=>获取用户详细信息
route.get('/info', (req, res) => {
	let {
		userId = 0
	} = req.query;
	if (parseFloat(userId) === 0) {
		userId = req.session.userID;
	}
	let data = getUserInfo(userId, req);
	if ('name' in data) {
		res.send(success(true, {
			data: {
				id: data.id,
				name: data.name,
				sex: data.sex,
				email: data.email,
				phone: data.phone,
				departmentId: data.departmentId,
				department: getDepartInfo(data.departmentId, req).name,
				jobId: data.jobId,
				job: getJobInfo(data.jobId, req).name,
				desc: data.desc
			}
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//=>增加用户信息
route.post('/add', (req, res) => {
	let $userDATA = req.$userDATA,
		passDATA = null;
	passDATA = Object.assign({
		id: $userDATA.length === 0 ? 1 : (parseFloat($userDATA[$userDATA.length - 1]['id']) + 1),
		name: '',
		password: handleMD5('e807f1fcf82d132f9bb018ca6738a19f'),
		sex: 0,
		email: '',
		phone: '',
		departmentId: 1,
		jobId: 1,
		desc: '',
		time: new Date().getTime(),
		state: 0
	}, (req.body || {}));
	$userDATA.push(passDATA);

	writeFile('./json/user.json', $userDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>修改用户信息
route.post('/update', (req, res) => {
	req.body = req.body || {};
	let $userDATA = req.$userDATA,
		userId = req.body.userId,
		flag = false;
	delete req.body.userId;
	$userDATA = $userDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(userId)) {
			flag = true;
			return {
				...item,
				...req.body
			};
		}
		return item;
	});
	if (!flag) {
		res.send(success(false));
		return;
	}
	writeFile('./json/user.json', $userDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>删除用户信息
route.get('/delete', (req, res) => {
	let $userDATA = req.$userDATA,
		flag = false;
	let {
		userId = 0
	} = req.query;
	$userDATA = $userDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(userId)) {
			flag = true;
			return {
				...item,
				state: 1
			};
		}
		return item;
	});
	if (!flag) {
		res.send(success(false));
		return;
	}
	writeFile('./json/user.json', $userDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>修改（重置）用户密码
route.post('/resetpassword', (req, res) => {
	let $userDATA = req.$userDATA;
	let {
		userId = 0,
			password
	} = req.body;
	if (parseFloat(userId) === 0) {
		//=>修改登录者的密码
		userId = req.session.userID;
		password = handleMD5(password);
	} else {
		password = handleMD5('e807f1fcf82d132f9bb018ca6738a19f');
	}
	$userDATA = $userDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(userId)) {
			return {
				...item,
				password: password
			};
		}
		return item;
	});
	writeFile('./json/user.json', $userDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>获取用户权限
route.get('/power', (req, res) => {
	res.send(success(true, {
		power: req.session.power
	}));
});

module.exports = route;