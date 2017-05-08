import MediaPlayer from 'avalon/media-player'

export default class AudioPlayer extends MediaPlayer {
  constructor (options) {
    super(options)
    // Default use the first sequence to grab canvases
    this.canvases = options.manifest.sequences[0].canvases
    this.currentCanvas = this.getCanvas(this.canvases[0].id)
    this.render(options)
  }

  // Audio player configurations
  getAudioConfig () {
    return {
      audioHeight: this.manifest.height || 50,
      audioWidth: '100%'
    }
  }

  getAudioItems (canvas) {
    let audioItems = []
    canvas.content[0].items[0].body[0].items.forEach((item) => {
      if (item.type === 'Audio') {
        audioItems.push(item)
      }
    })
    return audioItems
  }

  getCanvas (id) {
    let targetCanvas = {}
    this.canvases.forEach((canvas) => {
      if (id.slice(id.indexOf('://')) === canvas.id.slice(canvas.id.indexOf('://'))) {
        targetCanvas = canvas
      }
    })
    return targetCanvas
  }

  render (options = { audio: {} }) {
    // Assume for now only one audio item, with different quality files
    let audioItems = this.getAudioItems(this.currentCanvas)

    options.audio = options.audio || {}
    options.audio.quality = options.audio.quality || 'Medium'

    if (audioItems.length > 0) {
      audioItems.forEach((item) => {
        if (item.label === options.audio.quality) {
          const audioElement =
            `<audio controls id="iiif-av-audio-player" width="100%">
              <source src="${item.id}" type="audio/mp3" data-quality="${item.label}">
            </audio>`
          const audioStructure = this.createStructure(this.manifest['structures'], [])

          this.target.innerHTML = `
            <div class='av-player'>
              <div class='av-controls'>${audioElement}</div>
            </div>
            <div class="alert alert-info"><strong>TODO:</strong> Fix links below to target audio player instead of video (might need to break out into a separate view, or just display one player at a time?)</div>
            ${audioStructure}
          `
          let audioPlayer = new MediaElementPlayer('iiif-av-audio-player', this.getAudioConfig())
        }
      })
    }
  }
}
