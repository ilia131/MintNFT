import react from 'react'

//INTERNAL IMPORT 
import Style from "../styles/upload-nft.module.css";
import { UloadNFT }from '../UploadNFT/uploadNFTIndex';

const upload_nft = () => {
    return (
       <div className={Style.uploadNFT}>
          <div className={Style.uploadNFT_box}>
            <div className={Style.uploadNFT_box_heading}>
               <h1>Create New NFT</h1>
               <p>
                  you can set prefferred display name, create your profile URL and manage other
                  personal settings.
               </p>
             </div>

             <div className={Style.uploadNFT_box_title}>
                <h2>Image, Video, Audio, Or 3D Model</h2>
                <p>
                     file types supported JPG, PNG, GIF, SVG, MP4, WEBM, WAV, OGG, GLB, GLTF, Max size: 100MB
                </p>
             </div>

             <div className={Style.uploadNFT_box_form}>
                 <UloadNFT />
             </div>
          </div>
       </div>
    )
}

export default upload_nft