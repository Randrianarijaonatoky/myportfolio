
import Nav from "../../components/nav/Nav"
import Header from "../../components/header/Header"
import '../../style/base.scss'
import '../../style/home.scss'
import Card1 from "../../components/card1/Card1"
import Projet from "../../components/projet/Projet"
import Competances from "../../components/competances/Competances"
import Apropos from "../../components/apropos/Apropos"
import Footer from "../../components/footer/Footer"
import'../home/max.scss'







function Home() {
    return(
        <>

                <Nav />
                <Header /> 
                <Apropos />
                {/* <Card1 /> */}
                <Competances />
                <Projet />
                {/* <MyParticles /> */}
                <Footer />


                
                




        </>
    )
}

export default Home