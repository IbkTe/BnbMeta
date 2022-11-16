import React from "react";
import logo from "../bnb_imgs/Group.png";
import { useState } from "react";
import WalletModal from '../components/WalletModal.js';


export default function(){
    const [showModal, setShowModal] = useState(false);

    return <div className="header">
    {showModal && <WalletModal removeModal={() => setShowModal(false)}/>}
      <nav>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul class="navbar">
          <li><a href="/">Home</a></li>
          <li><a href="/places">Place to stay</a> </li>
          <li><a href="/#nfts">NFTs</a></li>
          <li><a href="/#com">Community</a></li>
        </ul>  
        <input type ='checkbox' id = 'check' />
        <label for ='check' className="classbtn">     
        <div className="menu">
          <div className="menu_o"></div>
          <div className="menu_o"></div>
          <div className="menu_o"></div>
        </div>
        </label>
        <button onClick={() => setShowModal(true)}>Connect wallet</button>
      </nav>
    </div>
}