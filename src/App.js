import React, { useState } from "react";
import "./App.css";
import Content from "./Content";
import UploadImage from "./Upload";
import FakeChat from "./FakeChat";
import AutoCountDown from "./AutoCountDown";
import IncreaseUseCallback from "./IncreaseUseCallback";
import ShoppingCart from "./ShoppingCart";
import TodoApp from "./Todo";
import ToggleThemeApp from "./Theme/";
import GlobalTodoApp from "./GlobalTodoApp";
import PlayVideo from "./PlayVideo/";

// xử lí side-effect, ưu tiên render UI trước, sau đó xử lí side-effect sau
// vì nếu code chạy từ trên xuống, dễ bị stuck or tác vụ nặng, xử lí lâu sẽ ảnh hưởng tới performance

// 1.useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// - ít dùng, chủ yếu dùng làm những tác vụ 2 way binding
// - k dùng call API, vì mỗi lần call, setState -> component re-render -> lại call -> loop vô hạn

// 2.useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// - thực hiện 1 logic gì đó 1 lần duy nhất, sau khi component được mounted
// - và không muốn nó gọi lại khi component re-render
// - dùng để call API.

// 3.useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi dependencies thay đổi
// -----------------------
// 1.callback luôn được gọi sau khi component mounted
// 2.CleanUp function luôn được gọi trước khi component unmounted
// 3.Clean up function luôn được gọi trước callback, trừ lần mounted đầu tiên

function App() {
  const [show, setShow] = useState(false);
  const [uploadImg, setUploadImg] = useState(false);
  const [fakeChat, setFakeChat] = useState(false);
  const [countDown, setCountDown] = useState(false);
  const [showIncrease, setShowIncrease] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showTodoApp, setShowTodoApp] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [globalTodo, setShowGlobalTodo] = useState(false);
  const [showPlayVideo, setShowPlayVideo] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => setUploadImg(!uploadImg)}
      >
        Upload Img
      </button>
      <button style={{ marginLeft: 20 }} onClick={() => setFakeChat(!fakeChat)}>
        Fake Chat
      </button>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => setCountDown(!countDown)}
      >
        Count Down
      </button>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => setShowIncrease(!showIncrease)}
      >
        Show Increase
      </button>
      <button style={{ marginLeft: 20 }} onClick={() => setShowCart(!showCart)}>
        Show Cart
      </button>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => setShowTodoApp(!showTodoApp)}
      >
        Todo App
      </button>
      <button
          style={{ marginLeft: 20 }}
          onClick={() => setShowTheme(!showTheme)}
        >
        ToggleTheme
      </button>
      <button
          style={{ marginLeft: 20 }}
          onClick={() => setShowGlobalTodo(!globalTodo)}
        >
        ToggleGlobalTodo
      </button>
      <button
        style={{ marginLeft: 20 }}
        onClick={() => setShowPlayVideo(!showPlayVideo)}
      >ShowVideo</button>
      <br />
      <br />
      <br />
      {show && <Content />}
      {uploadImg && <UploadImage />}
      {fakeChat && <FakeChat />}
      {countDown && <AutoCountDown />}
      {showIncrease && <IncreaseUseCallback />}
      {showCart && <ShoppingCart />}
      {showTodoApp && <TodoApp />}
      {showTheme && <ToggleThemeApp />}
      {globalTodo && <GlobalTodoApp />}
      {showPlayVideo && <PlayVideo />}
    </div>
  );
}

export default App;
