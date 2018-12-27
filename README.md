# airport

> Nuxt.js project

# Live Demo

> https://airport-tablo.herokuapp.com/

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

Табло аэропорта Разработайте клиентское приложение(сайт), где будет табло аэропорта. У табло должны быть следующие функции: просмотр только вылетающий рейсов просмотр только прилетающих рейсов просмотр задержанных рейсов поиск по номеру рейса
В качестве примера можно посмотреть на http://www.svo.aero/. Ограничений на использование шаблонизаторов и библиотек нет.
Выложите готовый код в репозиторий на гитхаб. Плюсом будет, если данные для табло вы получите из публичных api. Если решите их не использовать, то положите данные в отдельный файл в репозитории.
Ticker Почему  не увеличивается. Как исправить? § правка this._i
function Ticker() {  this._i = 0 }; 
Ticker.prototype = {  tick: function() {   console.log(this._i++);  } }; 
var ticker = new Ticker(); setInterval(ticker.tick, 1000);

function Ticker() {  this._i = 0 }; 
Ticker.prototype = {  tick: function() {   console.log(this._i++);  } }; 
var ticker = new Ticker(); setInterval(()=>ticker.tick(), 1000);
