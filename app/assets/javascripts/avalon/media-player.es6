export default class MediaPlayer {
    constructor (options) {
        this.manifest = options.manifest
        this.target = document.getElementById(options.target)
        this.render()
        this.getLinks()
    }

    getLinks() {
        $('.canvas-range').each((el) => {
            try {
                //console.log(this.getExtentForCanvas($('.canvas-range')[el],[],[]))
                console.log( $(`.canvas-range:eq( ${el} )`).find('.canvas-url').attr('href','#t=' + this.getExtentForCanvas($('.canvas-range')[el],[],[])))
            } catch (e)
            {
                console.log(e)
            }
        })
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
            if (fragment !== undefined) {
                const splitFragment = fragment.split(',')
                const duration = splitFragment[1] - splitFragment[0]
                return { 'start': splitFragment[0],
                         'stop': splitFragment[1],
                         'duration': duration * 1000  }
            } else {
                return undefined
            }
        } else {
            
            return undefined
        }
    }
    
    createStructure (manifest, list, canvasId) {
        // Recurses the manifest structure and creates an html tree
        manifest.map((data,index) => {    
            if (data.type === 'Range') {
                if (  manifest[index].members[0].id !== undefined) {
                    canvasId =  manifest[index].members[0].id
                }
            }
            if (data.hasOwnProperty('members')) {
                // Parent elements
                if (this.getMediaFragment(canvasId) !== undefined) {
                    
                    let mediaFragment = this.getMediaFragment(canvasId)

                    list.push(`<ul><li><a data-turbolinks='false' href="#t=${mediaFragment.start},${mediaFragment.stop}" name="#t=${mediaFragment.start}.${mediaFragment.stop}" class="media-structure-uri" >${data.label}</a></li>`)
                    this.createStructure(data.members, list,canvasId)
                } else {
                    list.push(`<ul class='canvas-range'><a data-turbolinks='false' class='canvas-url' href='#t='>${data.label}</a></li>`)
                    this.createStructure(data.members, list,canvasId)
                }
            }
        })
        list.push('</ul>')
        return list.join('')
    }

    getExtentForCanvas(el, splits, newSplits) {
        $(el).children().find('a').each(function() {
           
           var splitHref = $(this).attr('href').split('#t=')
           
            splitHref.forEach((split) => {
                if (split != "") { splits.push(split) } 
                newSplits = splits.join(',').split(',')
            }) 
        })
        return `${newSplits[0]},${newSplits[newSplits.length-1]}`
    }
    
    
    playFromHash() {
        var mediaFragment = this.getMediaFragment(window.location.hash)
        var mediaPlayer = document.getElementById('iiif-av-player')
        mediaPlayer.setCurrentTime(mediaFragment.start)
        mediaPlayer.play()
        setTimeout(() => {
            mediaPlayer.pause()
        }, mediaFragment.duration)
    }
    
    bindHashChange () {
        if (window.location.hash.indexOf('#t=') >= 0) {
            this.playFromHash()
        }
        window.onhashchange = () => {
            this.playFromHash()
        }
    }

    render (mediaFragment) {
        if (mediaFragment === undefined) { mediaFragment = this.getVideoUri().id }
        const videoElement = `<video class='av-player-controls' id="iiif-av-player" class="mejs__player" height="${this.manifest.height}" width="${this.manifest.width}" controls data-mejsoptions='{"pluginPath": "/path/to/shims/", "alwaysShowControls": "true"}'>
  <source src="${mediaFragment}" type="video/mp4">
  <track kind="subtitles" src="${this.getSubtitles().id}" srclang="${this.getSubtitles().language}" >
</video>`
        const videoStructure = this.createStructure(this.manifest['structures'], [])
        this.target.innerHTML = `<div class='av-player'><div class='av-controls'>${videoStructure}</div><div class='av-controls'>${videoElement}</div></div>` 
        
        // Activate MediaElement
        var player = new MediaElementPlayer('iiif-av-player', {})

        // Start listening for changes in the hash
        this.bindHashChange()
    }
}
