import MediaPlayer from 'avalon/media-player'
import HashHandler from 'avalon/hash-handler'

export default class AudioPlayer extends MediaPlayer {
  constructor (options) {
    super(options)
    // Default use the first sequence to grab canvases
    this.canvases = options.manifest.sequences[0].canvases
    this.currentCanvas = this.getCanvas(this.canvases[0].id)
    console.log(this.getQualityChoices())
    this.hashHandler = new HashHandler({'qualityChoices': this.getQualityChoices()})
    this.render(options)
    this.getLinks()
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
            `<audio controls id="iiif-av-player" width="100%">
              <source src="${item.id}" type="audio/mp3" data-quality="${item.label}">
            </audio>`
          const audioStructure = this.createStructure(this.manifest['structures'], [])

          this.target.innerHTML = `
            <div class='av-player'>
              <div class='av-controls'>${audioElement}</div>
            </div>
            ${audioStructure}
          `
            let audioPlayer = new MediaElementPlayer('iiif-av-player', this.getAudioConfig())

               // Start listening for changes in the hash
    this.hashHandler.bindHashChange()
        }
      })
    }
  }
}
