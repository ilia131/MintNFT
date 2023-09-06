import React from 'react';
import Image from 'next/image';

//INTERNAL IMPORT
import Style from '../styles/aboutus.module.css';
import {Brand} from '../component/componentsindex';
import images from '../img';


const aboutus = () => {
      const founderArray = [
        {
           name: "ilia gholami",
           postition: "Co-founder and Chief Executive",
           images: images.user10,
        },
        {
            name: "ilia gholami",
            postition: "Co-founder and Chief Executive",
            images: images.user2,
        },
        {
            name: "ilia gholami",
            postition: "Co-founder and Chief Executive",
            images: images.user3
        },
        {
            name: "ilia gholami",
            postition: "Co-founder and Chief Executive",
            images: images.user4,
        },
    ];

    const factsArray = [
        {
            title: "10 million",
            info: "Articles have been public around the world (as of sept.30, 2021)"

        },
        {
            title: "100,000",
            info: "Registrered users account (as of sept. 30, 2021)"

        },
        {
            title: "220+",
            info: "Contries and regions have our presence(as of sept 30, 2021)"

        },
    ]
    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <div>About us</div>
                        <p>
                            We're impartial and indepenedt, and every day We
                            create distinactive, world-class programmers and content
                            which inform, educate and entertain millions of people
                            in the around the world.
                        </p>
                    </div>
                    <div className={Style.about_box_hero_right}>
                        <Image src={images.user5} />
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>Founder</h2>
                    <p>
                        We're impartial and indepenedt, and every day we create
                        distinactive, world-class programmers and content
                    </p>
                </div>
                
                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((el, i)=>(
                            <div className={Style.aboutus_box_founder_box_img}>
                               <Image 
                                  src={el.images} 
                                  alt={el.name}
                                  width={270}
                                  height={270}
                                  className={Style.aboutus_box_founder_box_img_img}
                                  />
                                  <h3>{el.name}</h3>
                                  <p>{el.postition}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>Fast Fact</h2>
                    <p>
                        We're impartial and indepenedt, and every day we create
                        distinactive, world-class programmers and content
                    </p>
                </div>
                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i)=> (
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default aboutus