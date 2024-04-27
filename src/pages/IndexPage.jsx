import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Landing } from "../components/Landing";

export function IndexPage() {
    return (
        <div>
            <Landing/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}