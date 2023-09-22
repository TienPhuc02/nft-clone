import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderLogo = () => {
  return (
    <>
      <div className="header-content-left px-[20px]">
        <div className="logo-nft cursor-pointer flex">
          <span className="font-bold font-[Urbanist,sans] text-[#242731] text-[20px]">
            <FontAwesomeIcon
              icon={faEthereum}
              className="text-[#3c50e0] mr-[10px] bg-[#d8dcf9] w-[20px] h-[20px] rounded-full"
            />
            NFTLia
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderLogo;
