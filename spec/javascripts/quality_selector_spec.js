describe('a quality selector', () => {
    var manifest = {
        "id": "http://dlib.indiana.edu/iiif_av/canvas/1",
        "type": "Manifest",
        "label": "Beginning Reponsibility: Lunchroom Manners [motion picture] Coronet Films",
        "description": "Lunchroom manners are taught by following a boy through his lunchroom experience",
        "height": 937,
        "width": 1280,
        "duration": 660,
        "content": [
            {
                "id": "...",
                "type": "AnnotationPage",
                "items": [
                    {
                        "id": "...",
                        "type": "Annotation",
                        "motivation": "painting",
                        "body": [
                            {
                                "type": "Choice",
                                "choiceHint": "user",
                                "items": [
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/high/lunchroom_manners_1024kb.mp4",
                                        "type": "Video",
                                        "label": "High"
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/medium/lunchroom_manners_512kb.mp4",
                                        "type": "Video",
                                        "label": "Medium"
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/low/lunchroom_manners_256kb.mp4",
                                        "type": "Video",
                                        "label": "Low"
                                    }
                                ]
                            },
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/lunchroom_manners.vtt",
                                "type": "Text",
                                "format": "text/vtt",
                                "language": "en"
                            }
                        ],
                        "target": "http://dlib.indiana.edu/iiif_av/canvas/1"
                    }
                ]
            }
        ],
        "structures": [
            {
                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/0",
                "type": "Range",
                "viewingHint": "top",
                "label": "Lunchroom Manners",
                "members": [
                    {
                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=0,157",
                        "type": "Canvas"
                    },
                    {
                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/1",
                        "type": "Range",
                        "label": "Getting Ready for Lunch",
                        "members": [
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/1-1",
                                "type": "Range",
                                "label": "Washing Hands",
                                "members": [
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/1-1-1",
                                        "type": "Range",
                                        "label": "Using Soap",
                                        "members": [
                                            {
                                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=157,160",
                                                "type": "Canvas"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=160,165",
                                        "type": "Canvas"
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/1-1-2",
                                        "type": "Range",
                                        "label": "Rinsing Well",
                                        "members": [
                                            {
                                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=165,178",
                                                "type": "Canvas"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=178,227",
                        "type": "Canvas"
                    },
                    {
                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/2",
                        "type": "Range",
                        "label": "In the Lunchroom",
                        "members": [
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/2-1",
                                "type": "Range",
                                "label": "At the Counter",
                                "members": [
                                    {
                                        "type": "Range",
                                        "label": "Getting Tray",
                                        "members": [
                                            {
                                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=227,245",
                                                "type": "Canvas"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=245,258",
                                        "type": "Canvas"
                                    },
                                    {
                                        "type": "Range",
                                        "label": "Choosing Food",
                                        "members": [
                                            {
                                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=258,288",
                                                "type": "Canvas"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=288,301",
                                        "type": "Canvas"
                                    },
                                    {
                                        "type": "Range",
                                        "label": "There will be Cake",
                                        "members": [
                                            {
                                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=301,308",
                                                "type": "Canvas"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=308,323",
                                "type": "Canvas"
                            },
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/2-2",
                                "type": "Range",
                                "label": "At the Table",
                                "members": [
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/2-2-1",
                                        "type": "Range",
                                        "label": "Sitting Quietly",
                                        "members": [
                                            {
                                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=323,333",
                                                "type": "Canvas"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=333,362",
                                        "type": "Canvas"
                                    },
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/2-2-2",
                                        "type": "Range",
                                        "label": "Eating Neatly",
                                        "members": [
                                            {
                                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=362,378",
                                                "type": "Canvas"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=378,448",
                        "type": "Canvas"
                    },
                    {
                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/3",
                        "type": "Range",
                        "label": "Leaving the Lunchroom",
                        "members": [
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/3-1",
                                "type": "Range",
                                "label": "Cleaning Up",
                                "members": [
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=448,492",
                                        "type": "Canvas"
                                    }
                                ]
                            },
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=492,511",
                                "type": "Canvas"
                            },
                            {
                                "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/3-2",
                                "type": "Range",
                                "label": "Putting Things Away",
                                "members": [
                                    {
                                        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=511,527",
                                        "type": "Canvas"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    var QualitySelector = require('avalon/quality-selector')
    var qualitySelector = new QualitySelector()
    
    it('is able to change the quality in all the structure links', () => {
        var playerMarkup = `<div class="av-controls"><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/0,157/quality/High" class="media-structure-uri">Lunchroom Manners</a></li><ul class="canvas-range"><a data-target="#" data-turbolinks="false" class="canvas-url" href="#avalon/time/157,178/quality/High">Getting Ready for Lunch</a><ul class="canvas-range"><a data-target="#" data-turbolinks="false" class="canvas-url" href="#avalon/time/157,178/quality/High">Washing Hands</a><ul><li class="active"><a data-turbolinks="false" data-target="#" href="#avalon/time/157,160/quality/High" class="media-structure-uri">Using Soap</a></li></ul><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/165,178/quality/High" class="media-structure-uri">Rinsing Well</a></li></ul></ul></ul><ul class="canvas-range"><a data-target="#" data-turbolinks="false" class="canvas-url" href="#avalon/time/227,378/quality/High">In the Lunchroom</a><ul class="canvas-range"><a data-target="#" data-turbolinks="false" class="canvas-url" href="#avalon/time/227,308/quality/High">At the Counter</a><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/227,245/quality/High" class="media-structure-uri">Getting Tray</a></li></ul><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/258,288/quality/High" class="media-structure-uri">Choosing Food</a></li></ul><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/301,308/quality/High" class="media-structure-uri">There will be Cake</a></li></ul></ul><ul class="canvas-range"><a data-target="#" data-turbolinks="false" class="canvas-url" href="#avalon/time/323,378/quality/High">At the Table</a><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/323,333/quality/High" class="media-structure-uri">Sitting Quietly</a></li></ul><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/362,378/quality/High" class="media-structure-uri">Eating Neatly</a></li></ul></ul></ul><ul class="canvas-range"><a data-target="#" data-turbolinks="false" class="canvas-url" href="#avalon/time/448,527/quality/High">Leaving the Lunchroom</a><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/448,492/quality/High" class="media-structure-uri">Cleaning Up</a></li></ul><ul><li><a data-turbolinks="false" data-target="#" href="#avalon/time/511,527/quality/High" class="media-structure-uri">Putting Things Away</a></li></ul></ul></ul></div>`
        
        var newMarkup = qualitySelector.changeQualityMarkup(playerMarkup, 'High', 'Medium')
        expect(newMarkup.search('/quality/Medium')).toBeGreaterThan(0)
    })

    it('is able to tell you what the current quality is', () => {
        var windowLocationHash = 'http://localhost:8888/#avalon/time/157,160/quality/High'
        expect(qualitySelector.currentQuality(windowLocationHash)).toEqual('High')
    })

    it('can return an array of just the quality choices', () => {
        expect(qualitySelector.qualityChoices(manifest, '', [])[0].id).toEqual('http://dlib.indiana.edu/iiif_av/lunchroom_manners/high/lunchroom_manners_1024kb.mp4')
    })

    it('can output an HTML representation of the quality choices', () => {
        var choices = qualitySelector.qualityChoices(manifest, '', [])
        expect(qualitySelector.renderChoices(choices)).toEqual(`<ul><li class='quality-choice' data-quality-choice='http://dlib.indiana.edu/iiif_av/lunchroom_manners/high/lunchroom_manners_1024kb.mp4'>High</li>,<li class='quality-choice' data-quality-choice='http://dlib.indiana.edu/iiif_av/lunchroom_manners/medium/lunchroom_manners_512kb.mp4'>Medium</li>,<li class='quality-choice' data-quality-choice='http://dlib.indiana.edu/iiif_av/lunchroom_manners/low/lunchroom_manners_256kb.mp4'>Low</li></ul>`)
    })
})
