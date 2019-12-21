const express = require('express'),
	route = express.Router();

const {
	success,
	getCustomerInfo,
	getVisitInfo
} = require('../utils/tools');

const {
	writeFile
} = require('../utils/promiseFS');


//=>获取回访列表
route.get('/list', (req, res) => {
	let data = req.$visitDATA,
		{
			customerId = 0
		} = req.query;
	data = data.filter(item => {
		return parseFloat(item.customerId) === parseFloat(customerId);
	});
	data = data.map(item => {
		return {
			id: item.id,
			customerId: item.customerId,
			customerName: getCustomerInfo(item.customerId, req).name,
			visitText: item.visitText,
			visitTime: item.visitTime
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

//=>获取回访信息
route.get('/info', (req, res) => {
	let {
		visitId = 0
	} = req.query;
	let data = getVisitInfo(visitId, req);
	if ('id' in data) {
		res.send(success(true, {
			data: {
				id: data.id,
				customerId: data.customerId,
				customerName: getCustomerInfo(data.customerId, req).name,
				visitText: data.visitText,
				visitTime: data.visitTime
			}
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});

//=>增加新回访
route.post('/add', (req, res) => {
	let $visitDATA = req.$visitDATA,
		passDATA = null;
	passDATA = Object.assign({
		id: $visitDATA.length === 0 ? 1 : (parseFloat($visitDATA[$visitDATA.length - 1]['id']) + 1),
		customerId: '',
		visitText: '',
		visitTime: '',
		time: new Date().getTime(),
		state: 0
	}, (req.body || {}));
	$visitDATA.push(passDATA);

	writeFile('./json/visit.json', $visitDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>修改回访信息
route.post('/update', (req, res) => {
	req.body = req.body || {};
	let $visitDATA = req.$visitDATA,
		visitId = req.body.visitId,
		flag = false;
	delete req.body.visitId;
	$visitDATA = $visitDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(visitId)) {
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
	writeFile('./json/visit.json', $visitDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

//=>删除回访信息
route.get('/delete', (req, res) => {
	let $visitDATA = req.$visitDATA,
		flag = false;
	let {
		visitId = 0
	} = req.query;
	$visitDATA = $visitDATA.map(item => {
		if (parseFloat(item.id) === parseFloat(visitId)) {
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
	writeFile('./json/visit.json', $visitDATA).then(() => {
		res.send(success(true));
	}).catch(() => {
		res.send(success(false));
	});
});

module.exports = route;