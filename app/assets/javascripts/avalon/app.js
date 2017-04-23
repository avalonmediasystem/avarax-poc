Avalon = {
    initialize: function () {
        this.mediaPlayer()
    },

    mediaPlayer: function () {
	var MediaPlayer = require('avalon/media-player')
        if ($('[data-iiifav-source]')) {
            console.log($('[data-iiifav-source]').data().iiifavSource)
            $.get($('[data-iiifav-source]').data().iiifavSource, (manifest) => {
                console.log(manifest)
                var options =  { 'manifest' : JSON.parse(manifest), 'target' :  $('[data-iiifav-source]').attr('id') }
                return new MediaPlayer(options)
            })
        }
        
    }
}
