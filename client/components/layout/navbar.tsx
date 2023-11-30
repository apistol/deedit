import Axios from "axios";
import Link from "next/link";
import { Fragment } from "react";

import { useAuthState, useAuthDispatch } from "../../context/auth";
import deeditLogo from "../../public/assets/deedit.png";
import useCurrentMenuOption from "../../hooks/useCurrentMenuOption";
import classNames from "classnames";
import useChangeRoute from "../../hooks/useChangeRoute";

const Navbar: React.FC = () => {
  const { authenticated, loading } = useAuthState();
  const dispatch = useAuthDispatch();
  const menu = useCurrentMenuOption();
  const changeRoute = useChangeRoute()

  const logout = () => {
    Axios.get("/auth/logout")
      .then(() => {
        dispatch("LOGOUT");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-12 px-5">
        {/* Logo and title */}
        <div className="flex items-center">
          {/*<Link href="/">*/}
          {/*  <span>*/}
          {/*    /!* TODO correctly import this image *!/*/}
          {/*    <img src={deeditLogo} className="w-8 h-8 mr-2" />*/}
          {/*  </span>*/}
          {/*</Link>*/}
          <span className="text-3xl font-semibold">
            <Link href="/">DeedIt</Link>
          </span>
        </div>
        {/* Serach Input */}
        {/*<div className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">*/}
        {/*  <i className="pl-4 pr-3 text-gray-500 fas fa-search "></i>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"*/}
        {/*    placeholder="Search"*/}
        {/*  />*/}
        {/*</div>*/}
        {/* Auth buttons */}
        <div className="flex">
          {!loading &&
            (authenticated ? (
              // Show logout
              <button
                className="w-32 py-1 mr-4 leading-5 hollow blue button"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <Fragment>
                <Link href="/login">
                  <span className="w-32 py-1 mr-4 leading-5 hollow blue button">
                    log in
                  </span>
                </Link>
                <Link href="/register">
                  <span className="w-32 py-1 leading-5 blue button">
                    sign up
                  </span>
                </Link>
              </Fragment>
            ))}
        </div>
      </div>

      <div className="flex justify-center fixed w-screen pt-20">
        <div className="menu bg-white p-1 rounded-2xl flex items-center">
          <div onClick={() => changeRoute("/Acasa")} className={classNames("bg-black mx-3 p-1 px-3 rounded-2xl text-white", {"bg-black ": menu === "Acasa" })}>Acasa</div>
          <div onClick={() => changeRoute("/Sex")} className={classNames("mx-3", { "bg-black" : menu === "Sex"})}>Sex</div>)
          <div onClick={() => changeRoute("/Alcool")} className={classNames("mx-3", { "bg-black" : menu === "Alcool"})}>Alcool</div>)
          <div onClick={() => changeRoute("/Droguri")} className={classNames("mx-3", { "bg-black" : menu === "Droguri"})}>Droguri</div>)
        </div>
      </div>
    </div>
  );
};

export default Navbar;
