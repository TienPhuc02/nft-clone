import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import "./index.css";
const App = () => {
  return (
    <>
      <div className="app-container max-w-[1440px] pl-[24px] flex w-full  pr-[36px] pt-[50px]">
        <div className="content-container-left">
          <ContentLeft />
        </div>
        <div className="content-container-right col-start-2 col-span-6 w-[1124px]">
          <ContentRight />
        </div>
      </div>
    </>
  );
};

export default App;
