import bg3 from "../assets/bg3.png"
import Card from "./Card"

export default function Projects(){
    return(
        <div>
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${bg3})` }}
            >
                <Card title="poop" description="poop pooop pooop"/>
            </div>
        </div>
    )
}