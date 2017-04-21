export default class MediaPlayer {
    constructor (options) {
        this.manifest = options.manifest
        this.target = document.getElementById(options.target)
        this.render()
        this.structureClick()

        this.chosenQuality
        this.videoUri
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
        var quality = this.getChosenQuality().quality
        var uri

        this.manifest.content[0].items.forEach((item) => {
            item.body.forEach((body) => {
                if (body.type === "Choice") {
                    body.items.forEach((item) => {
                        if (item.label === quality) {
                            uri = item
                        }
                    })
                }
            })
        })
        return uri
    }
    
    getMediaFragment (uri) {
        const fragment = uri.split('#t=')[1]
        return '#t=' + fragment
    }

    renderQualityControls() {
        var qualityControls = [`<select class='video-quality-controls'>`]
        this.manifest.content[0].items.forEach((item) => {
            item.body.forEach((body) => {
                if (body.type === "Choice") {
                    body.items.forEach((item) => {
                        qualityControls.push(`<option class='quality-control'>${item.label}</option>`)
                    })
                }
            })
        })
        qualityControls.push('</select>')
        return qualityControls.join('')
    }

    getChosenQuality() {
        var selectedOption
        
        if (document.querySelector('.video-quality-controls') !== null) {
            let qualityOptions = document.querySelector('.video-quality-controls').options
            selectedOption = {index: qualityOptions.selectedIndex, quality: qualityOptions[qualityOptions.selectedIndex].text }       
        } else {
            selectedOption = {index: 1, quality: 'Medium'}
        }
        return selectedOption
    }
    
    renderStructure (manifest, list, canvasId) {
        manifest.map((data) => {
            if (data.type === 'Canvas') {
                canvasId = data.id
            }
            if (data.hasOwnProperty('members')) {
                if (canvasId) {
                    const mediaFragment = this.getMediaFragment(canvasId)
                    console.log(this.getChosenQuality())
                    const mediaFragmentUri = this.getVideoUri(this.getChosenQuality().quality).id + mediaFragment
                    list.push(`<ul><li><a class="media-structure-uri" data-media-fragment="${mediaFragmentUri}">${data.label}</a></li>`)
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


    qualityChange() {
        var qualityControls = document.querySelector('.video-quality-controls')
        var selectedIndex
        qualityControls.addEventListener('change', (selection) => {
            selectedIndex = this.getChosenQuality().index
            this.render(this.getVideoUri(this.getChosenQuality().quality).id)
            qualityControls.selectedIndex = selectedIndex    
        })
        
    }
    
    structureClick () {
        document.querySelectorAll('a.media-structure-uri').forEach((el) => { el.addEventListener('click', () => {
            var mediaFragment = el.getAttribute('data-media-fragment')
            !this.render(mediaFragment)
        }, false) })
    }

    render (mediaFragment) {
        if (mediaFragment === undefined) { mediaFragment = this.getVideoUri().id }
        const videoQualityControls = this.renderQualityControls() 
        const videoElement = `<video class="mejs__player" height="${this.manifest.height}" width="${this.manifest.width}" controls data-mejsoptions='{"pluginPath": "/path/to/shims/", "alwaysShowControls": "true"}'>
  <source src="${mediaFragment}" type="video/mp4">
  <track kind="subtitles" src="${this.getSubtitles().id}" srclang="${this.getSubtitles().language}" >
</video>`
        const videoStructure = this.renderStructure(this.manifest['structures'], [], '')
        this.target.innerHTML = videoElement +  videoStructure 
        this.structureClick()
        // this.qualityChange()

        // Activate MediaElement
        $('video').mediaelementplayer({
    	pluginPath: "/path/to/shims/", 
    	success: function(mediaElement, originalNode) {
	        // do things
        }
    });

    }
}
