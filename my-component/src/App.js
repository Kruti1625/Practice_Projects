import React, { useState } from "react";
import "./App.css";
import DealItems from "./components/DealItems";
import images from "./components/images/images";

function App() {
  const items = [
    {
      id: 1,
      image: images.beanBag,
      title: "Bean Bag Covers",
      price: "Extra 10% off",
      about: "Space Saving Furniture",
    },
    {
      id: 2,
      image: images.ruffledTops,
      title: "Ruffled Tops,Lingerie",
      price: "From ₹149+Extra 10%Off",
      about: "Harpa,Zivame,Dreambe...",
    },
    {
      id: 3,
      image: images.tables,
      title: "Coffee Tables & more",
      price: "From ₹199",
      about: "Deal of The Day",
    },
    {
      id: 4,
      image: images.jewellary,
      title: "Don't Miss Extra disc...",
      price: "From ₹199+Extra 10% Off",
      about: "Bestsellers@lowestprices",
    },
    {
      id: 5,
      image: images.kidsWinter,
      title: "Kids Winter Wear",
      price: "Min 50% Off",
      about: "Nick and Jonas ,...",
    },
  ];

  const [lightMode, setMode] = useState(true);
  // const lightModeFunc = () => {
  //   if(lightMode === true){
  //     setMode(false);
  //   } else {
  //     setMode(true);
  //   }
  // }
  return (
    <div className={`body ${lightMode ? "lightBody" : "darkBody"}`}>
      <button
        onClick={() => {
          // lightMode ? setMode(false) : setMode(true);
          setMode((prevLightMode) => !prevLightMode);
        }}
        className={lightMode ? "light" : "dark"}
      >
        <ion-icon name="moon"></ion-icon>
      </button>
      <div className="section-items container">
        {items.map((item) => (
          <DealItems
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            about={item.about}
          />
        ))}
        {/* 1 */}
        {/* <DealItems image={items[0].image} title={items[0].title} price={items[0].price} about={items[0].about}/>
              <DealItems image={items[1].image} title={items[1].title} price={items[1].price} about={items[1].about}/>
              <DealItems image={items[2].image} title={items[2].title} price={items[2].price} about={items[2].about}/>
              <DealItems image={items[3].image} title={items[3].title} price={items[3].price} about={items[3].about}/>
              <DealItems image={items[4].image} title={items[4].title} price={items[4].price} about={items[4].about}/> */}
        {/* 2 */}
        {/* {items.map(item => <DealItems key={item.id} image={item.image} title={item.title} price={item.price} about={item.about}/>)} */}
        {/* 3 */}
        {/* {items.map(props => <DealItems key={props.id} {...props} />)} */}
      </div>
    </div>
  );
}

export default App;
