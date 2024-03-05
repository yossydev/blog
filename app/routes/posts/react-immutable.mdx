---
title: "useState でミュータブルな操作をするとなぜ再レンダリングされないのか？？"
emoji: "⚽️"
ogImage: "/ogp/ogp-javascript.png"
date: "2022/03/21"
published: true
---

## useState でミュータブルな操作をするとなぜ再レンダリングされないのか？？

:::message
間違っている可能性もあるので、その際はコメント頂けますと幸いです。
:::

```tsx
export const useState = () => {
  const [state, setState] = useState([1, 2, 3, 4, 5]);

  // ミュータブルな操作
  const foo = () => {
    state.push(6);
  };

  // イミュータブルな操作
  const bar = () => {
    const newState = [...state, 6];
    setState(newState);
  };

  return [state, setState];
};
```

ミュータブルな操作では再レンダリングが起きず、イミュータブルな操作では再レンダリングが起きる。
これに関しては、React を扱っていく上で勝手に覚えていくのではないかと思います。

ではなぜ、push や unshift などのミュータブルな操作では再レンダリングがされないのか？？
その判定をどのように行なっているのか？？

少し気になったので、調べてみました。

---

### 結論

**ミュータブルな操作では元の値までも変更してしまうため、Object.is()の判定が true になってしまい、再レンダリングが起きない。**

React では useState の値の変化を[Object.is()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/is)で判定しているそうです。

以下[beta.reactjs.org](https://beta.reactjs.org/apis/usestate)より抜粋

> If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization. Although in some cases React may still need to call your component before skipping the children, it shouldn’t affect your code.

React では Object.is()の判定が true のときはパフォーマンスの最適化のために再レンダリングを省略するようになっているようです。

そして結論を最初に書いた際にもありますが、ミュータブルな操作では、元の値までも変更してしまうため、Object.is()の判定が true になるということです。

## 参考記事

https://beta.reactjs.org/
https://ja.reactjs.org/docs/hooks-reference.html#usestate
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/is
https://qiita.com/sh-suzuki0301/items/597bdbf17253feb5f55b
https://qiita.com/naogify/items/cef4330858d0c677e71b
https://zenn.dev/luvmini511/articles/85e8e3c71a2f41#1.-immutability%E3%81%A8%E3%81%AF
