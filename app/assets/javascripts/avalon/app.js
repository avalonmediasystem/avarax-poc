Avalon = {
  initialize: function () {
    this.mediaPlayer()
  },

  mediaPlayer: function () {
    var MediaPlayer = require('avalon/media-player')
    var $audioDiv = $('[data-iiifav-audio-source]')
    var audioSource

    if ($('[data-iiifav-source]')) {
      console.log($('[data-iiifav-source]').data().iiifavSource)
      $.get($('[data-iiifav-source]').data().iiifavSource, (manifest) => {
        console.log(manifest)
        var options = {
          'manifest': JSON.parse(manifest),
          'target': $('[data-iiifav-source]').attr('id')
        }
        return new MediaPlayer(options)
      })
    }

    // Audio player
    if ($audioDiv) {
      audioSource = $audioDiv.data().iiifavAudioSource

      $.get(audioSource, (manifest) => {
        console.log(manifest)
        let options = {
          'audio': true,
          'manifest': JSON.parse(manifest),
          'target': $('[data-iiifav-audio-source]').attr('id')
        }
        return new MediaPlayer(options)
      })
    }
  }
}
