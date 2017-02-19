import EnvObject from "./EnvObject"

export default class EnvironmentManager {


    constructor(counterId, clientId) {
        this._counterId = counterId
        this._clientId = clientId
    }
    
    get counterId() {
        return this._counterId
    }
    
    get clientId() {
        return this._clientId
    }
    
    getEnvironment() {
        return new EnvObject()   
    }

    getPath() {
        return "/"
    }

    getPageTitle() {
        return undefined
    }
}