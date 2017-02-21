
import {GA} from './src/index'

GA.create('UA-67358648-1')
GA.pageview()
function sendGAEvent() {
    GA.event('user', 'watch', 'timer', 5)
}
setTimeout( sendGAEvent, 5000 )

import {Builder} from './src/index'

let ga = Builder.getGA('UA-67358648-2', 'USER1')
ga.pageview('/memes', "Memes")
ga.event('test', 'event', 'label', 200)

import {GoogleAnalytics, ImageSender, DefaultEnvironmentManager} from './src/index'

let sender = new ImageSender( new Image() )
let env = new DefaultEnvironmentManager('UA-67358648-3', 'USER1')
let googleAnalytics = new GoogleAnalytics(sender, env)
googleAnalytics.pageview()
googleAnalytics.event('test', 'event', 'label')

let test1 = '/app/?api_url=https://api.vk.com/api.php&api_id=5619682&api_settings=134488086&viewer_id=19039187&viewer_type=0&sid=2032782e8054a7158cd54a7476ec9fd57fb380eeb24ab2ef5a12dd0bc978aa1f1773d951947c9bf9767&secret=29aad40ab7&access_token=35297dfb072e11476551b9b53b20ca7b379900cfcb7286cd709a65117fd388e63ee987bf9db99301ac0&user_id=0&group_id=4466449&is_app_user=1&auth_key=20aad20c6de3d7b0bd3e0fc4690d62&language=0&parent_language=0&ad_info=ElsdCQBVQVZtBAxcAwJSHt5AEQ8HJXUVBBJRVBNwoIFjI2HA8E&is_secure=1&ads_app_id=5619682_dd7782d5f388802ab&api_result=&lc_name=f19b755&sign=4f6a57d8254494f4c728b58dfff8977ce43af3c87b33ac0cc1703c0cdcb96a&hash=utm_source%3Dvk%26utm_medium%3Dcpm_mobile%26utm_campaign%3Dbank'
let test2 = '/app/?api_url=https://api.vk.com/api.php&api_id=5619682&api_settings=134488086&viewer_id=19039187&viewer_type=0&access_token=daae8048618a18906b27f53315d27cb1619d96bbb1b0d72c345975da3381c99e2ec5c58356d5fd657a27&group_id=44666449&is_app_user=1&auth_key=20aad20c6de3bd7b0d3e0fc40690d62&language=0&parent_language=0&is_secure=1&sid=184992b6a2e93de501bbd92a399271a38b325bd0ab177aac8a133861d1e966360946db9dfb065&secret=d602e274b&source=layer&api_result=&lc_name=1c3b37b6&sign=0575a3f8e78cefe70520ea2e9f3fsdfwffsdfsdfsdfsdfsdfsdfsdfsdfsdc0e9e725808270909d3a44d644b2704a6ec9&hash=utm_source%3Dvk%26amp%3Bamp%3Bamp%3Butm_medium%3Dcpm_mobile%26amp%3Bamp%3Bamp%3Butm_campaign%3Dbank'

let location1 = {
    search: test1,
    pathname: '/app/'
}


let location2 = {
    search: test2,
    pathname: '/app/'
}

let testUtms1 = env._getUtms(location1)
let testUtms2 = env._getUtms(location2)

let origin = {
    cm:"cpm_mobile",
    cn:"bank",
    cs:"vk"
}

Object.keys(origin).forEach( key => {
    if (!testUtms1.hasOwnProperty(key) || testUtms1[key] != origin[key]) {
        throw "testUtms1 contains different key for " + key + " origin " + origin[key] + " exist " + testUtms1[key]
    }
} )


Object.keys(origin).forEach( key => {
    if (!testUtms2.hasOwnProperty(key) || testUtms2[key] != origin[key]) {
        throw "testUtms2 contains different key for " + key + " origin " + origin[key] + " exist " + testUtms2[key]
    }
} )