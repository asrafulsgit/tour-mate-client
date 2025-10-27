import type { ReactNode } from "react"
import Nav from "./Nav"
import Footer from "./Footer"

interface IProps {
    children : ReactNode
}

const CommonLayout = ({children } : IProps ) => {
  return (
    <div className="mx-auto px-4 container min-h-screen flex flex-col">
         <Nav />
         <div className="grow">{children}</div>
         <Footer />
    </div>
  )
}

export default CommonLayout
