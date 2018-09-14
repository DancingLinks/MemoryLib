const Memory = require('./model/memory');

let syncAll = async() => {
  Memory.sync().then(function () {
    console.log('create Memory table success');
  });
};

let init = async () => {
  await syncAll();
};

module.exports = init;

