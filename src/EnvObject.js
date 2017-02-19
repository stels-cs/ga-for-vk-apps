
export default class EnvObject {

    /**
     * @param {Object} data
     */
    static fromData(data) {
        let x = new EnvObject()
        Object.keys(data).forEach( key => {
            if (data.hasOwnProperty(key))
                x.set(key, data[key])
        } )
        return x
    }

    constructor() {
        this._d = {}
    }
    
    set(key, value) {
        if (value !== undefined) {
            this._d[key] = value
        }
    }
    
    getData() {
        let data = {}
        Object.keys(this._d).forEach( key => {
            if (this._d.hasOwnProperty(key) && this._d[key] !== undefined)
                data[key] = this._encode(this._d[key])
        } )
        return data
    }

    _encode(value) {
        return encodeURIComponent(value)
    }
}