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
      
        Avalon.mediaPlayer({'manifest':manifest, 'target':'media-player-target'})
        var mediaPlayerMarkup = document.getElementById('media-player-target').innerHTML
	console.log(document.getElementById('media-player-target').innerHTML)
        expect(mediaPlayerMarkup).toEqual(`<div class="av-player"><div class="av-controls"><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=0,157">Lunchroom Manners</a></li><ul><li>Getting Ready for Lunch</li><ul><li>Washing Hands</li><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=157,160">Using Soap</a></li></ul><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=165,178">Rinsing Well</a></li></ul></ul></ul><ul><li>In the Lunchroom</li><ul><li>At the Counter</li><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=227,245">Getting Tray</a></li></ul><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=258,288">Choosing Food</a></li></ul><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=301,308">There will be Cake</a></li></ul></ul><ul><li>At the Table</li><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=323,333">Sitting Quietly</a></li></ul><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=362,378">Eating Neatly</a></li></ul></ul></ul><ul><li>Leaving the Lunchroom</li><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=448,492">Cleaning Up</a></li></ul><ul><li><a class="media-structure-uri" data-media-fragment="http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=511,527">Putting Things Away</a></li></ul></ul></ul></div><div class="av-controls"><span class="mejs__offscreen">Video Player</span><div id="mep_0" class="mejs__container mejs__container-keyboard-inactive av-player-controls mejs__video" tabindex="0" role="application" aria-label="Video Player" style="width: 1280px; height: 937px;"><div class="mejs__inner"><div class="mejs__mediaelement"><mediaelementwrapper id="iiif-av-player"><video class="av-player-controls" id="iiif-av-player_html5" height="937" width="1280" data-mejsoptions="{&quot;pluginPath&quot;: &quot;/path/to/shims/&quot;, &quot;alwaysShowControls&quot;: &quot;true&quot;}" preload="none" src="http://dlib.indiana.edu/iiif_av/lunchroom_manners/medium/lunchroom_manners_512kb.mp4">
  <source src="http://dlib.indiana.edu/iiif_av/lunchroom_manners/medium/lunchroom_manners_512kb.mp4" type="video/mp4">
  <track kind="subtitles" src="http://dlib.indiana.edu/iiif_av/lunchroom_manners/lunchroom_manners.vtt" srclang="en">
</video></mediaelementwrapper></div><div class="mejs__layers"><div class="mejs__captions-layer mejs__layer" style="display: none; width: 1280px; height: 937px;"><div class="mejs__captions-position mejs__captions-position-hover"><span class="mejs__captions-text"></span></div></div><div class="mejs__poster mejs__layer" style="display: none; width: 1280px; height: 937px;"></div><div class="mejs__overlay mejs__layer" style="display: none; width: 1280px; height: 937px;"><div class="mejs__overlay-loading"><span class="mejs__overlay-loading-bg-img"></span></div></div><div class="mejs__overlay mejs__layer" style="display: none; width: 1280px; height: 937px;"><div class="mejs__overlay-error"></div></div><div class="mejs__overlay mejs__layer mejs__overlay-play" style="width: 1280px; height: 937px;"><div class="mejs__overlay-button" role="button" tabindex="0" aria-label="Play" aria-pressed="false"></div></div></div><div class="mejs__controls"><div class="mejs__button mejs__playpause-button mejs__play"><button type="button" aria-controls="mep_0" title="Play" aria-label="Play" tabindex="0"></button></div><div class="mejs__time mejs__currenttime-container" role="timer" aria-live="off"><span class="mejs__currenttime">00:00</span></div><div class="mejs__time-rail" style="width: 1032px;"><span class="mejs__time-total mejs__time-slider"><span class="mejs__time-buffering" style="display: none;"></span><span class="mejs__time-loaded"></span><span class="mejs__time-current"></span><span class="mejs__time-handle"></span><span class="mejs__time-float"><span class="mejs__time-float-current">00:00</span><span class="mejs__time-float-corner"></span></span></span></div><div class="mejs__time mejs__duration-container"><span class="mejs__duration">00:00</span></div><div class="mejs__button mejs__captions-button"><button type="button" aria-controls="mep_0" title="Captions/Subtitles" aria-label="Captions/Subtitles" tabindex="0"></button><div class="mejs__captions-selector mejs__offscreen"><ul class="mejs__captions-selector-list"><li class="mejs__captions-selector-list-item"><input type="radio" class="mejs__captions-selector-input" name="mep_0_captions" id="mep_0_captions_none" value="none" checked=""><label class="mejs__captions-selector-label mejs__captions-selected" for="mep_0_captions_none">None</label></li><li class="mejs__captions-selector-list-item"><input type="radio" class="mejs__captions-selector-input" name="mep_0_captions" id="mep_0_track_0_subtitles_en" value="mep_0_track_0_subtitles_en" disabled=""><label class="mejs__captions-selector-label">English (loading)</label></li></ul></div></div><div class="mejs__button mejs__volume-button mejs__mute"><button type="button" aria-controls="mep_0" title="Mute" aria-label="Mute" tabindex="0"></button><a href="javascript:void(0);" class="mejs__volume-slider"><span class="mejs__offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span><div class="mejs__volume-total"><div class="mejs__volume-current" style="bottom: 0px; height: 80%;"></div><div class="mejs__volume-handle" style="bottom: 80%; margin-bottom: -3px;"></div></div></a></div><div class="mejs__button mejs__fullscreen-button"><button type="button" aria-controls="mep_0" title="Fullscreen" aria-label="Fullscreen" tabindex="0"></button></div></div><div class="mejs__clear"></div></div></div></div></div>`)
    })


})
