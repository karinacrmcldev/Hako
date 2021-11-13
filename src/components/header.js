import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { getUserByUserId } from "../services/firebase";
import useUser from "../hooks/use-user";
import { useCategories } from "..//hooks/use-categorysorting";
import SearchBar from "./search-bar";

export default function Header() {
  const { user } = useContext(UserContext);
  const {
    user: { fullName, username, avatarUrl },
  } = useUser();

  return (
    <header className="h-20 bg-white font-fontbasic shadow-xl mb-8 top-0 fixed w-full z-50">
      <div className="container mx-auto max-w-screen h-full">
        <div className="flex justify-between h-full items-center">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img src="/images/logo.png" alt="Hako-logo" className="w-10" />
              </Link>
            </h1>
          </div>
          <SearchBar />
          <div className=" text-center flex items-center align-items">
            {user ? (
              console.log() || (
                <div className="flex items-center">
                  <div className="flex items-center cursor-pointer mr-6">
                    <Link
                      to={`/p/${username ? username : null}`}
                      className="flex items-center"
                    >
                      <div className="flex flex-col items-end mr-2">
                        <span className="text-sm font-medium text-primary">
                          {username ? username : null}
                        </span>
                        <p className="text-xs font-regular text-primary">
                          {fullName ? fullName : null}
                        </p>
                      </div>

                      <img
                        className="rounded-full h-11 w-11 flex object-cover"
                        src={avatarUrl ? avatarUrl.min : null}
                      />
                    </Link>
                  </div>
                </div>
              )
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-default-first font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="rounded text-default-first text-sm font-bold"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}