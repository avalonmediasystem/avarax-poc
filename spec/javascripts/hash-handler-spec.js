describe('the Hash Handler class', ()=> {
    it('returns an object with starting/stopping time and quality when given a location hash',() => {
        var HashHandler = require('avalon/hash-handler')
        var hashHandler = new HashHandler({"id":"http://dlib.indiana.edu/iiif_av/lunchroom_manners/high/lunchroom_manners_1024kb.mp4","type":"Video","label":"High"})
        var options = hashHandler.processHash("#avalon/time/227,245/quality/Medium")
        expect(options).toEqual({start: "227", stop: "245", time: "227,245", quality: "Medium"})
        
    })
})
