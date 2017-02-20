
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


