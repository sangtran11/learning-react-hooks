import { useState, useEffect } from "react";

function UploadImage() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file)
    e.target.file = null;
  }
  return (
    <div>
      <input type="file" onChange={handleChangeAvatar}/>
      { avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  )
}

export default UploadImage;