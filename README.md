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
99. (Todo) - Dockerise
100. Deployment
    - npm run build
    - serve -s dist


### References:
    - vue I18n tutorial: https://www.youtube.com/watch?v=CFGjn3yKMNc&ab_channel=AndreMadarang
    - changing locale https://vue-i18n.intlify.dev/guide/essentials/scope.html#global-scope-2