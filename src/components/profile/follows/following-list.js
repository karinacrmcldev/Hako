import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { getUserByUserId } from "../../../services/firebase";

export default function FollowingList({ list }) {
  const [users, setUsers] = useState([]);
  // ---------------------------------------
  useEffect(() => {
    function getUserObjByUserId() {
      list.map(async (id) => {
        const [user] = await getUserByUserId(id);
        setUsers((users) => [...users, user]);
      });
    }
    if (list) {
      getUserObjByUserId();
    }
  }, [list]);

  const SingleUserInfo = ({ user }) => {
    return (
      <div>
        {user ? (
          <div className="flex justify-between mt-2  hover:bg-gray-background cursor-pointer px-4 py-1">
            <Link
              to={`/p/${user ? user.username : null}`}
              className="flex items-center"
            >
              <div className="flex items-center">
                <img
                  src={
                    user
                      ? user.avatarUrl.min
                      : "https://i.ibb.co/ZY5mytK/user-deleted.png"
                  }
                  className="avatar-list rounded-full object-cover"
                />
                <p className="text-sm font-medium ml-2">{user.username}</p>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="userinfo-modal absolute mt-4 ml-60 z-100 overflow-auto  flex flex-col">
      {users.length > 0 ? (
        users.sort().map((item) => {
          return <SingleUserInfo user={item} key={item.userId} />;
        })
      ) : (
        <Loader type="ThreeDots" color="#9A86B5" height={20} width={20} />
      )}
    </div>
  );
}