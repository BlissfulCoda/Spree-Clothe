import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import Crown from "@assets/Crown.svg";
import CardContainer from "@components/shared/image";
import Button from "@components/shared/Button";

export default function Header(): JSX.Element {
  const [nav, setnav] = useState<boolean>(false);

  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <header className="w-full">
      <div className="bg-slate-900 h-10 flex items-center justify-between px-4 text-[9px] font-Inter">
        <span className=" text-white opacity-70 tracking-wide">
          Customer Care
        </span>
        <span className="text-white opacity-70 tracking-wide">
          Shipping & Returns
        </span>
      </div>
      <div className="flex justify-between items-center w-full px-4 2xl:px-16 h-16 shadow-lg">
        <nav className="flex justify-between items-center w-full">
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <FiMenu size={23} />
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <img
                src={Crown}
                alt="Spree-logo"
                className="absolute -top-[6px] h-3"
              />
              <h4 className="font-Montez text-3xl font-light pl-12">Spree</h4>
            </div>
            <ul className="text-xs hidden md:flex">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>About</li>
              </Link>
              <Link to="/">
                <li>Explore</li>
              </Link>
            </ul>
          </div>

          <div className="flex space-x-2 ">
            <ul className="text-sm flex hidden md:flex space-x-5">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>About</li>
              </Link>
              <Link to="/">
                <li>Explore</li>
              </Link>
            </ul>
            <div className="flex opacity-90 space-x-3 justify-center items-center ">
              <span className="hidden">
                <GrSearch size={20} />
              </span>
              <div className="flex items-center space-x-[.1rem]">
                <span className="bg-beige h-8 w-8 flex items-center justify-center rounded-full p-2">
                  <MdShoppingCart size={17} />
                </span>
                <h5 className="text-xs hidden">0</h5>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500 md:hidden"
            : "ease-in duration-500"
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[85%] sm:w-[85%] md:w-[45%] h-screen bg-white w-full justify-between ease-in duration-300"
              : "fixed -left-[100%] top-0 justify-between ease-in duration-200"
          }
        >
          <div className="flex justify-between pt-3 px-3 mb-4 shadow-lg h-16 border">
            <div className="relative flex items-center mt-1">
              <img
                src={Crown}
                alt="Spree-logo"
                className="absolute top-[1px] h-3"
              />
              <h4 className="font-Montez pl-2 text-3xl font-light">Spree</h4>
            </div>
            <div className="flex items-center justify-center hidden">
              <h4 className="font-light text-sm">Sign in</h4>
              <span className=" px-3 text-gray-300">
                <hr className="text-gray-300" />
              </span>
              <h4 className="font-light text-sm">Register</h4>
            </div>
            <div
              className="rounded-full shadow-md w-8 h-8 shadow-gray-200  cursor-pointer flex items-center justify-center mt-1"
              onClick={handleNav}
            >
              <AiOutlineClose className="text-purple-500" />
            </div>
          </div>

          <div className="flex grid gap-1 grid-cols-2 mx-8 h-96 mb-28">
            {["Shop Women", "Shop Men", "Shop Coats", "Shop Summer"].map(
              (name: string, i) => (
                <div key={i}>
                  <CardContainer num={i + 1} name={name} />
                </div>
              )
            )}
          </div>
          <div className="w-10/12 mx-auto space-y-5">
            <Button className="h-12 w-full bg-black text-white text-xs">
              SIGN IN
            </Button>
            <h5 className="text-xs text-center text-zinc-800 font-extralight">
              Don’t have an account?{" "}
              <span className="font-bold underline opacity-100 text-black">
                Sign up for free
              </span>
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
}
