const redis = require("redis");

const getClient = () => {
	return redis.createClient({
		host: "localhost",
		port: 3000,
	});
};

module.exports.getClient = getClient;
