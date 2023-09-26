import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleButton = () => {
  return (
    <>
      <div className="content-menu-toggle-items py-[12px] rounded-[12px] pl-[20px] pr[28px] flex text-[#808191]">
        <FontAwesomeIcon icon={faSun} className="mr-[10px] w-[24px] h-[24px]" />
        <div className="button-toggle w-[60px] pt-[2px] pl-[1px]  h-[24px] pr-[10px] rounded-[12px] bg-[#e4e4e4]">
          <div className="circle-white pt-[2px] pl-[2px] bg-white max-w-[20px] max-h-[20px] w-full h-full rounded-full">
            <div className="circle-blue bg-blue-500 max-w-[16px] max-h-[16px] w-full h-full z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
