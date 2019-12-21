const express = require('express'),
	route = express.Router();

const {
	success,
	getJobInfo
} = require('../utils/tools');

const {
	writeFile
} = require('../utils/promiseFS');


//=>获取部门列表
route.get('/list', (req, res) => {
	let data = req.$jobDATA;
	data = data.map(item => {
		return {
			id: item.id,
			name: item.name,
			desc: item.desc,
			power: item.power
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
		jobId = 0
	} = req.query;
	let data = getJobInfo(jobId, req);
	if ('name' in data) {
		res.send(success(true, {
			data: {
				id: data.id,
				name: data.name,
				desc: data.desc,
				power: data.power
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
	let $jobDATA = req.$jobDATA,
		passDATA = null;
	passDATA = Object.assign({
		id: $jobDATA.length === 0 ? 1 : (parseFloat($jobDATA[$jobDATA.length - 1]['id']) + 1),
		name: '',
		desc: '',
		power: '',
		time: new Date().getTime(),
		state: 0
	}, (req.body || {}));
	$jobDATA.push(passDATA);

	writeFile('./json/job.json', $jobDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>修改部门信息
route.post('/update', (req, res) => {
	req.body = req.body || {};
	let $jobDATA = req.$jobDATA,
		jobId = req.body.jobId,
		flag = false;
	delete req.body.jobId;
	$jobDATA = $jobDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(jobId)) {
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
	writeFile('./json/job.json', $jobDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>删除部门信息
route.get('/delete', (req, res) => {
	let $jobDATA = req.$jobDATA,
		flag = false;
	let {
		jobId = 0
	} = req.query;
	$jobDATA = $jobDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(jobId)) {
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
	writeFile('./json/job.json', $jobDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

module.exports = route;