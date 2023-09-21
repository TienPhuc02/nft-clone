import ContentMenuHome from "./ContentMenuHome";
import ContentMenuProfile from "./ContentMenuProfile";
import ContentMenuStates from "./ContentMenuStates";
import HeaderLogo from "./HeaderLogo";
import Line from "./Line";
import ToggleButton from "./ToggleButton";

const ContentLeft = () => {
  return (
    <div className="mt-[30px] pr-[20px] border-r-[1px] ">
      <HeaderLogo />
      <div className="nav-items-content-left mt-[40px]">
        <ContentMenuHome />
        <Line />
        <ContentMenuStates />
        <Line />
        <ContentMenuProfile />
        <Line />
        <ToggleButton />
      </div>
    </div>
  );
};

// md: responsive min-width, max-mad: responsive max-width
export default ContentLeft;
