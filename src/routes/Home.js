import logo from "../bnb_imgs/Group.png";
import opensea from "../bnb_imgs/logo.png";
import mbtoken from "../bnb_imgs/Group 59536.png";
import metamask from "../bnb_imgs/Group 4038.png";
import frame_1 from "../bnb_imgs/Frame 151.png";
import frame_2 from "../bnb_imgs/Frame 151 (1).png";
import frame_3 from "../bnb_imgs/Frame 151 (2).png";
import frame_4 from "../bnb_imgs/Frame 151 (3).png";
import frame_5 from "../bnb_imgs/Frame 151 (4).png";
import frame_6 from "../bnb_imgs/Frame 151 (6).png";
import frame_7 from "../bnb_imgs/Frame 151 (7).png";
import frame_8 from "../bnb_imgs/Frame 151 (9).png";
import rating_star from "../bnb_imgs/Frame 59528.png";
import nft_img from "../bnb_imgs/Frame 59546.png";
import meta_logo from "../bnb_imgs/Vector.png";
import facebook from "../bnb_imgs/facebook-263-721950.png";
import instagram from "../bnb_imgs/instagram-216-721958.png";
import twitter from "../bnb_imgs/twitter-241-721979.png";
import WalletModal from '../components/WalletModal.js';
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function() {

  return (
    <div className="App">
     <Header/>
      <div className="body">
        <div className="left">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="btn">
            <input type="text" placeholder="  Search for location" />
            <button>Search</button>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="token">
        <div id="one">
          <img src={mbtoken} className='img'/>
          <p> MBToken</p>
        </div>

        <div id="one">
          <img src={metamask} className='img'/>
          <p id="metamask"> METAMASK</p>
        </div>

        <div id="one">
          <img src={opensea} className='img'/>
          <p id="opensea"> OpenSea</p>
        </div>
      </div>
      <div className="place_to_stay" id="com">
        <h1>Inspiration for your next adventure</h1>
        <div className='one'>
          <div className="each_place_to_stay">
            <img src={frame_1} className='img'/>

            <div className="description">
              <p>Desert king</p>
              <p><b>1MBT per night</b></p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <div id='star'><img src={rating_star}/></div>

          </div>

          <div className="each_place_to_stay" >
            <img src={frame_2} className='img'/>

            <div className="description">
              <p>Desert king</p>
              <p><b>1MBT per night</b></p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <div id='star'><img src={rating_star}/></div>
          </div>

          <div className="each_place_to_stay">
            <img src={frame_3} className='img' />

            <div className="description">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <div id='star'><img src={rating_star}/></div>
          </div>

          <div  className="each_place_to_stay">
            <img src={frame_4} className='img' />

            <div className="description">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div id='star'><img src={rating_star}/></div>

          </div>
        </div>

        <div className='one'>
          <div className="each_place_to_stay">
            <img src={frame_5} className='img'/>

            <div className="description">
              <p>Desert king</p>
              <p><b>1MBT per night</b></p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <div id='star'><img src={rating_star}/></div>

          </div>

          <div className="each_place_to_stay">
            <img src={frame_6} className='img'/>

            <div className="description">
              <p>Desert king</p>
              <p><b>1MBT per night</b></p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <div id='star'><img src={rating_star}/></div>
          </div>

          <div className="each_place_to_stay">
            <img src={frame_7} className='img' />

            <div className="description">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>

            <div id='star'><img src={rating_star}/></div>
          </div>

          <div  className="each_place_to_stay">
            <img src={frame_8} className='img' />

            <div className="description">
              <p>Desert king</p>
              <p>
                <b>1MBT per night</b>
              </p>
            </div>

            <div className="avaliability">
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div id='star'><img src={rating_star}/></div>

          </div>
        </div>


      </div>

      <div className="nfts" id="nfts">
        <div className='nfts_one'>
              <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets amazing
              gift cards which are traded as NFTs. These NFTs gives our cutomer
              access to loads of our exclusive services.
            </p>
            <button>Learn more</button>
        </div>
        

      <div className='nfts_two'><img src={nft_img}/></div>
          </div>
<Footer/>
    </div>
  );
}
