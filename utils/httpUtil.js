var host = 'http://localhost:3001/';

function request(url, postData) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url,
            header: {
                "content-type": "application/json;charset=UTF-8"
            },
            data: postData,
            method: 'POST',
            success: function (res) {
                resolve(res.data);
            },
            fail: function (err) {
                reject(err);
            },
        })
    })
}

function getData(url) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url,
            header: {
                "content-type": "application/json;charset=UTF-8"
            },
            method: 'GET',
            success: function (res) {
                resolve(res.data);
            },
            fail: function (err) {
                reject(err);
            },
        })
    })
}

module.exports.request = request;
module.exports.getData = getData;
