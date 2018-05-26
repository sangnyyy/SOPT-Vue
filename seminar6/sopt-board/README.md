# sopt-board

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


``` bash
#RestAPI Resource
http://13.125.118.111:3009/board

#Http method
GET method

```

## Overall Concept

``` bash
1. Rest API를 이용하여 Board에 관련된 json데이터를 받아 렌더링하는것이 목표.

2. Item 컴포넌트 생성 시 Vuex의 action과 mutation에서 Axios를 이용하여 json데이터를 제공받아 vuex의 state에 저장.

3. Vuex의 getter를 이용하여 json데이터를 렌더링!
```
