Avalon = {
  initialize: function () {
    if ($('[data-iiifav-source]').length > 0) {
      this.mediaPlayerVideo()
    }
    if ($('[data-iiifav-audio-source]').length > 0) {
      this.mediaPlayerAudio()
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
