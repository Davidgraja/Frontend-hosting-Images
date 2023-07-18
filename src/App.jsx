import { useEffect } from "react"
import { useAuthStore, useThemeStore } from "./hooks"
import { AppRouter } from "./router/AppRouter"
import { messages } from "./helpers/messages"

function App() {

  const { errorMessage } = useAuthStore()

  useEffect(() => {
    if(errorMessage){
      messages(errorMessage, "linear-gradient(to right, #EC7063 , #B03A2E )")
    }
  }, [errorMessage])
  
  const {darkMode} = useThemeStore()

  return (
    <div data-theme={darkMode ? 'dark' : 'light'} className=' h-screen font-OpenSans'>
      <AppRouter/>

    </div>
  )
}

export default App
