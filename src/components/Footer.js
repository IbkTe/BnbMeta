import React from "react";
import meta_logo from "../bnb_imgs/Vector.png";
import facebook from "../bnb_imgs/facebook-263-721950.png";
import instagram from "../bnb_imgs/instagram-216-721958.png";
import twitter from "../bnb_imgs/twitter-241-721979.png";
import WalletModal from '../components/WalletModal.js';
import { useState } from "react";
import logo from "../bnb_imgs/Group.png";


export default function(){
    return<>
    
    <footer>
        <div className="first">
         <div id='foot'>
              <img src={meta_logo}/> 
              <p> Metabnb</p>
            </div>
            <div className="socials">
              <img src={facebook}/>
              <img src={instagram}/>
              <img src={twitter}/>
            </div>
            <p id='copy'>&copy; 2022 Metabnb</p>
        </div>

        <div className="second">
          <ul>
            <li>
              <b>Community</b>
            </li>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlord</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className="third">
          <ul>
            <li>
              <b>Places</b>
            </li>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>
        <div className="fourth">
          <ul>
            <li>
              <b>About us</b>
            </li>
            <li>Road map</li>
            <li>Creator</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
      </footer>
    </>
}