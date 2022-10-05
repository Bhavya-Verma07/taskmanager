import React,{useState} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
// import { Autocomplete } from "@mui/material";


export const Post = () => {
const [liked, setLiked]= useState(false);
const [saved, setSaved]= useState(false);

  return (
    <>




      <div className="py-40 bg-gray-300 my-3">
        <div className="h-screen px-2 text-center"  style={{marginLeft:"300px"}}>
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md ">
            <div className="md:flex" >
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
                <div className="row mt-2" style={{height:"40px"}}>
                  <div className="col-4" style={{float:"right", curser: "pointer"}}
                  onClick={()=> setLiked(!liked)}>
                   {liked? <FavoriteIcon fontSize="large" />: <FavoriteBorderIcon fontSize="large"/>}
                   
                  </div>
                  <div className="col-4"
                   onClick={()=> alert("commented!")}
                   style={{curser: "pointer"}}>
                    <CommentIcon fontSize="large"/>
                  </div>
                  <div className="col-4"
                  style={{curser: "pointer"}}
                  onClick={()=> setSaved(!saved)}>
                    {saved?<BookmarkIcon fontSize="large"/>:<BookmarkBorderIcon fontSize="large" />
                    }
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
