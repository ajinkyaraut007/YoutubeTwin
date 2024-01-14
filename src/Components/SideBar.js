function SideBar() {
  return (
    <div className="w-48 p-4">
      <div className="border-b-2 p-4">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <div className=" border-b-2 p-4">
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
