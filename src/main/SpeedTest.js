const BinanceApi = require('./BinanceApi');

const SpeedTest = {

    ping() {
        const before = new Date().getTime();
        return BinanceApi.time()
            .then(() => new Date().getTime() - before);
    },

    multiPing(pingCount=5) {
        let pings = [];
        let promiseChain = Promise.resolve();

        for (let i=0; i<pingCount; i++) {
            promiseChain = promiseChain.then(SpeedTest.ping).then((ping) => pings.push(ping));
        }

        return promiseChain.then(() => pings);
    }

};

module.exports = SpeedTest;
