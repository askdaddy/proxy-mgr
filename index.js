/**
 * Created by askdaddy on 2016/11/7.
 */
var regedit = require('regedit');
var app = {
    setProxy: function (proxy_server) {
        // var ky = new Key(windef.HKEY.HKEY_CURRENT_USER, 'Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings', windef.KEY_ACCESS.KEY_ALL_ACCESS);

        regedit.putValue({
            'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings': {

                'ProxyServer': {
                    type: 'REG_SZ',
                    value: proxy_server
                },
                'ProxyEnable': {
                    type: 'REG_DWORD',
                    value: 1
                }
            }
        }, function (err) {
            console.log(err);
        });
    },
    delProxy: function () {
        regedit.putValue({
            'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings': {
                'ProxyEnable': {
                    type: 'REG_DWORD',
                    value: 0
                },
                'ProxyServer': {
                    type: 'REG_SZ',
                    value: ''
                }
            }
        }, function (err) {
            console.log(err);
        });
    }
};

module.exports = app;
