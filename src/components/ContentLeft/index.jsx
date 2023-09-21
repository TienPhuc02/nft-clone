const ContentLeft = () => {
  return (
    <div className="pt-[50px] pr-[20px] border-r-[1px] border-">
      <div className="header-content-left px-[20px]">
        <div className="logo-nft cursor-pointer flex">
          <img
            src="/logoNFT.png"
            className="max-w-[30px] max-h-[30px] mr-[5px]"
            alt=""
          />
          <span className="font-bold font-[Urbanist,sans] text-[#242731]">
            NFTLia
          </span>
        </div>
      </div>
      <div className="nav-items-content-left mt-[40px]">
        <div className="content-menu-home grid grid-rows-4 mb-[30px]">
          <div className="content-menu-home-items bg-[#3c50e0] py-[12px] rounded-[12px] pl-[20px] pr[28px] text-white flex cursor-pointer">
            <img srcSet="/home.png " className="mr-[16px]" alt="" />
            <span className="font-[Urbanist,sans] font-semibold text-[15px]">
              Home
            </span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/explore.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">Explore</span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/activebird.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">Active Birds</span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/user-add.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">Creators</span>
          </div>
        </div>
        <div className="line px-[12px] mb-[30px] cursor-pointer">
          <div className="bg-gray-100 h-[1px]"></div>
        </div>
        <div className="content-menu-states grid grid-rows-4  mb-[30px]">
          <div className="title-states text-[#808191] font-normal cursor-pointer px-[22px]">
            <span>States</span>
          </div>
          <div className=" cursor-pointer content-menu-home-items py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/chart.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">Rankings</span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/note.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">Activity</span>
          </div>
        </div>
        <div className="line px-[12px] mb-[30px]">
          <div className="bg-gray-100 h-[1px]"></div>
        </div>
        <div className="content-menu-profile grid grid-rows-4 mb-[30px]">
          <div className="title-states text-[#808191] cursor-pointer font-normal px-[22px]">
            <span>Profile</span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/collection.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">My Collection</span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/wallet.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">My Wallet</span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/watchlist.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">My Watchlist</span>
          </div>
          <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
            <img src="/setting.png" className="mr-[15px]" alt="" />
            <span className="font-semibold">Settings</span>
          </div>
        </div>
        <div className="line px-[12px] mb-[30px]">
          <div className="bg-gray-100 h-[1px]"></div>
        </div>
        <div className="content-menu-home-items py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
          <img src="/sun.png" className="mr-[15px]" alt="" />
          <div className="button-toggle w-[60px] pt-[2px] pl-[1px]  h-[24px] pr-[10px] rounded-[12px] bg-[#e4e4e4]">
            <div className="circle-white pt-[2px] pl-[2px] bg-white max-w-[20px] max-h-[20px] w-full h-full rounded-full">
              <div className="circle-blue bg-blue-500 max-w-[16px] max-h-[16px] w-full h-full z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};


// md: responsive min-width, max-mad: responsive max-width
export default ContentLeft;
