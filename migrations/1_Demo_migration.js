var Demo = artifacts.require('./Demo.sol');

module.exports = function (deployer) {
	// deployment steps
	deployer.deploy(Demo);
};
