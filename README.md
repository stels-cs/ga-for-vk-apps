#Google Analytics for Vk iframe applications
> Бибилиотека для передачи метрики в Google Analytics по Measure protocol https://developers.google.com/analytics/devguides/collection/protocol/v1/?hl=ru
 
[![npm version](https://img.shields.io/npm/v/ga-for-vk-apps.svg)](https://www.npmjs.com/package/ga-for-vk-apps) [![npm version](https://img.shields.io/npm/dm/ga-for-vk-apps.svg)](https://www.npmjs.com/package/ga-for-vk-apps)

Features
--------
* ```pageview([path, [title]])```
* ```event(category, action, [label, [value]])```

Installation
------------
Using [npm](https://www.npmjs.com/package/ga-for-vk-apps):

    $ npm install ga-for-vk-apps --save
	
Usage
------------
### Basic Example

```js
import {GA} from 'ga-for-vk-apps'

GA.create('UA-67358648-1')
GA.pageview()
```

### Events
```js
import {GA} from 'ga-for-vk-apps'

GA.create('UA-67358648-1')
GA.pageview()
function sendGAEvent() {
    GA.event('user', 'watch', 'timer', 5)
}
setTimeout( sendGAEvent, 5000 )
```

### GA object
```js
import {Builder} from 'ga-for-vk-apps'

let ga = Builder.getGA('UA-67358648-2', 'USER1')
ga.pageview('/memes', "Memes")
ga.event('test', 'event', 'label', 200)
```

```js
pageview([path [, title]])
```
- ```{String} path``` – path to page like "/home" or "/user/12"
- ```{String} title``` – page title "Home" or "David profile"
https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
```js
event(category, action, [label [, value]])
```
- ```{String} category``` – Обычно это объект, с которым взаимодействовал пользователь (например, 'Video')
- ```{String} action``` – Тип взаимодействия (например, 'play')
- ```{String} label``` – Поле, в котором можно указывать категорию события (например, 'Fall Campaign')
- ```{Integer} value``` – Численное значение, связанное с событием (например, 42)
https://developers.google.com/analytics/devguides/collection/analyticsjs/events
