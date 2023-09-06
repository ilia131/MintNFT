import React, { useState, useEffect } from 'react';
import Image from "next/image"

//INTERNAL IMPORT
import Style from '../styles/connectWallet.module.css';
import images from "../img";

const connectWallet = () => {
    const [activeBtn, setativeBtn] = useState(1);
    const providerArray = [
        {
            provider: images.TYYYY,
            name: "Metamask",
        },
        {
            provider: images.TYYYY,
            name: "WalletConnect",
        },
        {
            provider: images.TYYYY,
            name: "Walletlink",
        },
        {
            provider: images.TYYYY,
            name: "Formatic",
        },
    ]
    return (
        <div className={Style.connectWallet}>
            <div className={Style.connectWallet_box}>
                <h1>Connect your wallet</h1>
                <p className={Style.connectWallet_box_para}>
                    Connect with one of our avaliable wallet providers or create a new 
                </p>

                <div className={Style.connectWallet_box_provider}>
                    {providerArray.map((el, i)=>(
                        <div className={`${Style.connectWallet_box_provider_item} ${
                            activeBtn == i + 1 ? Style.active : ""}`}
                           key={i + 1}
                           onClick={()=> setativeBtn(i + 1)}
                        >
                            <Image 
                                src={el.provider} 
                                alt={el.provider} 
                                width={50} height={50}
                                className={Style.connectWallet_box_provider_item_img}
                            />
                            <p>{el.name}</p>
                        </div>               
                    ))}
                </div>
            </div>
        </div>
    )
}

export default connectWallet