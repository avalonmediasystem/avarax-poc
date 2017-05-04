export default class HashRouter {
    getMediaFragment (uri) {
        /**
         * this takes a uri with a media fragment that looks like #=120,134 and returns an object with start/stop in seconds and the duration in milliseconds
         * @return {object}
         */

        if (uri !== undefined) {
            const fragment = uri.split('#t=')[1]
            if (fragment !== undefined) {
                const splitFragment = fragment.split(',')
                const duration = splitFragment[1] - splitFragment[0]
                return { 'start': splitFragment[0],
                         'stop': splitFragment[1],
                         'duration': duration * 1000 }
            } else {
                return undefined
            }
        } else {
            return undefined
        }
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
        console.log(hash)
        var options = this.processHash(hash)
        console.log(options)
        var mediaPlayer = document.getElementById('iiif-av-player')
        mediaPlayer.setCurrentTime(options.start)
        mediaPlayer.play()
    }

    processHash(hash) {
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
