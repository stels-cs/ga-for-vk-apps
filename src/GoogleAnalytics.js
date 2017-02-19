
export default class GoogleAnalytics {

    /**
     * @param {Sender} sender
     * @param {EnvironmentManager} environmentManager
     */
    constructor(sender, environmentManager) {
        this._sender = sender
        this._environmentManager = environmentManager
    }

    pageview(pagePath = undefined, pageTitle = undefined) {
        let env = this._getEnvironment()
        if (pagePath === undefined) {
            pagePath = this._environmentManager.getPath()
        }

        if (pageTitle === undefined) {
            pageTitle = this._environmentManager.getPageTitle()
        }

        env.set("t", "pageview")
        env.set("dp", pagePath)
        env.set("dt", pageTitle)
        this._send(env.getData())
    }

    event(category, action, label = undefined, value = undefined) {
        let env = this._getEnvironment()
        env.set("t", "event")
        env.set("ec", category) 
        env.set("ea", action)
        env.set("el", label) 
        env.set("ev", value !== undefined ? parseInt(value) : value) 
        this._send(env.getData())
    }

    _getEnvironment() {
        return this._environmentManager.getEnvironment()
    }

    _send(data) {
        this._sender.send(data)
    }
}