import { useEffect, useState } from "react";
import "./App.css";
import threedot from "./images/icon-menu.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import firstImg from "./images/image-product-1.jpg";
import SecondImg from "./images/image-product-2.jpg";
import thirdImg from "./images/image-product-3.jpg";
import fouthImg from "./images/image-product-4.jpg";
import previous from "./images/icon-previous.svg";
import firstthumbnailImg from "./images/image-product-1-thumbnail.jpg";
import secondthumbnailImg from "./images/image-product-2-thumbnail.jpg";
import thirdthumbnailImg from "./images/image-product-3-thumbnail.jpg";
import fourthhumbnailImg from "./images/image-product-4-thumbnail.jpg";
import next from "./images/icon-next.svg";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import deleteImage from "./images/icon-delete.svg";
import close from "./images/icon-close.svg";

function App() {
  const mainImageList = [firstImg, SecondImg, thirdImg, fouthImg];
  const thumbnailList = [
    firstthumbnailImg,
    secondthumbnailImg,
    thirdthumbnailImg,
    fourthhumbnailImg,
  ];
  const [count, setCount] = useState(0);
  const [mainImageNo, setmainImageNo] = useState(0);
  const [orderNo, setorderNo] = useState<number[]>([0, 0, 0, 0]);

  const [thumbImage, setthumbImage] = useState(0);
  const [cartList, setcartList] = useState<number[]>([]);

  const [changedNumber, setchangedNumber] = useState(0);
  const nexthandler = () => {
    if (mainImageNo === 3) {
      null;
    } else {
      setmainImageNo(mainImageNo + 1);
    }
  };
  const previoushandler = () => {
    console.log(mainImageNo);
    if (mainImageNo === 0) {
      null;
    } else {
      setmainImageNo(mainImageNo - 1);
    }
  };
  const handleDelete = (item: number, index: number) => {
    const cartListUpdate = [...cartList];
    cartListUpdate.splice(index, 1);
    setcartList(cartListUpdate);
    const updatedOrderNo = [...orderNo];
    updatedOrderNo.splice(item, 1, 0);

    setorderNo(updatedOrderNo);
    console.log(orderNo);
  };
  const addition = () => {
    const notifi = document.querySelector(".notifi");
    if (!cartList.includes(mainImageNo)) {
      setcartList([...cartList, mainImageNo]);
      const updatedOrderNo = [...orderNo];
      updatedOrderNo.splice(mainImageNo, 1, 0);
      updatedOrderNo[mainImageNo]++;
      /* console.log(cartList);
      console.log(mainImageNo); */
      setorderNo(updatedOrderNo);
      /* console.log(orderNo); */
    } else {
      /* UPDATING THE ORDERNO WHICH HAS BEEN ASSIGNED PER EACH IMAGE */
      const updateOrderNo = [...orderNo];
      updateOrderNo[mainImageNo]++;
      setorderNo(updateOrderNo);
      console.log(orderNo.length);
    }
    console.log(orderNo);
  };

  const substract = () => {
    const notifi = document.querySelector(".notifi");
    if (orderNo[mainImageNo] === 0) {
      null;
    } else {
      const updateOrderNo = [...orderNo];
      console.log(orderNo);
      updateOrderNo[mainImageNo] -= 1;
      if (updateOrderNo[mainImageNo] === 0) {
        const index = cartList.indexOf(mainImageNo);
        handleDelete(mainImageNo, index);
      }
      setorderNo(updateOrderNo);
    }
  };

  let cartListCheck = false;
  useEffect(() => {
    if (cartList.length === 0) {
      cartListCheck = false;
    } else {
      cartListCheck = true;
    }
    const notfi = document.querySelector(".notfi");
    if (cartList.length === 0) {
      notfi?.classList.add("hidden");
      notfi?.classList.remove("flex");
    } else {
      notfi?.classList.remove("hidden");
      notfi?.classList.add("flex");
    }
  });
  const toggleNav = () => {
    const navigation = document.querySelector("nav");
    navigation?.classList.toggle("hidden");
  };
  const toggleCartList = () => {
    const cartItems = document.querySelector(".cartList");
    cartItems?.classList.toggle("hidden");
  };
  return (
    <div className="App">
      <header className=" xl:mb-12 md:mt-4 md:mx-2 md:pb-4 flex items-center justify-between px-4 py-2 md:mb-8 md:border-b md:border-solid md:border-SCGrayishblue">
        <div className="flex items-center gap-3">
          <img
            src={threedot}
            alt=""
            onClick={toggleNav}
            className="md:hidden"
          />
          <h1 className="font-extrabold font-Kumbh-B text-3xl">sneakers</h1>
        </div>
        <div className="flex items-center gap-3 relative">
          <img src={cart} alt="cart" onClick={toggleCartList} />
          <img
            src={avatar}
            alt="avatar"
            className=" w-8"
            onClick={toggleCartList}
          />
          <div className="notfi bg-SCOrange hidden text-white text-sm absolute -top-2 items-center left-2 w-4 justify-center rounded-full">
            {orderNo.length < mainImageNo + 1 && <p className="note">0</p>}
            {orderNo.length >= mainImageNo + 1 && (
              <p className="note">{orderNo[mainImageNo]}</p>
            )}
          </div>
        </div>
      </header>
      <main className=" lg:gap-14  xl:mx-32 xl:gap-0 lg:mx-14 lg:pr-16 lg:flex lg:items-center lg:justify-center">
        <div className="relative">
          <img
            onClick={previoushandler}
            src={previous}
            alt=""
            className=" md:lg:hidden bg-white absolute px-4 py-3 rounded-full top-1/2 transform -translate-y-1/2"
          />
          <img
            onClick={() => {
              const highlight = document.querySelector(".highlight");
              if (window.innerWidth > 1020) {
                highlight?.classList.remove("hidden");
                highlight?.classList.add("lg:flex");
              }
            }}
            src={mainImageList[mainImageNo]}
            alt=""
            className="lg:w-full rounded-md xl:w-3/4"
          />
          <img
            onClick={nexthandler}
            src={next}
            alt=""
            className="md:lg:hidden next bg-white absolute px-4 py-3 rounded-full top-1/2 transform right-0 -translate-y-1/2"
          />
          <div className="hidden lg:flex gap-4 mt-4">
            <img
              style={{ width: "4.9rem", height: "4.9rem" }}
              onClick={() => {
                setmainImageNo(0);
              }}
              src={firstthumbnailImg}
              alt=""
              className=" rounded-md hover:border-2 hover:border-SCOrange"
            />
            <img
              style={{ width: "4.9rem", height: "4.9rem" }}
              onClick={() => {
                setmainImageNo(1);
              }}
              src={secondthumbnailImg}
              alt=""
              className=" rounded-md hover:border-2 hover:border-SCOrange"
            />
            <img
              style={{ width: "4.9rem", height: "4.9rem" }}
              onClick={() => {
                setmainImageNo(2);
              }}
              src={thirdthumbnailImg}
              alt=""
              className=" rounded-md hover:border-2 hover:border-SCOrange"
            />
            <img
              style={{ width: "4.9rem", height: "4.9rem" }}
              onClick={() => {
                setmainImageNo(3);
              }}
              src={fourthhumbnailImg}
              alt=""
              className=" rounded-md hover:border-2 hover:border-SCOrange"
            />
          </div>
        </div>
        <section className="text px-4 pt-5 md:px-32 lg:px-0">
          <h3 className=" text-SCOrange pb-2 font-Kumbh-B text-sm">
            SNEAKER COMPANY
          </h3>
          <h1 className=" lg:w-fit lg:mb-6  lg:text-5xl font-extrabold font-Kumbh-B text-3xl mb-4">
            Fall Limited Edition Sneakers
          </h1>
          <p className=" font-Kumbh-M text-SCDarkgrayishblue">
            These low-profile sneakers are your perfect casual wear comparison.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer
          </p>
          <div className="pricing flex justify-between my-5">
            <div className="currentprice gap-2 flex">
              <h1 className=" font-Kumbh-B font-extrabold text-2xl">$125.00</h1>
              <p className=" text-SCOrange bg-SCPaleorange px-2 py-1 text-center font-bold font-Kumbh-B rounded-md">
                50%
              </p>
            </div>
            <p className="previousPrice font-Kumbh-M font-bold line-through text-SCDarkgrayishblue">
              $250.00
            </p>
          </div>
          <div className="l xl:gap-6 lg:flex lg:items-center lg:justify-center lg:gap-2">
            <div className="lg:w-2/6 priceChangers flex items-center justify-between px-4 bg-SCLightgrayishblue py-4  rounded-lg">
              <img src={minus} alt="" onClick={substract} />
              {orderNo.length < mainImageNo + 1 && (
                <p className="increamentNo font-Kumbh-B font-extrabold">0</p>
              )}
              {orderNo.length >= mainImageNo + 1 && (
                <p className="increamentNo font-Kumbh-B font-extrabold">
                  {orderNo[mainImageNo]}
                </p>
              )}

              <img src={plus} alt="" onClick={addition} />
            </div>
            <div
              className=" lg:w-4/6 bg-SCOrange flex justify-center gap-3 py-4 rounded-md my-4 "
              onClick={addition}
            >
              <img src={cart} alt="" />
              <p className="text-white">Add to cart</p>
            </div>
          </div>
        </section>
      </main>
      <div className="cartList hidden bg-white  absolute top-14 lg:right-8 lg:left-auto lg:w-80 left-5 rounded-md ">
        <div className=" font-Kumbh-B font-bold pt-3 pb-4 border-b px-4 border-solid border-gray-400 mb-4">
          Cart
        </div>
        <div className="px-7 lg:px-4">
          {cartList.length === 0 && (
            <div className=" text-SCDarkgrayishblue px-16 pt-10 pb-14 font-Kumbh-B font-bold ">
              Your cart is empty
            </div>
          )}
          {cartList.length != 0 && (
            <div>
              {cartList.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={mainImageList[item]}
                      alt=""
                      className="w-12 rounded-md"
                    />
                    <div>
                      <p className="text-nowrap">
                        Fall limited Edition Sneakers
                      </p>
                      <p className="r">
                        $125.00 x{" "}
                        <span className="amount">{orderNo[item]}</span>{" "}
                        <span className="Total font-bold">$125.00</span>
                      </p>
                    </div>
                    <img
                      src={deleteImage}
                      alt="deleteImage"
                      onClick={() => {
                        handleDelete(item, index);
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-center bg-SCOrange rounded-md py-3 mb-4">
                Checkout
              </div>
            </div>
          )}
        </div>
      </div>
      <nav className="absolute  md:block md:bg-none md:h-auto md:left-44 md:top-8 md:p-0 top-0 bg-white h-screen text-lg font-bold pl-12 pt-8 pr-32 hidden">
        <img
          src={close}
          alt=""
          className="mb-8 md:hidden"
          onClick={toggleNav}
        />
        <div className="md:flex md:gap-4 ">
          <li className=" md:text-SCGrayishblue md:text-base md:hover:text-black list-none mb-2 md:m-0 hover:border-b-4 hover:border-solid hover:border-SCOrange pb-2 md:pb-4">
            Collection
          </li>
          <li className=" md:text-SCGrayishblue md:text-base md:hover:text-black list-none mb-2 md:m-0 hover:border-b-4 hover:border-solid hover:border-SCOrange pb-2 md:pb-4">
            Men
          </li>
          <li className="md:text-SCGrayishblue md:text-base md:hover:text-black list-none mb-2  md:m-0 hover:border-b-4 hover:border-solid hover:border-SCOrange pb-2 md:pb-4">
            Women
          </li>
          <li className="md:text-SCGrayishblue md:text-base md:hover:text-black list-none mb-2 md:m-0 hover:border-b-4 hover:border-solid hover:border-SCOrange pb-2 md:pb-4">
            About
          </li>
          <li className="md:text-SCGrayishblue md:text-base md:hover:text-black list-none mb-2 md:m-0 hover:border-b-4 hover:border-solid hover:border-SCOrange pb-2 md:pb-4">
            Contact
          </li>
        </div>
      </nav>
      <div className="highlight hidden  overlay fixed top-0 left-0 items-center justify-center w-full h-full bg-SCSVerydarkblue z-50  ">
        <div className="relative highlightmain">
          <div className=" flex justify-end mb-2">
            <img
              onClick={() => {
                const highlight = document.querySelector(".highlight");
                if (window.innerWidth > 1020) {
                  highlight?.classList.add("hidden");
                  highlight?.classList.remove("lg:flex");
                }
              }}
              src={close}
              alt=""
              className=" hover:text-SCOrange"
            />
          </div>
          <img
            style={{ top: "40%" }}
            onClick={previoushandler}
            src={previous}
            alt=""
            className="bg-white absolute px-4 py-3 rounded-full -left-5 "
          />
          <div className="">
            <img
              src={mainImageList[mainImageNo]}
              alt=""
              className="rounded-md"
            />
          </div>

          <img
            style={{ top: "40%" }}
            onClick={nexthandler}
            src={next}
            alt=""
            className=" next bg-white absolute px-4 py-3 rounded-full -right-5"
          />
          <div className="hidden lg:flex gap-4 mt-4 justify-center">
            <img
              onClick={() => {
                setmainImageNo(0);
              }}
              src={firstthumbnailImg}
              alt=""
              className=" highlightthumb rounded-md  hover:border-2 hover:border-SCOrange"
            />
            <img
              onClick={() => {
                setmainImageNo(1);
              }}
              src={secondthumbnailImg}
              alt=""
              className=" highlightthumb rounded-md  hover:border-2 hover:border-SCOrange"
            />
            <img
              onClick={() => {
                setmainImageNo(2);
              }}
              src={thirdthumbnailImg}
              alt=""
              className=" highlightthumb rounded-md hover:border-2 hover:border-SCOrange"
            />
            <img
              onClick={() => {
                setmainImageNo(3);
              }}
              src={fourthhumbnailImg}
              alt=""
              className=" highlightthumb rounded-md hover:border-2 hover:border-SCOrange"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
