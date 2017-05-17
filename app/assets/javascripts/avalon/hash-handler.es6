export default class HashHandler {
    constructor (options) {
        this.qualityChoices = options.qualityChoices
    }


    bindHashChange () {
        /**
         * this method binds the onhashchange event and checks the location.hash if a user comes directly from a URL with a hash in it
         **/
        if (window.location.hash.indexOf('#avalon') >= 0) {
            this.playFromHash(window.location.hash)
        }
        window.onhashchange = () => {
            this.playFromHash(window.location.hash)
        }
    }

    playFromHash (hash) {
        /**
         * this method will read a media fragment from a hash in the URL and then play the starting location from the hash
         **/
        var mediaPlayer = document.getElementById('iiif-av-player') 
        var options = this.processHash(hash)
        
        
        this.qualityChoices.forEach((choice)=> {
            if (choice.label === options.quality) {
                mediaPlayer.src = choice.id
            }
        })
        
        
        mediaPlayer.setCurrentTime(options.start)
        mediaPlayer.play()
    }

    processHash(hash) {
        /**
         * This method processes a window.location.hash and creates an object. 
         * It can take any number of parameters. Strings at even locations are keys
         * and odd locations are values.
         * Example: /key/value/someotherkey/value will give you {'key':'value','somotherkey':'value'}
         * @param {string} hash - a window.location.hash
         * @return {object}
         **/
        
        return hash.split("/").splice(1).reduce((result,item,index,array) => {
            if (index % 2 === 0) {
                if (item === "time") {
                    const time = array[index+1].split(',')
                    result['start'] = time[0]
                    result['stop'] = time[1] 
                }
                result[item] = array[index+1]
            }
            return result;
        }, {})
    }

}
