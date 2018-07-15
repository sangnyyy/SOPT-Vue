# Mixin

## Usage
1. Mixin으로 사용하고자 하는 기능(예를들어 computed, method와 같은.. )을 js파일로 작성한다.
2. Vue Component에서 믹스인js파일을 읽어와 mixins로 등록한다.


## 예제 설명
1. 동일한 기능과 모양의 컴포넌트에 색상만 변경하고자 한다. 
2. mixin파일에 computed를 getter,setter를 가능하게 작성하여 놓는다.(색상을 설정하기 위해)
3. 2개의 컴포넌트에서 동일한 mixin파일을 읽어온다.
4. 각 컴포넌트에서 mounting될 때 computed의 색상을 setter를 통해 설정한다.


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
