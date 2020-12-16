//this is express sequelize crud operation
//its only the functions no routes attach to this file 

const db = require("../models");
const { successResponse, errorResponse } = require("../helper/index");

exports.list = async function (req, res) {
	await db.Users.findAll({
		include: [{ model: db.employees }],
	}).then((users) => res.send(users));
};

exports.insert = async function (req, res) {
	try {
		id = { id: req.body.id };

		name = { name: req.body.name };
		email = { email: req.body.email };

		const payload = { ...id, ...name, ...email };

		const create = await db.Users.create(payload);
		console.log("user created successfull ", create);
		// res.send(create);
		return successResponse(req, res, { create });
	} catch (error) {
		return errorResponse(
			req,
			res,
			error.message,
			error.message === "Some thing went wrong!" ? 400 : 500
		);
	}
};

exports.remove = async function (req, res) {
	try {
		const rem = await db.Users.destroy({
			where: {
				id: req.params.id,
			},
		});
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

exports.update = async function (req, res) {
	try {
		const up = await db.Users.update(
			{ name: req.body.name, email: req.body.email },
			{
				where: {
					id: req.params.id,
				},
			}
		);
		console.log("update done successfully");
		return successResponse(req, res, { up });
	} catch (error) {
		return errorResponse(req, res, error.message);

	}
};

exports.bulkInsert = async function (req, res) {
	console.log("Hello bulk Insert API");

	try {
		const bulkInsert = await db.Users.bulkCreate([
			{
				id: '1223',
				name: 'raghav',
				email: 'raghav@gmail.com'
			},
			{
				id: '12311',
				name: 'chaman',
				email: 'chamna@gmail.com'
			},

		])
		console.log("user bulkcreate successful ");
		return successResponse(req, res, { bulkInsert });
	} catch (error) {

		console.log("something went wrong");
		return errorResponse(
			req,
			res,
			error.message,
			error.message === "Some thing went wrong!" ? 400 : 500
		);
	}

}