import { profile_img } from "../Constants";

function CommentSection({ info }) {
  return (
    <div className="ml-4 flex pt-4 ">
      <img src={profile_img} className="h-8 mr-4" />
      <div className="">
        <h1 className="font-bold">{info.name}</h1>
        <h1>{info.text}</h1>
        {info?.replies?.map((cmnt) => {
          return <CommentSection info={cmnt} />;
        })}
      </div>
    </div>
  );
}

export default CommentSection;
