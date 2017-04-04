---
title: Redux
date: 2017-03-08 13:51:27
tags: [tech, react]
---

## redux-thunk

主要用来处理异步`actions`，有点像**vuex**中的`actions`。**vuex**中的`actions`可以在里面使用一些异步方法，通过`commit`来达到改变`store`的目的。而**redux-thunk**则差不多，在`thunk`函数中异步`dispatch`。不同的是，**vuex** `commit`的东西是同步的`mutations`(在**Redux**中叫`actions.type`)，而**redux-thunk** `dispatch`的是`actions`.

### 🌰
```javascript
// configureStore.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

```

```javascript
// actions.js
// 制造一个1秒的异步请求
const timeout = () => new Promise(resolve => setTimeout(resolve, 1000));
// 同步action
export const increment = n => ({type: types.INCREMENT, n});
// 异步 thunk action
export const asyncIncrement = n => {
    return dispatch => {
        return timeout().then(() => {
            // 请求成功之后就执行同步的action
            dispatch(increment(n))
        });
    };
};
```

## compose

很多时候会用`compose`来将多个`middleware`合成一个`enhancer`传入`createStore`，很典型的一个例子是结合着`redux-devtools`来搞。

### 🌰

```javascript
import { createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancer = compose(
    // 浏览器redux插件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // 自己的插件
    thunk
);

export default function configureStore (initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}
```
