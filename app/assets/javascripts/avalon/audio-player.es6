import MediaPlayer from 'avalon/media-player'

export default class AudioPlayer extends MediaPlayer {
  constructor (options) {
    super(options)
    this.render(options)
  }

  // Audio player configurations
  getAudioConfig () {
    return {
      audioHeight: this.manifest.height || 200,
      audioWidth: this.manifest.width || 600
    }
  }

  getAudioItems () {
    let audioItems = []
    this.manifest.content[0].items[0].body[0].items.forEach((item) => {
      if (item.type === 'Audio') {
        audioItems.push(item)
      }
    })
    return audioItems
  }

  render (options = { audio: {} }) {
    // Assume for now only one audio item, with different quality files
    let audioItems = this.getAudioItems()

    options.audio = options.audio || {}
    options.audio.quality = options.audio.quality || 'Medium'

    if (audioItems.length > 0) {
      audioItems.forEach((item) => {
        if (item.label === options.audio.quality) {
          const audioElement = `<audio controls id="iiif-av-audio-player">
            <source src="${item.id}" type="audio/mp3" data-quality="${item.label}">
          </audio>`
          this.target.innerHTML = `<div class='av-player'><div class='av-controls'>${audioElement}</div></div>`

          var audioPlayer = new MediaElementPlayer('iiif-av-audio-player', this.getAudioConfig())
        }
      })
    }
  }
}
