- [I.](#i)
  - [1. SPA/MPA](#1-spampa)
    - [SPA - Single-Page Application](#spa---single-page-application)
    - [Cách triển khai](#cách-triển-khai)
    - [Sự khác biệt](#sự-khác-biệt)
      - [SPA](#spa)
      - [MPA](#mpa)
    - [So sánh](#so-sánh)
      - [Tốc độ](#tốc-độ)
      - [Bóc tách](#bóc-tách)
      - [SEO](#seo)
      - [UX](#ux)
      - [Quá trình phất triển](#quá-trình-phất-triển)
      - [Phụ thuộc JavaScript](#phụ-thuộc-javascript)
    - [Chọn SPA hay MPA ?](#chọn-spa-hay-mpa-)
  - [2. Hello World](#2-hello-world)
  - [3. JSX (JavaScript XML)](#3-jsx-javascript-xml)
  - [4. Props là gì? Dùng props khi nào?](#4-props-là-gì-dùng-props-khi-nào)
  - [5. Quy ước đặt tên components?](#5-quy-ước-đặt-tên-components)
  - [6. Children props? Render props?](#6-children-props-render-props)
  - [7. NPM, NPX and YARN?](#7-npm-npx-and-yarn)
  - [8. Hooks](#8-hooks)
    - [8.1 useState (trạng thái của dữ liệu)](#81-usestate-trạng-thái-của-dữ-liệu)
    - [8.2. Mounth/Unmounth](#82-mounthunmounth)
    - [8.3. useEffect](#83-useeffect)
    - [8.4. useLayoutEffect](#84-uselayouteffect)
    - [8.5. useRef](#85-useref)
    - [8.6. React.memo](#86-reactmemo)
    - [8.7. useCallback](#87-usecallback)
    - [8.8. useMemo](#88-usememo)
    - [8.9. useReducer](#89-usereducer)
    - [8.10. useContext](#810-usecontext)
    - [8.11. Global State with Context + useReducer](#811-global-state-with-context--usereducer)
    - [8.12.](#812)
    - [8.13.](#813)
  - [9.](#9)

# I.

## 1. SPA/MPA

<details>
<summary> Open </summary>

### SPA - Single-Page Application

- ReactJs là 1 trong những thư viện tao ra SPA
- Các 'ông lớn' sử dụng SPA: Google, Facebook, Twitter
- Các SPA khác: F8, Shoppe, 30shine, chotot, zingmp3

### Cách triển khai

- SPA - Single-Page Application --> CSR -> Client Side rendering
- MPA - Multiple-Page Application --> Server side rendering

### Sự khác biệt

#### SPA

- Được cho là cách trực tiếp cận hiện đại hơn
- Không yêu cầu tải lại trang trong quá trình sử dụng

#### MPA

- Là cách tiếp cận cổ điện hơn
- Tải lại trang trong quá trình sử dụng (Click vào đường link,chuyển sang,...)

### So sánh

#### Tốc độ

- SPA nhanh hơn khi sử dụng

* Phần lớn tài nguyện được tải trong lần đầu
* Trang chỉ tải thêm dữ liệu mới khi cần

- MPA chậm hơn khi sử dụng
  +Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

#### Bóc tách

- SPA có phần Front-end riêng biệt
- MPA Front-end & Back-end phụ thuộc nhau nhiều hơn được đặt trong cùng 1 dự án

#### SEO

- SPA không thân thiện với SEO như MPA
- Trải nghiệm trên thiết bị di động tốt hơn

#### UX

- SPA cho trải nghiệm tốt hơn ,nhất là các theo tác chuyển trang

- Trải nghiệm trên thiết bị di động tốt hơn

#### Quá trình phất triển

- SPA dễ dàng tái sử dụng code (component)
- SPA bóc tách FE & BE

* Chia team phát triển song song

* Phất triển thêm mobile app dễ dàng

#### Phụ thuộc JavaScript

- SPA phụ thuộc hoàn toàn vào JavaScript
- MPA có thể không cần JavaScript

### Chọn SPA hay MPA ?

- Không có thứ gì luôn hoàn hảo trong mọi trường hợp

</details>

## 2. Hello World

<details>
<summary> Open </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS</title>
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.production.min.js"
    ></script>
  </head>

  <body>
    <div id="root"></div>

    <script>
      /* DOM */
      // const postDom = document.createElement('div');
      // postDom.className = 'post-item';

      // const h2Dom = document.createElement('h2');
      // h2Dom.title = 'Học React tại F8'
      // h2Dom.innerText = 'Học ReactJS';

      // const pDom = document.createElement('p');
      // pDom.innerText = 'ReactJS từ cơ bản tới nâng cao';

      // postDom.appendChild(h2Dom);
      // postDom.appendChild(pDom);

      // document.body.appendChild(postDom);

      // ReactJS
      const postReact = React.createElement(
        "div",
        {
          className: "post-item",
        },
        React.createElement(
          "h2",
          {
            title: "Học React tại F8",
          },
          "Học ReactJS"
        ),
        React.createElement("p", null, "ReactJS từ cơ bản tới nâng cao")
      );

      // get root element
      const root = document.getElementById("root");

      // React-DOM -> render UI
      ReactDOM.render(postReact, root);
    </script>
  </body>
</html>
```

</details>

## 3. JSX (JavaScript XML)

<details>
<summary> Open </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      const game = "CSGO";

      const ul = (
        <ul>
          <li>LOL</li>
          <li>Valorant</li>
          <li>{game}</li>
        </ul>
      );

      ReactDOM.render(ul, document.getElementById("root"));
    </script>
  </body>
</html>
```

</details>

## 4. Props là gì? Dùng props khi nào?

<details>
<summary> Open </summary>

- React elements
  - Sử dụng props giống như với attribute của thẻ HTML
  - 2 props `class`, `for` => `className`, `htmlFor`
  - Phải tuân theo quy ước có sẵn
- React components
  - Sử dụng props giống như đối số cho Component
  - Tự do đặt tên props
    - Đặt tên theo camelCase
    - \*Có thể bao gồm dấu gạch ngang
- **Chú ý**:
  - Prop `key` là prop **đặc biệt**
  - Prop cơ bản là đối số của Component
    => Props có thể là bất cứ kiểu dử liệu gì
  - Sử dụng destructuring
- Truyền hàm qua `props` là khái niệm `callback`

<details>
<summary> Code </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      function PostItem({
        imageURL,
        titleContent,
        description,
        publishedAt,
        callback = () => {},
      }) {
        callback();
        return (
          <div className="post-item">
            <img src={imageURL} alt={titleContent} width="300" />
            <h2 className="post-title">{titleContent}</h2>
            <p className="post-desc">{description}</p>
            <p className="post-published">{publishedAt}</p>
          </div>
        );
      }

      const app = (
        <React.Fragment>
          <PostItem
            imageURL="https://hoanghapc.vn/media/news/1044_cau_hinh_choi_cs_go_1.jpg"
            titleContent="Counter-Strike: Global Offensive"
            description="Counter-Strike: Global Offensive là một trò chơi máy tính thuộc
                    thể loại bắn súng góc nhìn thứ nhất, chiến thuật nhiều người chơi
                    được phát triển bởi Valve Corporation và Hidden Path
                    Entertainment, đơn vị cũng đã tiếp tục duy trì Counter-Strike:
                    Source sau khi phát hành."
            publishedAt="1 ngày trước . 7 phút đọc"
            callback={() => {}}
          />
          <PostItem
            imageURL="https://hoanghapc.vn/media/news/1044_cau_hinh_choi_cs_go_1.jpg"
            titleContent="2 Counter-Strike: Global Offensive"
            description="2 Counter-Strike: Global Offensive là một trò chơi máy tính thuộc
                    thể loại bắn súng góc nhìn thứ nhất, chiến thuật nhiều người chơi
                    được phát triển bởi Valve Corporation và Hidden Path
                    Entertainment, đơn vị cũng đã tiếp tục duy trì Counter-Strike:
                    Source sau khi phát hành."
            publishedAt="1 ngày trước . 7 phút đọc"
          />
          <PostItem
            imageURL="https://hoanghapc.vn/media/news/1044_cau_hinh_choi_cs_go_1.jpg"
            titleContent="3 Counter-Strike: Global Offensive"
            description="3 Counter-Strike: Global Offensive là một trò chơi máy tính thuộc
                    thể loại bắn súng góc nhìn thứ nhất, chiến thuật nhiều người chơi
                    được phát triển bởi Valve Corporation và Hidden Path
                    Entertainment, đơn vị cũng đã tiếp tục duy trì Counter-Strike:
                    Source sau khi phát hành."
            publishedAt="1 ngày trước . 7 phút đọc"
          />
        </React.Fragment>
      );

      ReactDOM.render(app, document.getElementById("root"));
    </script>
  </body>
</html>
```

</details>

</details>

## 5. Quy ước đặt tên components?

<details>
<summary> Open </summary>

- viết hoa chữ cái đầu
  vd: `function RenderApp(){}`
- boolean, underfined, null sẽ không được render

<details>
<summary> Code 1 </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      const Form = {
        Input() {
          return <input />;
        },
        CheckBox() {
          return <input type="CheckBox" />;
        },
      };

      function App() {
        return (
          <div id="wrapper">
            <Form.Input />
            <Form.CheckBox />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> Code 2 </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      const Form = {
        Input() {
          return <input />;
        },
        CheckBox() {
          return <input type="CheckBox" />;
        },
      };

      function App() {
        const type = "Input";

        const Component = Form[type];

        return (
          <div id="wrapper">
            <Component />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>
```

</details>

<details>
<summary> Code 3 </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      function Button({ title, href, target, onClick }) {
        let Component = "button";
        const props = {};
        if (href) {
          Component = "a";
          props.href = href;
        }
        if (target) {
          props.target = target;
        }
        if (onClick) {
          props.onClick = onClick;
        }
        return <Component {...props}>{title}</Component>;
      }

      function App() {
        return (
          <div id="wrapper">
            <Button
              title="Click me!"
              href="https://github.com/"
              target="_blank"
              // onClick={() => console.log(Math.random())}
            />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>
```

</details>

</details>

## 6. Children props? Render props?

<details>
<summary> Open </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ReactJS</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      function List({ data, children }) {
        return <ul> {data.map((item, index) => children(index, item))}</ul>;
      }

      function App() {
        const games = ["CSGO", "LOL", "Valorant"];

        return (
          <div id="wrapper">
            <List data={games}>
              {(key, item) => <li key={key}> {item} </li>}
            </List>
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>
```

</details>

## 7. NPM, NPX and YARN?

<details>
<summary> Open </summary>

- **NPM**

  - Project scope

    - `npm install react react-dom` => dependencies
    - `npm i react react-dom` => dependencies

    - `npm install --save-dev react react-dom` => devDependencies
    - `npm i -D react react-dom` => devDependencies

    - `npm uninstall react react-dom`

  - Global scope

    - `npm i --global create-react-app`
    - `npm i -g create-react-app`

    - `npm uninstall -g create-react-app`

    - **Lưu ý**: đối với `linux` `macos` thêm `sudo` trước câu lệnh để đưa lên thư mục cấp cao hơn (vd: `sudo npm i -g create-react-app`)

- **NPX**: Khi cài NodeJS -> cài kèm NPM, NPX
  - Tại sao dùng NPX?
    - Không cần phải cài thư viện này lên máy
    - Sau khi chạy xong sẽ xoá bỏ source code của thư viện này
    - Cài `global` sẽ bị `fix version`
  - Gặp lỗi khi: `npx create-react-app tiktok` => cài global `npm i -g create-react-app`
- **YARN**
  - YARN insstall
    - `npm i -g yarn`
- **YARN && NPM**
  - [Yarn vs npm: Everything You Need to Know](https://www.sitepoint.com/yarn-vs-npm/)
- **Lưu ý**
  - Luôn bật development server (`npm start` || `yard start`) khi phát triển project với webpack

</details>

## 8. Hooks

<details>
<summary> Open </summary>

- Hooks (gắn, móc vào)
- `hooks` là những method đc cung cấp bỏi thư viện `reactjs`

1. Chỉ dùng cho `function component`
2. Component đơn giản và trở nên dễ hiểu
   - **Không** bị chia logic ra như methods trong `lifecycle` của `Class Component`
   - **Không** cần sử dụng `this`
3. Sử dụng `Hooks` khi nào?
   - Dự án mới => `Hooks`
   - Dự án cũ
     - `Component mới` => `Function component` + `Hooks`
     - `Component cũ` => Giữ nguyên, có thời gian tối ưu sau
   - Logic nghiệp vụ cần sử dụng các tính chất của OOP => `Class component`
4. Người mới nên bắt đầu với Function hay Class component?
   - `function component`
5. Có kết hợp sử dụng `Function component` & `Class component` được không?
   - **Được**

</details>

### 8.1 useState (trạng thái của dữ liệu)

<details>
<summary> Open </summary>

- Dùng khi nào?
  - Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)
- Cách dùng

```jsx
import { useState } from 'react'

function Component{
	const [state, setState] = useState(initState)

	...
}
```

```jsx
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
```

- **Lưu ý**
  - Component được re-render sau khi `setState`
  - Initial state chỉ dùng cho lần đầu
  - `Set state` với callback
  - `Initial state` với callback
  - `Set state` thay thế là giá trị mới

<details>
<summary> 2 way binding </summary>

- `radio`

```jsx
import { useState } from "react";

const games = [
  {
    id: 1,
    name: "LOL",
  },
  {
    id: 2,
    name: "CSGO",
  },
  {
    id: 3,
    name: "Valorant",
  },
];

function App() {
  const [checked, setChecked] = useState(1);

  const handleSubmit = () => {
    // call API
    // ...
  };

  return (
    <div className="App" style={{ padding: 40 }}>
      {games.map((game) => (
        <div key={game.id}>
          <input
            type="radio"
            checked={checked === game.id}
            onChange={() => setChecked(game.id)}
          />
          {game.name}
        </div>
      ))}
      <button onCLick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
```

- `check box`

```jsx
import { useState } from "react";

const games = [
  {
    id: 1,
    name: "LOL",
  },
  {
    id: 2,
    name: "CSGO",
  },
  {
    id: 3,
    name: "Valorant",
  },
];

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    // call API
    console.log({ ids: checked });
  };

  return (
    <div className="App" style={{ padding: 40 }}>
      {games.map((game) => (
        <div key={game.id}>
          <input
            type="checkBox"
            checked={checked.includes(game.id)}
            onChange={() => handleCheck(game.id)}
          />
          {game.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
```

</details>

</details>

### 8.2. Mounth/Unmounth

<details>
<summary> Open </summary>

- Mouthed: thời điểm đưa `component` vào dùng
- Unmouthed: thời điểm gỡ nó ra, không dùng tới nó nữa
- Khi đi làm sẽ dùng thuật ngữ này

<details>
<summary> Code </summary>
</details>

```jsx
import { useState } from "react";

function Content() {
  return <h1>Hello World!</h1>;
}

// Mouth/Unmouth
function App() {
  const [show, setShowed] = useState(false);

  return (
    <div>
      <button onClick={() => setShowed(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
```

</details>

### 8.3. useEffect

<details>
<summary> Open </summary>

1.  useEffect(callback)

- Gọi callback mỗi khi component re-render
- Gọi callback sau khi component thêm element vào DOM

2.  useEffect(callback, [])

- Chỉ gọi callback 1 lần sau khi component mounted
- Chỉ muốn thực hiện 1 lần cái logic gì đó

3.  useEffect(callback, [deps])

- callback sẽ được gọi lại mỗi khi deps thay đổi
- [deps]: chứa biến

- Cả 3 TH trên

  - Callback luôn được gọi sau khi component mounted
  - Cleanup function luôn được gọi trước khi component unmounted
  - Cleanup function luôn được gọi trước khi callback được gọi (trừ lần unmounted)

- call API
  - `https://codesandbox.io/s/useeffect-wn1s4u?file=/src/App.js`
- resize
  - `https://codesandbox.io/s/useeffect-resize-vn2s8j`
- preview avatar
  - `https://codesandbox.io/s/useeffect-preview-avatar-5n4es7?file=/src/App.js`

</details>

### 8.4. useLayoutEffect

<details>
<summary> Open </summary>
</details>

### 8.5. useRef

<details>
<summary> Open </summary>

- Lưu các giá trị qua một tham chiếu bên ngoài function component

```jsx
"use strict";

import React, { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(60);

  const timerID = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log("start ->", timerID.current);
  };

  const handleStop = () => {
    clearInterval(timerID.current);
    console.log("stop ->", timerID.current);
  };

  console.table(count, prevCount.current);

  return (
    <div style={{ padding: 40 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
```

</details>

### 8.6. React.memo

<details>
<summary> Open </summary>

- memo() -> Higher Order Component (`HOC`)
- Dùng để ghi nhớ các props của một component, quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.

- check các `props` của `component` được `wrap bởi memo()`, nếu có **ít nhất 1** `props` bị thay đổi thì nó sẽ re-render

> Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.

- `tránh lạm dụng, cần đánh giá mức độ cần thiết của nó`

<details>
<summary> Content.jsx </summary>

```jsx
import { memo } from "react";

function Content({ count1 }) {
  return (
    <div>
      <h1>Hello World! {count1}</h1>
      {console.log("re-render")}
    </div>
  );
}

export default memo(Content);
```

</details>

<details>
<summary> App.jsx </summary>

```jsx
"use strict";

import { useState } from "react";
import Content from "./Content";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase1 = () => {
    setCount1(count1 + 1);
  };
  const increase2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div style={{ padding: 40 }}>
      <Content count1={count1} />
      <h2>{count2}</h2>
      <button onClick={increase1}>Count 1</button>
      <button onClick={increase2}>Count 2</button>
    </div>
  );
}

export default App;
```

</details>

</details>

### 8.7. useCallback

<details>
<summary> Open </summary>

- Giúp tránh tạo ra những hàm mới một cách ko cần thiết trong `function component`
- Nếu `component` con không dùng `memo` thì cũng không dùng `useCallback`

<details>
<summary> Content.jsx </summary>

```jsx
import { memo } from "react";

function Content({ onIncrease }) {
  console.log("re-render");

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}

export default memo(Content);
```

</details>

<details>
<summary> App.jsx </summary>

```jsx
import { useState, useCallback } from "react";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
```

</details>

</details>

### 8.8. useMemo

<details>
<summary> Open </summary>

- Viết trong phần thân của `function component`
- Tránh thực hiện lại 1 logic không cần thiết
- `https://codesandbox.io/s/usememo-58qesq`

```jsx
import { useState, useMemo, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  // Auto forcus input name
  const inputNameRef = useRef(null);

  useEffect(() => {
    inputNameRef.current.focus();
  }, [products]);

  // Enter to add item
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") document.querySelector("button").click();
    });
    console.log(123);
    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Enter") document.querySelector("button").click();
      });
    };
  }, []);

  const handleSubmit = () => {
    setProducts([
      { name: name, price: Number.isNaN(+price) ? 0 : +price },
      ...products,
    ]);
    setName("");
    setPrice("");
  };

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      return result + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: 40 }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputNameRef}
      />
      <br />
      <input
        type="text"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <span style={{ marginLeft: 10 }}>--{">"} can use "Enter"</span>
      <br />
      Total: {total} VND
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

</details>

### 8.9. useReducer

<details>
<summary> Open </summary>

- Cung cáp cho người dùng có thêm một sự lựa chọn để sử dụng `state` cho `function component`

<details>
<summary> TSX (Base) </summary>

```tsx
// TSX
import { useState, useReducer } from "react";

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const INIT_STATE: number = 0; //

// Action
const UP_ACTION: string = "up";
const DOWN_ACTION: string = "down";

// Reducer
const reducer = (state: number, action: string) => {
  console.log("reducer running...");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

const App: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, INIT_STATE);

  const handleDown = () => {
    // setCount("down");
    dispatch(DOWN_ACTION);
  };

  function handleUp(): void {
    // setCount("up");
    dispatch(UP_ACTION);
  }

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={handleDown}>Down</button>
      <button onClick={handleUp}>Up</button>
    </div>
  );
};

export default App;
```

</details>

<details>
<summary> Todo App (TSX) </summary>

```tsx
// TSX
import React, { useReducer, useRef, useEffect } from "react";

// useReduce

// 1. Init state
const initialState: State = {
  todo: "",
  todos: [],
};

interface State {
  todo: string;
  todos: string[];
}

// 2. Actions
const SET_TODO: string = "set_todo";
const ADD_TODO: string = "add_todo";
const DELETE_TODO: string = "delete_todo";

const setTodo = (payload: string) => {
  return {
    type: SET_TODO,
    payload: payload,
  };
};

const addTodo = (payload: string) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

// 3. Reducer
const reducer = (state: State, action: any) => {
  let newState: any;

  switch (action.type) {
    case SET_TODO:
      newState = {
        ...state,
        todo: action.payload,
      };
      break;

    case ADD_TODO:
      newState = {
        ...state,
        todos: [action.payload, ...state.todos],
      };
      break;

    case DELETE_TODO:
      const newTodos: string[] = [...state.todos];

      newTodos.splice(action.payload, 1);

      newState = {
        ...state,
        todos: newTodos,
      };
      break;

    default:
      throw new Error("Invalid Action");
  }

  return newState;
};

// 4. Dispatch
const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, todos } = state;

  //   auto focus
  const inputRef: any = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  //   enter to submit
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        document.querySelector("button")?.click();
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          document.querySelector("button")?.click();
        }
      });
    };
  }, []);

  const handleSubmit = () => {
    dispatch(addTodo(todo));
    dispatch(setTodo(""));
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => {
          dispatch(setTodo(e.target.value));
        }}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add</button>
      --{">"} Press "Enter" to add
      <ul>
        {todos.map((item: any, index: any) => {
          return (
            <li key={index}>
              {item}
              <span
                style={{ fontSize: "20px", padding: "6px", cursor: "pointer" }}
                onClick={() => {
                  dispatch(deleteTodo(index));
                  inputRef.current.focus();
                }}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
```

</details>

- Code: ``

</details>

### 8.10. useContext

<details>
<summary> Open </summary>

- Đơn giản hoá việc truyền dữ liệu từ `component cha` xuống `component con`
- Code: `https://codesandbox.io/s/usecontext-x0xfsf?file=/src/ThemeContext.tsx`

</details>

### 8.11. Global State with Context + useReducer

<details>
<summary> Open </summary>

- Code **Todo App**: `https://codesandbox.io/s/global-state-with-context-usereudcer-v75goo `

</details>

### 8.12.

<details>
<summary> Open </summary>

</details>

### 8.13.

<details>
<summary> Open </summary>

</details>

## 9.

<details>
<summary> Open </summary>
</details>
