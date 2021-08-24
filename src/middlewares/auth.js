const jwt = require("jsonwebtoken");
const _secretKey = "aky876mnb0qwer";

exports.isAuth = (req, res, next) => {
		if (!req.headers.authorization) {
				const message = {
						status: 403,
						message: "Token not found"
				}

				return res.status(403).json(message);
		}


		try {
			const token = req.headers.authorization.split(' ')[1];
				jwt.verify(token, _secretKey);
				next();
		} catch (err) {
				const message = {
						status: 403,
						message: "Token not found"
				}

				return res.status(403).json(message);

		}
}

