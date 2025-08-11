import { expect } from 'chai'

describe('Array @quickTest@', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present @successExample@', function () {
      expect([1, 2, 3].indexOf(4)).to.be.equals(-1)
    })

    it('should return 1 when the value is present @failureExample@', function () {
      expect([1, 2, 3].indexOf(5)).to.be.equals(1)
    })
  })
})
