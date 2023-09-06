import React from "react";

//INTERNAL IMPORT 
import Style from "../styles/index.module.css"
import { HeroSection, 
         Service, 
         BigNFTSlider, 
         Subscribe, 
         Title,
         Category,
         Filter,
         NFTCard,
         Collection,
         FollowerTab,
         AudioLive,
         Slider,
         Brand,
         Video,
              } from '../component/componentsindex'
const Home = () => {
  return (
     <div className={Style.homePage}>
        <HeroSection />
        <Service />
        <BigNFTSlider />
        <Title 
           heading="Audio Collection" 
           paragraph="Discover the most outstanding NFTs in all topics of life"   
        />
        <AudioLive />
        <FollowerTab />
        <Slider />
        <Collection />
        <Title 
           heading="Featured NFTs" 
           paragraph="Discover the most outstanding NFTs in all topics of life"   
        />
        <Subscribe />
        <Brand/>   
        <Title 
           heading="Featured NFTs" 
           paragraph="Discover the most outstanding NFTs in all topics of life"   
        />
        <Filter />
        <NFTCard/>
        <Title 
           heading="Browse by Category" 
           paragraph="Explore the NFTs in the most featured categories"   
        />
        <Category/>
     </div>
  )
}

export default Home;