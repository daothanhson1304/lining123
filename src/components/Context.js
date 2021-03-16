import React, { useContext, useEffect, useState } from "react";
export const DataContext = React.createContext([]);
export function DataProvider(props) {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Nike Shoes 01",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      size: [40, 40.5, 41, 42, 43],
      count: 1,
    },
    {
      _id: "2",
      title: "Nike Shoes 02",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 19,
      colors: ["red", "crimson", "teal"],
      size: [40, 40.5, 41, 42, 43],

      count: 1,
    },
    {
      _id: "3",
      title: "Nike Shoes 03",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 50,
      colors: ["lightblue", "white", "crimson", "teal"],
      count: 1,
      size: [40, 40.5, 41, 42, 43],
    },
    {
      _id: "4",
      title: "Nike Shoes 04",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 15,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
      size: [40, 40.5, 41, 42, 43],
    },
    {
      _id: "5",
      title: "Nike Shoes 05",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 10,
      colors: ["orange", "black", "crimson", "teal"],
      size: [40, 40.5, 41, 42, 43],
      count: 1,
    },
    {
      _id: "6",
      title: "Nike Shoes 06",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 17,
      colors: ["orange", "black", "crimson", "teal"],
      size: [40, 40.5, 41, 42, 43],
      count: 1,
    },
    {
      _id: "7",
      title: "Nike Shoes 07",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 15,
      colors: ["orange", "black", "crimson", "teal"],
      size: [40, 40.5, 41, 42, 43],
      count: 1,
    },
    {
      _id: "8",
      title: "Nike Shoes 08",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 10,
      colors: ["orange", "black", "crimson", "teal"],
      size: [40, 40.5, 41, 42, 43],
      count: 1,
    },
    {
      _id: "9",
      title: "Nike Shoes 09",
      description: "UI/UX designing, html css tutorials",
      src: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 17,
      colors: ["orange", "black", "crimson", "teal"],
      size: [40, 40.5, 41, 42, 43],
      count: 1,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  function addCart(id) {
    const check = cart.some((item) => {
      return item._id === id;
    });
    if (!check) {
      const data = products.filter((item) => {
        return item._id === id;
      });
      setCart([...cart, ...data]);
      console.log(cart);
    } else {
      alert("the product has been added to cart");
    }
  }

  function reduction(id) {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
        console.log(item.count);
      }
    });
    setCart([...cart]);
  }

  function increase(id) {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
        console.log(item.count);
      }
    });
    setCart([...cart]);
  }

  function remove(id) {
    cart.forEach((item, indext) => {
      if (item._id === id) {
        cart.splice(indext, 1);
      }
    });
    setCart([...cart]);
  }

  function getTotal() {
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setTotal(res);
  }

  useEffect(() => {
    const dataContext = JSON.parse(localStorage.getItem("dataCart"));
    if (dataContext !== null) {
      setCart(dataContext);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);
  return (
    <DataContext.Provider
      value={{
        products,
        addCart,
        cart,
        reduction,
        increase,
        remove,
        total,
        getTotal,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
