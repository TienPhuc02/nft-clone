import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import "./index.css";
const App = () => {
  return (
    <>
      <div className="app-container bg-[#ffffff] w-[1578px] pl-[24px]  pr-[36px] pt-[50px]">
        <div className="flex w-full">
          <div className="max-[390px]:hidden  content-container-left w-[240px]">
            <ContentLeft />
          </div>
          <div className="content-container-right col-start-2 col-span-6 w-[1288px]">
            <ContentRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
