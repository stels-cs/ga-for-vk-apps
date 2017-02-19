import Sender from "./Sender"

export default class ImageSender extends Sender {
    
    /**
     * @param {Image} image
     */
    constructor(image) {
        super()
        this._image = image
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
        this._image.src = s
    }
    
    _getZ() {
        return this._z++
    }
}