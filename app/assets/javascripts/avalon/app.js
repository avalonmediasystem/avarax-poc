Avalon = {
/*
    initialize: function () {
        this.mediaPlayer()
        this.extents()
    },

    mediaPlayer: function (options) {
	var MediaPlayer = require('avalon/media-player')
        if ($('[data-iiifav-source]').length > 0) {
           
            $.get($('[data-iiifav-source]').data().iiifavSource, (manifest) => {
                console.log(manifest)
                var options =  { 'manifest' : JSON.parse(manifest), 'target' :  $('[data-iiifav-source]').attr('id') }
                return new MediaPlayer(options)
            })
        } else {
            var options =  { 'manifest' : options.manifest, 'target' :  options.target }
            return new MediaPlayer(options)
        }

*/   
  initialize: function () {
    if ($('[data-iiifav-source]').length > 0) {
      this.mediaPlayerVideo()
    }
    if ($('[data-iiifav-audio-source]').length > 0) {
      this.mediaPlayerAudio()
      origin/feature-play-audio
    }
  },

  createPlayer: function (options) {
    var MediaPlayer = require('avalon/media-player')
    return new MediaPlayer(options)
  },

  mediaPlayerAudio: function () {
    var options = {}
    var manifestSource = $('[data-iiifav-audio-source]').data().iiifavAudioSource
    console.log(manifestSource)
    options.audio = {}
    options.target = $('[data-iiifav-audio-source]').attr('id')

    $.get(manifestSource, (manifest) => {
      console.log(manifest)
      options.manifest = JSON.parse(manifest)
      this.createPlayer(options)
    })
  },

  mediaPlayerVideo: function () {
    var options = {}
    var manifestSource = $('[data-iiifav-source]').data().iiifavSource
    console.log(manifestSource)
    options.target = $('[data-iiifav-source]').attr('id')

    $.get(manifestSource, (manifest) => {
      console.log(manifest)
      options.manifest = JSON.parse(manifest)
      this.createPlayer(options)
    })
  }
}




