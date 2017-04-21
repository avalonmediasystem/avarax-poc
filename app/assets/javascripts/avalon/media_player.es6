export default class MediaPlayer {
    constructor (options) {
        this.manifest = options.manifest
        this.target = document.getElementById(options.target)
        this.render()
        this.bindStructureClick()
    }

    getSubtitles () {
        var subtitle
        this.manifest.content[0].items.forEach((item) => {
            item.body.forEach((body) => {
                if (body.type === "Text") {
                    subtitle = body
                }
            })
        })
        return subtitle
    }
    
    getVideoUri () {
        var uri
        this.manifest.content[0].items.forEach((item) => {
            item.body.forEach((body) => {
                if (body.type === "Choice") {
                    body.items.forEach((item) => {
                        if (item.label === "Medium") {
                            uri = item
                        }
                    })
                }
            })
        })
        return uri
    }
    
    getMediaFragment (uri) {
        if (uri !== undefined) {
            const fragment = uri.split('#t=')[1]
            console.log(fragment)
            return fragment
        } else {
            return undefined
        }
    }
    
    renderStructure (manifest, list, canvasId) {
        // Recurses the manifest structure and creates an html tree 
        manifest.map((data,index) => {
            console.log(data)
            if (data.type === 'Range') {
                canvasId = manifest[index].members[0].id
            }
            if (data.hasOwnProperty('members')) {
                if (this.getMediaFragment(canvasId) !== undefined) {
                    console.log(canvasId)
                    let mediaFragment = this.getMediaFragment(canvasId)
                    let mediaFragmentUri = this.getVideoUri().id + mediaFragment
                    list.push(`<ul><li><a class="media-structure-uri" data-media-fragment="${canvasId}">${data.label}</a></li>`)
                    this.renderStructure(data.members, list, canvasId)
                } else {
                    list.push(`<ul><li>${data.label}</li>`)
                    this.renderStructure(data.members, list, canvasId)
                }
            }
        })
        list.push('</ul>')
        return list.join('')
    }
    
    bindStructureClick () {
        document.querySelectorAll('a.media-structure-uri').forEach((el) => { el.addEventListener('click', () => {
            var mediaFragment = this.getMediaFragment(el.getAttribute('data-media-fragment'))
            var startSeconds = mediaFragment.split(',')[0]
            var mediaPlayer = document.getElementById('iiif-av-player')
            mediaPlayer.setCurrentTime(startSeconds)
            mediaPlayer.play()
        }, false) })
    }

    render (mediaFragment) {
        if (mediaFragment === undefined) { mediaFragment = this.getVideoUri().id }
        const videoElement = `<video class='av-player-controls' id="iiif-av-player" class="mejs__player" height="${this.manifest.height}" width="${this.manifest.width}" controls data-mejsoptions='{"pluginPath": "/path/to/shims/", "alwaysShowControls": "true"}'>
  <source src="${mediaFragment}" type="video/mp4">
  <track kind="subtitles" src="${this.getSubtitles().id}" srclang="${this.getSubtitles().language}" >
</video>`
        const videoStructure = this.renderStructure(this.manifest['structures'], [], '')
        this.target.innerHTML = `<div class='av-player'><div class='av-controls'>${videoStructure}</div><div class='av-controls'>${videoElement}</div></div>` 
        this.bindStructureClick()
        
        // Activate MediaElement
        var player = new MediaElementPlayer('iiif-av-player', {})
    }
}
