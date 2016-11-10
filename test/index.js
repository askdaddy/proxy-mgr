/**
 * Created by askdaddy on 2016/11/7.
 */

var assert = require('assert'),
    app = require('../index'),
    regedit = require('regedit'),
    it = require('mocha').it,
    describe = require("mocha").describe;


describe('Set proxy tests', function () {
    it('should set Proxy to `1`, ProxyServer to `http://127.0.0.1:4411`', function () {
        app.setProxy('http://127.0.0.1:4411');

        var server = '', enable = 0;
        regedit.list('HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings', function (err, result) {
            var values = result['HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings'].values;
            enable = values.ProxyEnable;
            server = values.ProxyServer;
            console.log(values.ProxyEnable);
            console.log(values.ProxyServer);
            assert.equal(server, 'http://127.0.0.1:4411');
            assert.equal(enable, 1);
        })




    })
});

describe('Remove proxy tests', function () {
    it('should set Proxy to `0`, ProxyServer to empty', function () {
        app.delProxy();

        var server = '', enable = 0;
        regedit.list('HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings', function (err, result) {
            var values = result['HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings'].values;
            enable = values.ProxyEnable;
            server = values.ProxyServer;
            console.log(values.ProxyEnable);
            console.log(values.ProxyServer);
            assert.equal(server, '');
            assert.equal(enable, 0);
        })



    })
});