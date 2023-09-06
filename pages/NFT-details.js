import React from 'react'


//INTERNAL IMPORT 
import {Button, Category, Brand } from '../component/componentsindex';
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";


const NFTDetails = () => {
    return (
        <div>
            <NFTDetailsPage />
            <Category /> 
            <Brand/>
        </div>  
    )
};

export default NFTDetails