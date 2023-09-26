import "./index.css";
import ContentRight from "./pages/components/ContentRight";
import ContentLeft from "./pages/components/ContentLeft";
import ContentRes from "./res/ContentRes";
const App = () => {
  return (
    <>
      <div className="app-container max-[390px]:hidden bg-[#ffffff] w-full pl-[24px]  pr-[36px] pt-[50px] ">
        <div className="flex w-full">
          <div className="max-[390px]:hidden content-container-left w-[240px]">
            <ContentLeft />
          </div>
          <div className="max-[390px]:hidden content-container-right col-start-2 col-span-6 w-[1288px]">
            <ContentRight />
          </div>
        </div>
      </div>
      <div className="app-responsive-container sm:hidden max-[390px]:block max-[390px]:max-w-[390px] max-[390px]:p-[24px]">
        <ContentRes />
      </div>
    </>
  );
};

export default App;
