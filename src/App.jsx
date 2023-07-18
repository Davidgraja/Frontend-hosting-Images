import { useEffect } from "react"
import { useAuthStore } from "./hooks"
import { AppRouter } from "./router/AppRouter"
import { messages } from "./helpers/messages"

function App() {

  const { errorMessage } = useAuthStore()

  useEffect(() => {
    if(errorMessage){
      messages(errorMessage, "linear-gradient(to right, #EC7063 , #B03A2E )")
    }
  }, [errorMessage])
  

  return (
    <AppRouter/>
  )
}

export default App
