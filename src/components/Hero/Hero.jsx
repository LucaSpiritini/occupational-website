import "./styles.css"
import Banner from "../Banner/Banner"

const Hero = () => {
  return (
    <>
      <div className="hero-container">

        <Banner />

        <div className="info-container">
          <div className="info1">1</div>
          <div className="info2">2</div>
          <div className="info3">3</div>
        </div>
        
        <div className="info-container">
          <div className="info1">1</div>
          <div className="info2">2</div>
          <div className="info3">3</div>
        </div>

      </div>
    </>
  )    
};

export default Hero
