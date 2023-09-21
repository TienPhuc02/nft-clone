const ContentMenuProfile = () => {
  return (
    <>
      <div className="content-menu-profile grid grid-rows-4 mb-[30px]">
        <div className="title-states text-[#808191] cursor-pointer font-normal px-[22px]">
          <span>Profile</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
         
          <span className="font-semibold">My Collection</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
         
          <span className="font-semibold">My Wallet</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
        
          <span className="font-semibold">My Watchlist</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
         
          <span className="font-semibold">Settings</span>
        </div>
      </div>
    </>
  );
};

export default ContentMenuProfile;
