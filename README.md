<p align="center">
  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/180/keyboard_2328.png" height="200px"/>
  <br><br>
  <b>React hook for visually debugging keyboard events</b>
  <p>Forked from (https://github.com/siddharthkp/use-key-debugger)</p>
  <br><br/>
  <a href="https://codesandbox.io/s/w16p30w75">Demo on CodeSandbox</a>
</p>

&nbsp;

#### install

```
npm install use-multi-key-debugger
```

&nbsp;

#### usage

```js
import useMultiKeyDebugger from 'use-multi-key-debugger'

function App() {
  const Key = useMultiKeyDebugger()

  return (
    <div>
      <Key />
      <h2>Hit any key to see debugger</h2>
    </div>
  )
}
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [bhaskarGyan](https://github.com/bhaskarGyan)
