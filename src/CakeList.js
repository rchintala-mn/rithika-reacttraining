import React from "react";
import Cake from "./Cake";
// import { useState } from "react";

const CakeList = () => {
  var items = [
    {
      item: "PineApple Cake",
      image:
        "https://www.fnp.com/images/pr/x/v20221130174924/pineapple-cake-half-kg_1.jpg",
      price: 549,
      description:
        " Cake Flavour-Pineapple ,Type of Cake- Cream, Weight- Half Kg, Shape- Round, Serves- 4-6",
    },
    {
      item: "Mango Mania Cream Cake Eggless",
      image:
        "https://www.fnp.com/images/pr/x/v20230601221106/mango-mania-cream-cake-eggless_1.jpg",
      price: 765,
      description:
        " A perfect treat for mango lovers who can't resist the sweet and tangy taste of this fruit.",
    },
    {
      item: "Blueberry Glaze Cake- Half Kg",
      image:
        "https://www.fnp.com/images/pr/x/v20221205202622/blueberry-glaze-cake-half-kg_1.jpg",
      price: 875,
      description:
        "Cake Flavour- Blueberry,Type of Cake- Cream,Weight- Half Kg,Shape- Round,Serves- 4-6 People",
    },
    {
      item: "Truffle Walnut Cake Half Kg",
      image:
        "https://www.fnp.com/images/pr/x/v20221214202909/truffle-walnut-cake-half-kg_1.jpg",
      price: 735,
      description:
        "Cake Flavour- Truffle Walnut,Type of Cake- Cream,Weight- Half Kg,Shape- Round,Serves- 4-6 People",
    },
    {
      item: "Rosy White Forest Cake- Half Kgs",
      image:
        "https://www.fnp.com/images/pr/x/v20221130174937/rosy-white-forest-cake-half-kg_5.jpg",
      price: 825,
      description:
        "Cake Flavour- White Forest,Type of Cake- Cream,Weight- Half Kg,Shape- Round,Serves- 4-6 People",
    },
    {
      item: "Floral Fantasy Chocolate Cake 1.5 Kg",
      image:
        "https://www.fnp.com/images/pr/x/v20230406183235/floral-fantasy-chocolate-cake-15-kg_1.jpg",
      price: 1535,
      description:
        "Cake Flavour- White Forest,Type of Cake- Cream,Weight- Half Kg,Shape- Round,Serves- 4-6 People",
    },
    {
      item: "Gems Filled Heart Pinata- Truffle",
      image:
        "https://www.fnp.com/images/pr/x/v20221214202752/gems-filled-heart-pinata-truffle_1.jpg",
      price: 1745,
      description:
        "Cake Flavour- Truffle Pinata Cake,Type of Cake- Cream,Weight- Half Kg,Shape- Round,Serves- 4-6 People",
    },
    {
      item: "Pastel Pearl Chocolate Cream Cake 2 Kg",
      image:
        "https://www.fnp.com/images/pr/x/v20230406183249/pastel-pearl-chocolate-cream-cake-2-kg_1.jpg",
      price: 1925,
      description:
        "Cake Flavour- Chocolate,Type of Cake- Cream,Weight- Half Kg,Shape- Round,Serves- 4-6 People",
    },
    {
      item: "Red Velvet Heart Cream Cake- Half Kgs",
      image:
        "https://www.fnp.com/images/pr/x/v20200831182442/red-velvet-heart-cream-cake-half-kg_1.jpg",
      price: 775,
      description:
        "Cake Flavour-  Red Velvet,Type of Cake- Cream,Weight- Half Kg,Shape- Round,Serves- 4-6 People",
    },
  ];
  function findItem(data) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].image === data.image) {
        return items[i];
      }
    }
    return;
  }

  return (
    <div>
      {items.map((eachItem) => {
        return <Cake data={eachItem} findItem={findItem} />;
      })}
    </div>
  );
};

export default CakeList;
