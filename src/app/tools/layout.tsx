import Footer from "@/components/layout/Footer"
import NavBar from "@/components/layout/NavBar"
import ToolGrid from "@/components/layout/ToolGrid"
import { PropsWithChildren } from "react"

const ToolsLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <NavBar />
            <section className="mb-24">
                {children}
            </section>
            <ToolGrid/>
            <Footer/>
        </>
    )
}

export default ToolsLayout