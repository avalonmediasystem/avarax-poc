describe('an Avalon media player', () => {

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



    beforeEach(() =>  {
        setFixtures(`
<div id='media-player-target'>
</div>
`)
    })



    it('creates HTML5 video markup when given a IIIF-AV manifest', () => {

        var mediaPlayer = Avalon.createVideoPlayer({'manifest': manifest, 'target': 'media-player-target'})
        var mediaPlayerMarkup = document.getElementById('media-player-target').innerHTML

        expect(mediaPlayerMarkup).toContain('<source src="http://dlib.indiana.edu/iiif_av/lunchroom_manners/medium/lunchroom_manners_512kb.mp4" type="video/mp4">')
        console.log(mediaPlayerMarkup)
    })

    

})
