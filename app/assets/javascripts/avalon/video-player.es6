import MediaPlayer from 'avalon/media-player'
import HashRouter from 'avalon/hash-router'

export default class VideoPlayer extends MediaPlayer {
    constructor(options) {
        super(options)
        this.render()
        this.hashRouter = new HashRouter
    }

    render (mediaFragment) {
        console.log('rendering?')
        /**
         * @param {object} mediaFragment - a mediaFragment
         * this method creates the video element
         **/

    if (mediaFragment === undefined) { mediaFragment = this.getVideoUri().id }
    const videoElement = `<video class='av-player-controls' id="iiif-av-player" class="mejs__player" height="${this.manifest.height}" width="${this.manifest.width}" controls data-mejsoptions='{"pluginPath": "", "alwaysShowControls": "true"}'>
  <source src="${mediaFragment}" type="video/mp4">
  <track kind="subtitles" src="${this.getSubtitles().id}" srclang="${this.getSubtitles().language}" >
</video>`
    const videoStructure = this.createStructure(this.manifest['structures'], [])
    this.target.innerHTML = `<div class='av-player'><div class='av-controls'>${videoStructure}</div><div class='av-controls'>${videoElement}</div></div>`

        // Activate MediaElement
    var player = new MediaElementPlayer('iiif-av-player', {})

        // Start listening for changes in the hash
    this.hashRouter.bindHashChange()
  }

}
