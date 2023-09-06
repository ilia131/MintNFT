import React from 'react';


//INTERNAL IMPORT 
import Style from '../styles/subscription.module.css';
import Subscription from '../Subscription/Subscription';

const subscription = () => {
    const subscriptionArray = [
        {
            plan: "BASIC",
            price: "$15/Mo",
            popular: "POPULAR",
            service: [
                "Everyting in Starter",
                "100 Builds",
                "Progress Reports",
                "Premium Support",
            ],
            
            info: "Literally you probably haven't heard of them jean shorts",
        },
     {
        plan: "BASIC",
        price: "$15/Mo",
        popular: "POPULAR",
        service: [
            "Everyting in Starter",
            "100 Builds",
            "Progress Reports",
            "Premium Support",
        ],
        
        info: "Literally you probably haven't heard of them jean shorts",
     },
     {
        plan: "BASIC",
        price: "$15/Mo",
        popular: "POPULAR",
        service: [
            "Everyting in Starter",
            "100 Builds",
            "Progress Reports",
            "Premium Support",
        ],
        
        info: "Literally you probably haven't heard of them jean shorts",
     }
    ]
    return (
        <div className={Style.Subscription}>
            <div className={Style.Subscription_box}>
                <div className={Style.Subscription_box_info}>
                    <span> Subscription</span>
                    <p>Pricing to fit the needs of any companie size.</p>
                </div>

                <div className={Style.Subscription_box_box}>
                    {subscriptionArray.map((el, i)=>(
                        <Subscription  key={i + 1} i={1} el={el}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default subscription;