# lasertek_website_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Joseph Custom Notes here
0. prerequisit
    - install node.js
    - install vue
1. Project Creation
    - vue create lasertek_website_vue
    - npm install @vue/cli -g
2. Multilanguage support 
    - Internationalization plugin - vue I18n
    - npm install vue-i18n
    - vue add vue-i18n
    - set globalInjection: true
    - (TODO) - create multiple files if we have too much text
3. Note for Design
    - responsvie - when size of window changes, the layout still looks good
        - Note: Bootstrap uses 12 column grid
4. Font Awesome - Icons
    - Source https://github.com/FortAwesome/vue-fontawesome
    - fontawesome-svg-core - functions to import icons
    - free-solid-svg-icons - actual icons
        - syntax
            -<fa icon="coffee" />
            -<fa :icon="["fas','coffee']"/>
    - npm install other free icons i.e. brand -> import fab
        - library.add(fas, fab) in main.ts
        - syntax
            - <fa :icon="['fab', 'youtube']">
98. Notes for Vue
    - options api - building vue apps / components 
        - passing / setting various options in the config object of the vue instanst
        - i.e. data(), methods(), computed(), watchers()
        - limiataions / issue with building bigger vue apps
            - code that  belongs to gether logically is split up across multiple options
            - Re-using logic across omponents can be tricky or cumbersome
        - When to use METHODS
            - To call a function when an event happen in the DOM
            - To call a function from the computed or watchers when something happens in your component.
            - You need to pass parameter
        - When to use COMPUTED PROPERTIES
            - You need to compose new data from existing data sources
            - You need to reference a value directly in your template
            - You call the same function more than once in your templat
    - composition api - merges data(), methods(), computed() method into a setup() method
        - can still add to your component config object
99. (Todo) - Dockerise
100. Deployment
    - npm run build
    - serve -s dist


### References:
    - vue I18n tutorial: https://www.youtube.com/watch?v=CFGjn3yKMNc&ab_channel=AndreMadarang
    - changing locale https://vue-i18n.intlify.dev/guide/essentials/scope.html#global-scope-2