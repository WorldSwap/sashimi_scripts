const helper = require('../helper');
const time_lock_config = require('./timelock-config');

async function generate(eta) {
    let action = {
        'newOwner' : time_lock_config.transferOwnership.newOwner,
        'contract' : time_lock_config.transferOwnership.contract,
        'sig' : time_lock_config.transferOwnership.sig
    }

    return generateByAction(eta, action);
}

async function generateByAction(action) {
    console.log('transferOwnership');
    let params = helper.encodeParameters(['address'], [action.newOwner]);
    console.log('eta:', action.eta.toString());

    return {
        'target': action.contract,
        'sig': action.sig,
        'params': params,
        'eta': action.eta
    }
}

module.exports = {
    generate: generate,
    generateByAction : generateByAction
}
