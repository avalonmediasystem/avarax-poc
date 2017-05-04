import HashRouter from 'avalon/hash-router'
/** Class representing a MediaPlayer */
export default class MediaPlayer {
  constructor (options) {
        /**
         * Create a MediaPlayer.
         * @param {object} options - an object with the manifest and target
         */
    this.manifest = options.manifest
    this.target = document.getElementById(options.target)
    this.getLinks()
    this.hashRouter = new HashRouter({'qualityChoices': this.getQualityChoices()})
  }
  getLinks () {
        /**
         * this method sets the link on parent Ranges that don't have their own time, but inherit it from children in the tree
         */
    $('.canvas-range').each((el) => {
      try {
        $(`.canvas-range:eq( ${el} )`).find('.canvas-url').attr('href', '' + this.getExtentForCanvas($('.canvas-range')[el], [], []))
      } catch (e) { console.log(e) }
    })
  }

  getSubtitles () {
        /**
         * this method gets the first subtitle track from the manifest. It will probaly need to more robust in the future
         * @return {string} subtitle - a URI that points to subtitles
         */
    var subtitle
    this.manifest.content[0].items.forEach((item) => {
      item.body.forEach((body) => {
        if (body.type === 'Text') {
          subtitle = body
        }
      })
    })
    console.log(subtitle)
    return subtitle
  }

  getQualityChoices () {
    var choices = []
    this.manifest.content[0].items.forEach((item) => {
      item.body.forEach((body) => {
        if (body.type === 'Choice') {
          body.items.forEach((item) => {
            choices.push(item)
          })
        }
      })
    })
    return choices
  }

  getVideoUri () {
        /**
         * this method returns the URI with Medium quality from the manfest
         * @return {string} uri - a URI for the medium quality video
         */
    var uri
    this.manifest.content[0].items.forEach((item) => {
      item.body.forEach((body) => {
        if (body.type === 'Choice') {
          body.items.forEach((item) => {
            if (item.label === 'Medium') {
              uri = item
            }
          })
        }
      })
    })
    return uri
  }

  createStructure (manifest, list, canvasId) {
        /**
         *  Recurses the manifest structure and creates an html tree
         *  @return {string} list - a string version of the html tree
         */
    manifest.map((data, index) => {
      if (data.type === 'Range') {
        if (manifest[index].members[0].id !== undefined) {
          canvasId = manifest[index].members[0].id
        }
      }
      if (data.hasOwnProperty('members')) {
                // Parent elements
        if (this.hashRouter.getMediaFragment(canvasId) !== undefined) {
          let mediaFragment = this.hashRouter.getMediaFragment(canvasId)

          list.push(`<ul><li><a data-turbolinks='false' data-target="#" href="/#avalon/time/${mediaFragment.start},${mediaFragment.stop}/quality/Medium" class="media-structure-uri" >${data.label}</a></li>`)
          this.createStructure(data.members, list, canvasId)
        } else {
          list.push(`<ul class='canvas-range'><a data-target="#" data-turbolinks='false' class='canvas-url' href=''>${data.label}</a></li>`)
          this.createStructure(data.members, list, canvasId)
        }
      }
    })
    list.push('</ul>')
    return list.join('')
  }

  getExtentForCanvas (el, splits, newSplits) {
        /**
         * This method takes a jQuery selector and calculates the extent of the parent based on the duration of the children
         * @param {string} el - a jQuery selector
         * @param {array} splits - an empty array
         * @param {array} newSplits - an empty array
         * @return {string} - a mediafragment
         **/
    $(el).children().find('a').each(function () {
      var splitHref = $(this).attr('href').split('#t=')

      splitHref.forEach((split) => {
        if (split !== '') { splits.push(split) }
        newSplits = splits.join(',').split(',')
      })
    })
    return `${newSplits[0]},${newSplits[newSplits.length - 1]}`
  }

  renderStructure (manifest, list, canvasId) {
    // Recurses the manifest structure and creates an html tree
    manifest.map((data, index) => {
      console.log(data)
      if (data.type === 'Range') {
        canvasId = manifest[index].members[0].id
      }
      if (data.hasOwnProperty('members')) {
        if (this.hashRouter.getMediaFragment(canvasId) !== undefined) {
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
}
