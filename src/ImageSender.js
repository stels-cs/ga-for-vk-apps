import Sender from "./Sender"

export default class ImageSender extends Sender {
    
    /**
     * @param {Image} image
     */
    constructor(image) {
        super()
        this._image = image
        this._image.onload = () => { this._next() }
        this._image.onerror = () => { this._next() }
        this._lock = false
        this._queue = []
        this._z = (new Date()).getTime()
        this._image.width = 1
        this._image.height = 1
    }

    /**
     * @param {Object} data
     */
    send(data) {
        let s = this.src + "?"
        for(let key in data) {
            if (data.hasOwnProperty(key))
                s += key + "=" + data[key] + "&"
        }
        s += "z=" + (this._getZ())
        this._upload(s)
    }
    
    _getZ() {
        return this._z++
    }

    _next() {
        this._lock = false
        let src = this._queue.shift()
        if (src) {
            this._upload(src)
        }
    }

    _upload(src) {
        if (this._lock) {
            this._queue.push(src)
        } else {
            this._lock = true
            this._image.src = src
        }
    }
}