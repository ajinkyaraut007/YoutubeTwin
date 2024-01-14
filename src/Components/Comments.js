import { useEffect } from "react";
import { comment_img_profile, profile_img } from "../Constants";
import CommentSection from "./commentSection";

function CommentList({ comments }) {
  return comments.map((cmnt) => {
    return <CommentSection info={cmnt} />;
  });
}

const commentData = [
  {
    name: "Ajinkya Raut",
    text: "Visca El Barca",
    replies: [
      {
        name: "Ajinkya Raut",
        text: "Visca El Barca",
        replies: [
          {
            name: "Ajinkya Raut",
            text: "Visca El Barca",
            replies: [
              {
                name: "Ajinkya Raut",
                text: "Visca El Barca",
              },
              {
                name: "Ajinkya Raut",
                text: "Visca El Barca",
              },
              {
                name: "Ajinkya Raut",
                text: "Visca El Barca",
              },
            ],
          },
          {
            name: "Ajinkya Raut",
            text: "Visca El Barca",
          },
          {
            name: "Ajinkya Raut",
            text: "Visca El Barca",
          },
        ],
      },
      {
        name: "Ajinkya Raut",
        text: "Visca El Barca",
      },
      {
        name: "Ajinkya Raut",
        text: "Visca El Barca",
      },
    ],
  },

  {
    name: "Ajinkya Raut",
    text: "Visca El Barca",
  },

  {
    name: "Ajinkya Raut",
    text: "Visca El Barca",
    replies: [],
  },
];

function Comments() {
  return (
    <div className="p-4">
      <h1 className="text-xl">Comments</h1>

      <CommentList comments={commentData} />
    </div>
  );
}

export default Comments;
