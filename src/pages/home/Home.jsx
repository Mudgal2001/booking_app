import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import Header from "../../components/navbar/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Property from "../../components/propertyList/Property"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by Property type</h1>
        <Property/>
        <h1 className="homeTitle">Homes guest love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home