import React from 'react';


//INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from '../component/componentsindex';
import {SearchBar} from '../SearchPage/searchBarindex';
import {Filter} from "../component/componentsindex";
import { NFTCardTwo , Banner } from '../collectionPage/collectionIndex';
import images from '../img';



//INTERNAL IMPORT 
const searchPage = ()=> {

    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
    ]
    return (
        <div className={Style.searchPage}>
            <Banner bannerImage={images.TYYYY}/>
            <SearchBar/>
            <Filter />
            <NFTCardTwo NFTData={collectionArray}/>
            <Slider />
            <Brand />
        </div>
    )
}

export default searchPage;