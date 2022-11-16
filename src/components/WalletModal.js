import React from 'react';
import meta from '../bnb_imgs/image 66.png';
import wallet from '../bnb_imgs/image 69.png';

export default function(props) {

    return     <div className='background'>

    <div className='pop'>
        <div className='one'>
            <h4>Connect Wallet</h4>
            <p id='symbol' onClick={props.removeModal}>x</p>
        </div>
        
        <p>connect your preferred wallet:</p>
        <div className='two'>
            <div id='onee'> 
                <img src={meta}/>
                <h3>Metamask</h3>
            </div>
           <div  id='symbol s'>
                <p id='s'>&gt;</p> 
           </div>
        </div>
        

        <div className='two'>
            <div id='onee'> 
                <img src={wallet}/>
                <h3>WalletConnect</h3>
            </div>
           <div id='symbol s'>
           <p id='s'>&gt;</p> 
           </div>
        </div>
        </div>
    </div>
}
