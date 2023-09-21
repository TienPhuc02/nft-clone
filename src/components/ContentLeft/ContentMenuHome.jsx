const ContentMenuHome = () => {
  return (
    <>
      <div className="content-menu-home grid grid-rows-4 mb-[30px]">
        <div className="content-menu-home-items bg-[#3c50e0] py-[12px] rounded-[12px] pl-[20px] pr[28px] text-white flex cursor-pointer">
         
          <span className="font-[Urbanist,sans] font-semibold text-[15px]">
            Home
          </span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
         
          <span className="font-semibold">Explore</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
        
          <span className="font-semibold">Active Birds</span>
        </div>
        <div className="content-menu-home-items cursor-pointer py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
        
          <span className="font-semibold">Creators</span>
        </div>
      </div>
    </>
  );
};

export default ContentMenuHome;
