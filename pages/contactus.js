import React from "react";
import { 
    TiSocialFacebook, 
    TiSocialLinkedin,
    TiSocialTwitter, 
    TiSocialYoutube, 
    TiSocialInstagram, 
} from 'react-icons/ti';
import {HiOutlineMail} from 'react-icons/hi';

//INTERNAL IMPORT 
import Style from '../styles/contactus.module.css';
import formStyle from '../AccountPage/Forms/Form.module.css';
import {Button} from '../component/componentsindex';


const contactus = () =>{
    return (
        <div className={Style.contactus}>
            <div className={Style.contactus_box}>
                <h1>Contact</h1>
                <div className={Style.contactus_box_box}>
                    <div className={Style.contactus_box_box_left}>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>ADDRESS</h3>
                            <p>
                               photo booth prism, portland taiyaki hoodie neutr
                               typewriter
                            </p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>Email</h3>
                            <p>nc.example@example.com</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>PHONE</h3>
                            <p>000-123-456-7890</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3> Socials</h3>
                            <a href="#">
                                <TiSocialFacebook/>
                            </a>
                            <a href="#">
                                <TiSocialInstagram/>
                            </a>
                            <a href="#">
                                <TiSocialYoutube/>
                            </a>
                            <a href="#">
                                <TiSocialTwitter/>
                            </a>
                        </div>
                    </div>
                    <div className={formStyle.contactus_box_box_left}>
                        <form>
                        <div className={formStyle.Form_box_input}>
                        <label htmlFor="name">Full name</label>
                        <input 
                            type="text" 
                            placeholder='ilia gholami' 
                            className={formStyle.Form_box_input_userName}
                        />
                      </div>
                      <div className={formStyle.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                              <input type="text" placeholder="Email" />
                          </div>
                       </div>
                       <div className={formStyle.Form_box_input}>
                          <label htmlFor="description">Message</label>
                          <textarea 
                             name="" 
                             id="" 
                             cols="30" 
                             rows="6"
                             placeholder="something about yourself in a few words"
                        >
                        </textarea>
                        </div>
                        <Button btnName="Send Message" 
                                handleClick={()=> {}}
                                classStyle={Style.button}
                         />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default contactus