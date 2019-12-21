const express = require('express'),
	route = express.Router();

const {
	success,
	getDepartInfo
} = require('../utils/tools');

const {
	writeFile
} = require('../utils/promiseFS');


//=>获取部门列表
route.get('/list', (req, res) => {
	let data = req.$departmentDATA;
	data = data.map(item => {
		return {
			id: item.id,
			name: item.name,
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

//=>获取部门信息
route.get('/info', (req, res) => {
	let {
		departmentId = 0
	} = req.query;
	let data = getDepartInfo(departmentId, req);
	if ('name' in data) {
		res.send(success(true, {
			data: {
				id: data.id,
				name: data.name,
				desc: data.desc
			}
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//=>增加新部门
route.post('/add', (req, res) => {
	let $departmentDATA = req.$departmentDATA,
		passDATA = null;
	passDATA = Object.assign({
		id: $departmentDATA.length === 0 ? 1 : (parseFloat($departmentDATA[$departmentDATA.length - 1]['id']) + 1),
		name: '',
		desc: '',
		time: new Date().getTime(),
		state: 0
	}, (req.body || {}));
	$departmentDATA.push(passDATA);

	writeFile('./json/department.json', $departmentDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>修改部门信息
route.post('/update', (req, res) => {
	req.body = req.body || {};
	let $departmentDATA = req.$departmentDATA,
		departmentId = req.body.departmentId,
		flag = false;
	delete req.body.departmentId;
	$departmentDATA = $departmentDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(departmentId)) {
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
	writeFile('./json/department.json', $departmentDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>删除部门信息
route.get('/delete', (req, res) => {
	let $departmentDATA = req.$departmentDATA,
		flag = false;
	let {
		departmentId = 0
	} = req.query;
	$departmentDATA = $departmentDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(departmentId)) {
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
	writeFile('./json/department.json', $departmentDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

module.exports = route;