Avalon = {
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

   
    }
}




