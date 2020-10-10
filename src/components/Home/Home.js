import React from "react";
import "./Home.css";
import Product from "../Products/Products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Product"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321354"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED"
            price={39.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
          />
          <Product
            id="49538011"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light,..."
            price={35.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
          />
          <Product
            id="49238011"
            title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic & LED..."
            price={31.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="BEBONCOOL PS4 Controller Charger, Controller USB Charging Station Dock for DualShock 4, PlayStation 4 Charging Station..."
            price={40.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41VbT96pAWL._AC_SY200_.jpg"
          />

          <Product
            id="545487748"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red..."
            price={109.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51vOyKGea+L._AC_SY200_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="90829552"
            title="PICTEK Gaming Mouse Wired [7200 DPI] [Programmable] [Breathing Light] Ergonomic Game USB Computer Mice RGB Gamer Desktop..."
            price={45.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/41dqioIt0wL._AC_SY200_.jpg"
          />

          <Product
            id="90829332"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red..."
            price={109.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41PDAAtkyGL._AC_SY200_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;