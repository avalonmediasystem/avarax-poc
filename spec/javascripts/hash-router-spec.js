describe('the Hash Router class', ()=> {
    it('returns an object with starting/stopping time and quality when given a location hash',() => {
        var HashRouter = require('avalon/hash-router')
        var hashRouter = new HashRouter({"id":"http://dlib.indiana.edu/iiif_av/lunchroom_manners/high/lunchroom_manners_1024kb.mp4","type":"Video","label":"High"})
        var options = hashRouter.processHash("#avalon/time/227,245/quality/Medium")
        expect(options).toEqual({start: "227", stop: "245", time: "227,245", quality: "Medium"})
        
    })
    it('returns an object with start/stop time when given a media fragment URI hash',()=>{
        var HashRouter = require('avalon/hash-router')
        var hashRouter = new HashRouter({"id":"http://dlib.indiana.edu/iiif_av/lunchroom_manners/high/lunchroom_manners_1024kb.mp4","type":"Video","label":"High"})
        var options = hashRouter.getMediaFragment('http://example.com/media.mkv#t=100,200')
        expect(options).toEqual({'start':'100','stop':'200'}) 
    })
    
})
