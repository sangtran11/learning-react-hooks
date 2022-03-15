import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoTop, setShowGoTop] = useState(false);
  const [sizeWidth, setSizeWidth] = useState(window.innerWidth);
  const [count, setCountDown] = useState(180)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY >= 200);
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setSizeWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })

  // Countdown from 180s
  // Cách 1: dùng setInterval
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000)
    return () => clearInterval(timerId);
  }, [])

  // Countdown from 180s
  // Cách 2:
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setCountDown(count - 1);
  //     console.log("count", count);
  //   }, 1000)
  //   return () => clearTimeout(timerId);
  // }, [count])

  const handleGoTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div>
      <h1>Hello anh em</h1>
      <p> Screen width: {sizeWidth}</p>
      <p> Timer: {count}</p>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#FFF", background: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <hr />
      { showGoTop && 
        <button onClick={handleGoTop} 
        style={{position: "fixed", right: 20, bottom: 20}}>Go Top</button>
      }
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
