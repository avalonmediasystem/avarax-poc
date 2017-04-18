describe('a Hyrax JS example', () => {
    it('should have some example text', () => {
      var Example = require('example')
      var example = new Example()
      expect(example.text()).toEqual('I\'m just an example')
    })
})
