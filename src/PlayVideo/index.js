
import Video from "./video";
import { useRef } from "react";

function VideoTiktok() {
  const videoRef = useRef();
  
  const onHandlePlay = () => {
    videoRef.current.play()
  }
  const onHandlePause = () => {
    videoRef.current.pause()
  }
  return (
    <div>
      <Video ref={videoRef} />
      <div>
        <button onClick={onHandlePlay}>Play</button>
        <button onClick={onHandlePause}>Pause</button>
      </div>
    </div>
  )
}

export default VideoTiktok;