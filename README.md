
## reuse-react-components

this repo is used to demo how to reuse components in web and react native


## How to start

install root dependencies
```
npm i -g lerna
yarn install
lerna bootstrap
```


```
cd packages/web
yarn start
```

```
cd packages/ExampleApp
yarn start
react-native run-ios
```


### Sharing code
Hello component (only view basic components: View, Text) is implemented in react native. In web project we use `react-native-web` to render Hello component.



