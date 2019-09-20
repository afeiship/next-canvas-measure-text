# next-canvas-measure-text
> A wrapper for measureText.

## installation
```bash
npm install -S afeiship/next-canvas-measure-text --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-canvas-measure-text';
import { createCanvas } from 'canvas';

const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext('2d');

nx.canvasMeasureText({
  context: ctx,
  callback: function(ctx){ ctx.font = '12px PingFang SC' },
  text:'Just a tse'
});
```
