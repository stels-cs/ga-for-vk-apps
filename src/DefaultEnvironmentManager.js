import EnvironmentManager from "./EnvironmentManager"
import EnvObject from "./EnvObject"

export default class DefaultEnvironmentManager extends EnvironmentManager {

    constructor(counterId, clientId, dataSource = "app") {
        super(counterId, clientId)
        this._d = {
            v: 1,
            cid: encodeURIComponent(this.clientId),
            tid: encodeURIComponent(this.counterId),
            ds: dataSource,
            ua: encodeURIComponent(this.getUserAgent()),
            dr: encodeURIComponent(this.getReferrer())
        }
        this._d = Object.assign({}, this._d, this._getUtms())
    }

    getEnvironment() {
        return EnvObject.fromData(this._d)
    }

    getPath() {
        try {
            return window.location.pathname
        } catch (e) {
            return "/"
        }
    }
    
    getPageTitle() {
        return document.title
    }

    getUserAgent() {
        try {
            return window.navigator.userAgent
        } catch (e) {
            return "Unknown"
        }
    }

    getReferrer() {
        try {
            return document.referrer
        } catch (e) {
            return "/"
        }
    }

    _getUtms() {
        let d = {}
        window.location.search
            .replace("?", "")
            .split("&")
            .forEach( function (i) {
                if (i.indexOf("hash=") == 0) {
                    let utms = decodeURIComponent( i.replace("hash=", "") )
                        .split("&")
                        .filter( function (e)  { return e.indexOf("utm_") == 0 } )
                        .map( function (e) { return e.split("=") } )
                    utms.forEach( function(tag) {
                        var name = tag.shift()
                        var value = tag.shift()
                        if (value == undefined) return
                        if (name == "utm_source") { d.cs = value }
                        if (name == "utm_campaign") { d.cn = value }
                        if (name == "utm_medium") { d.cm = value }
                        if (name == "utm_term") { d.ck = value }
                        if (name == "utm_content") { d.cc = value }
                    } )
                }
            })
        return d
    }
}