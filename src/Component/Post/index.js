import React from "react";

export const Post = () => {
  return (
    <>
      <div className="py-40 bg-gray-300">
        <div className="h-screen px-2">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
            <div className="md:flex">
              <div className="w-full">
                <div className="flex justify-between items-center p-3">
                  <div className="flex flex-row items-center">
                    <img
                      src="https://i.imgur.com/aq39RMA.jpg"
                      alt=""
                      className="rounded-full"
                      width="50"
                    />

                    <div className="flex flex-row items-center ml-2">
                      <span className="font-bold mr-1">Mautic War</span>

                      <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                      <a
                        href="/"
                        className="text-blue-600 text-sm hover:text-blue-800"
                      >
                        Follow
                      </a>
                    </div>
                  </div>

                  <div className="pr-2">
                    <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i>
                  </div>
                </div>

                <div>
                  <img
                    src="https://i.imgur.com/kOFqgtE.jpg"
                    alt=""
                    className="w-full h-75"
                  />
                </div>

                <div className="p-4 flex justify-between items-center">
                  <div className="flex flex-row items-center">
                    <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
                    <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
                    <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i>
                  </div>

                  <div>
                    <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
