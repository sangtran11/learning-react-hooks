
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContentChild() {
  const themeContext = useContext(ThemeContext)
  return (
    <p className={themeContext.theme}>
      Lorem ipsum isak la lorem
    </p>
  )
}

export default ContentChild;