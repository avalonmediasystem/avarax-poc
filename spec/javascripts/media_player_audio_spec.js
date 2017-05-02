describe('an Avalon media player', () => {
  var manifest = {
     "id":"http://dlib.indiana.edu/iiif_av/canvas/1",
     "type":"Manifest",
     "label":"Florence Nightingale : greetings to the dear old comrades of Balaclava.",
     "description":"Florence Nightingale : greetings to the dear old comrades of Balaclava.",
     "height":50,
     "width":480,
     "duration":660,
     "content":[
        {
           "id":"...",
           "type":"AnnotationPage",
           "items":[
              {
                 "id":"...",
                 "type":"Annotation",
                 "motivation":"painting",
                 "body":[
                    {
                       "type":"Choice",
                       "choiceHint":"user",
                       "items":[
                         {
                            "id":"https://dlcs.io/iiif-av/wellcome/1/0128dccf-e2b8-4b0d-b41a-2d9edc6952f5/full/max/default.mp3",
                            "type":"Audio",
                            "label":"High"
                         },
                         {
                            "id":"https://dlcs.io/iiif-av/wellcome/1/0128dccf-e2b8-4b0d-b41a-2d9edc6952f5/full/max/default.mp3",
                            "type":"Audio",
                            "label":"Medium"
                         }
                       ]
                    }
                 ],
                 "target":"http://dlib.indiana.edu/iiif_av/canvas/1"
              }
           ]
        }
     ]
  }

  beforeEach(() => {
    setFixtures(`<div id='media-player-audio-target'></div>`)
  })

  it('creates HTML5 audio markup with default values when given a IIIF-AV manifest', () => {
    var mediaPlayer = Avalon.createPlayer({
      'audio': {},
      'manifest': manifest,
      'target': 'media-player-audio-target'
    })
    var mediaPlayerMarkup = document.getElementById('media-player-audio-target').innerHTML

    console.log('mediaPlayerMarkup', mediaPlayerMarkup)
    expect(mediaPlayerMarkup).toContain('<div class="av-player">')
    expect($('#media-player-audio-target')).toContainElement('div.av-player')
    expect($('.av-player')).toContainElement('div.av-controls')
    expect($('#iiif-av-audio-player')).toContainElement('audio')
    expect($('#iiif-av-audio-player > audio')).toHaveAttr('src', 'https://dlcs.io/iiif-av/wellcome/1/0128dccf-e2b8-4b0d-b41a-2d9edc6952f5/full/max/default.mp3')
    expect($('.mejs__container')).toHaveAttr('style', 'width: 480px; height: 50px;')
    expect($('#iiif-av-audio-player > audio > source')).toHaveAttr('data-quality', 'Medium')
  })

  it('creates HTML5 audio markup for a High quality file', () => {
    var mediaPlayer = Avalon.createPlayer({
      'audio': { quality: 'High' },
      'manifest': manifest,
      'target': 'media-player-audio-target'
    })
    var mediaPlayerMarkup = document.getElementById('media-player-audio-target').innerHTML
    console.log('mediaPlayerMarkup', mediaPlayerMarkup)
    expect($('#iiif-av-audio-player > audio > source')).toHaveAttr('data-quality', 'High')
  })
})
