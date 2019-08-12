const httpUtil = require('../../utils/httpUtil')

describe('http请求封装', () => {
    test('getData', async (done) => {
        const res = await httpUtil.getData('/data')
        expect(res.data).toBe('hello')
        done()
    })
});
