# formater-pdf-viewer-vjs


Used work from [FranckFreiburger](https://github.com/FranckFreiburger/vue-pdf)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Configuration
Use your own repository by editing package.json in particular `name`, `version`, `main`, `preproduction.url` and `production.url` used to build js files:

``` json
  "name": "formater-pdf-viewer-vjs",
  "version": "0.1.5",
  "main": "src/formater-pdf-viewer.vue",
  "preproduction": {
	  "url": "https://rawgit.com/terresolide/"
  },
  "production": {
     "url": "https://cdn.rawgit.com/terresolide/"
  },

```



## Example 
```

  <formater-pdf-viewer src="url/file.pdf" lang="fr" ></formater-pdf-viewer>
  <script src="https://cdn.rawgit.com/terresolide/formater-pdf-viewer-vjs/0.1.5/dist/formater-pdf-viewer-vjs_0.1.5gi.js"></script> 

