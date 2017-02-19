
import GoogleAnalyticsBuilder from "./GoogleAnalyticsBuilder"

export default class GoogleAnalyticsSingle {
    
    static create(counterId, clientId = null) {
        GoogleAnalyticsSingle._ga = GoogleAnalyticsBuilder.getGA(counterId, clientId)
    }
    
    static pageview(pagePath = undefined, pageTitle = undefined) {
        if (GoogleAnalyticsSingle._ga) {
            GoogleAnalyticsSingle._ga.pageview(pagePath, pageTitle)
        } else {
            throw "Google Analytics not created"
        }
    }
    
    static event(category, action, label = undefined, value = undefined) {
        if (GoogleAnalyticsSingle._ga) {
            GoogleAnalyticsSingle._ga.event(category, action, label, value)
        } else {
            throw "Google Analytics not created"
        }
    }
}