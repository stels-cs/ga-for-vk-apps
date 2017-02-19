
import GA from "./GoogleAnalytics"
import IS from "./ImageSender"
import DE from "./DefaultEnvironmentManager"

export default class GoogleAnalyticsBuilder {

    static getGA(counterId, clientId = null) {
        if (clientId == null) {
            clientId = this._getClientId()
        }
        let sender = new IS(new Image())
        let environmentManager = new DE(counterId, clientId)
        return new GA(sender, environmentManager)
    }

    static _getClientId() {
        try {
            let cid = this._getCookie("_gac")
            if (cid === undefined) {
                cid = this._createRandomClientId()
                this._setCookie("_gac", cid, {expires: 60 * 60 * 24 * 365 * 2})
            } else {
                this._setCookie("_gac", cid, {expires: 60 * 60 * 24 * 365 * 2})
            }
            return cid
        } catch (e) {
            return this._createRandomClientId()
        }
    }

    static _createRandomClientId() {
        return "GAC" + Math.round((Math.random() * 999999)) + "." + Math.round( (new Date()).getTime() / 1000 )
    }

    static _getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    static _setCookie(name, value, options) {
        options = options || {}

        var expires = options.expires

        if (typeof expires == "number" && expires) {
            var d = new Date()
            d.setTime(d.getTime() + expires * 1000)
            expires = options.expires = d
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString()
        }

        value = encodeURIComponent(value)

        var updatedCookie = name + "=" + value

        for (var propName in options) {
            updatedCookie += "; " + propName
            var propValue = options[propName]
            if (propValue !== true) {
                updatedCookie += "=" + propValue
            }
        }

        document.cookie = updatedCookie
    }

}