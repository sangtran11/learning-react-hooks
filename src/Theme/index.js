
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ContentParent from "./ContentParent"

function ToggleThemeApp() {
  const themeContext = useContext(ThemeContext)
  console.log(themeContext);
  return (
    <div>
      <button onClick={themeContext.toggleTheme}>ToggleTheme</button>
      <ContentParent />
    </div>
  )
}

export default ToggleThemeApp;