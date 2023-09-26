import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faCircleDot,
  faFaceSmile,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAlignCenter,
  faArrowDown,
  faBold,
  faInfo,
  faItalic,
  faLink,
  faList,
  faListCheck,
  faPlus,
  faToggleOn,
  faUnderline,
  faUnlock,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentProductActivity = () => {
  return (
    <>
      <div className="content-product-activity col-span-2 py-[20px] px-[24px] bg-[#fcfcfc]">
        <div className="content-product-activity-widget-title-herder flex justify-between mb-[30px]">
          <span className="text-[#1142d] font-semibold">Upload File</span>
          <div className="border-[2px] border-gray-[#6384a7] text-[#808191] py-[8px] px-[14px] rounded-[10px] font-normal">
            Switch to Multiple
          </div>
        </div>
        <div className="content-product-activity-upload-container bg-[#f7f7f7] py-[64px] px-[175px] mb-[30px]">
          <div className="option-upload">
            <div className="title-option-upload text-center mb-[16px]">
              <FontAwesomeIcon
                icon={faUpload}
                className="text-[#808191] mr-[8px]"
              />
              <span className="text-[#2a2c33] font-medium">
                Drag and drop or upload file
              </span>
            </div>
            <p className="text-[15px]">
              PNG, GIF, WEBP, JPG, MP3, MP4 or WEBM. Max 100Mb
            </p>
          </div>
        </div>
        <div className="content-product-activity-dropdown mb-[30px]">
          <div className="content-product-activity-dropdown-title flex mb-[12px]">
            <span className="mr-4 text-[#11142d] text-[16px] font-medium">
              Purchase Type
            </span>
            <div className="w-[16px] h-[16px] bg-[#808191] rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInfo}
                className="text-white text-[8px]"
              />
            </div>
          </div>
          <div className="list-purchase-type grid grid-cols-3 gap-[40px] max-w-[585px]">
            <div className="button-pixed-price p-[20px] border-[2px] border-[#939eee] rounded-[10px] text-center bg-[#ebedfc]">
              <FontAwesomeIcon
                icon={faCircleDot}
                className="text-[#3c50e0] mr-[10px]"
              />
              <span className="text-[#475ae2] font-semibold">Pixed Price</span>
            </div>
            <div className="button-pixed-price p-[20px] border-[2px]  rounded-[10px] ">
              <FontAwesomeIcon
                icon={faCircle}
                className="mr-[10px]  text-[#808191]"
              />
              <span className="text-[#35373e] font-medium text-[15px]">
                Open for bids
              </span>
            </div>
            <div className="button-pixed-price p-[20px] border-[2px]  rounded-[10px] ">
              <FontAwesomeIcon
                icon={faCircle}
                className="mr-[10px] text-[#808191]"
              />
              <span className="text-[#35373e] font-medium text-[14px]">
                Timed Auction
              </span>
            </div>
          </div>
        </div>
        <div className="title-item-details text-[#11142d] font-semibold text-[20px] mb-[32px]">
          Item Details
        </div>
        <div className="user-name-description mb-[60px]">
          <p className="mb-[12px] text-[#11142d] font-semibold">User Name</p>
          <input
            type="text"
            placeholder="jubed001"
            className="bg-[#f7f7f7] py-[14px] pl-[20px] w-full mb-[10px]"
          />
          <p className="text-[#808191] text-[15px]  float-right mb-[10px]">
            0/50
          </p>
          <div>
            <p className="mt-[12px] mb-[12px] text-[#11142d] font-semibold">
              Description
            </p>
            <div className="text-format">
              <div className="text-format-header bg-[#ffffff]  w-full">
                <div className="list-text-format-header grid grid-cols-7 gap-[24px] py-[12px]  pl-[20px] max-w-[300px]">
                  <FontAwesomeIcon icon={faBold} className="text-[#808191]" />
                  <FontAwesomeIcon icon={faItalic} className="text-[#808191]" />
                  <FontAwesomeIcon
                    icon={faUnderline}
                    className="text-[#808191]"
                  />
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    className="text-[#808191]"
                  />
                  <FontAwesomeIcon icon={faLink} className="text-[#808191]" />
                  <FontAwesomeIcon icon={faList} className="text-[#808191]" />
                  <FontAwesomeIcon
                    icon={faAlignCenter}
                    className="text-[#808191]"
                  />
                </div>
                <div className="content-text-format bg-[#f7f7f7] h-[100px] "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="external-link">
          <p className="text-[#11142d] font-semibold mb-[12px]">
            External Link (Optional)
          </p>
          <input
            type="text"
            placeholder="https://www.uihut.com"
            className="bg-[#f7f7f7] w-full placeholder-[#808191] py-[14px] pl-[20px] mb-[30px]"
          />
        </div>
        <div className="category mb-[30px]">
          <div className="category-title flex">
            <p className="text-[#11142d] font-semibold mb-[12px] mr-[10px]">
              Category
            </p>
            <div className="w-[16px] h-[16px] bg-[#808191] rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInfo}
                className="text-white text-[8px]"
              />
            </div>
          </div>
          <div className="bg-[#f7f7f7] w-full pl-[20px] mb-[30px] py-[14px] px-[20px] rounded-[10px] flex justify-between">
            <span className="text-[#808191]">Select Category</span>
            <FontAwesomeIcon icon={faArrowDown} className="text-[#808191]" />
          </div>
        </div>
        <div className="properties mb-[30px]">
          <div className="properties-title flex justify-between">
            <div className="flex">
              <FontAwesomeIcon
                icon={faListCheck}
                className="w-[30px] h-[30px] mr-[20px] text-[#808192]"
              />
              <div>
                <p className="text-[#11142d] mb-[4px] font-semibold text-[13px]">
                  Properties
                </p>
                <p className="text-[#808192] text-[13px]">
                  Tag your NFT for easier searchability for buyers.
                </p>
              </div>
            </div>
            <div className="button-properties-title.add">
              <div className="border border-[#f0f0f0] rounded-[10px] p-[8px]">
                <FontAwesomeIcon icon={faPlus} className="text-[#808191]" />
              </div>
            </div>
          </div>
        </div>
        <div className="unblock-content mb-[30px]">
          <div className="properties-title flex justify-between">
            <div className="flex">
              <FontAwesomeIcon
                icon={faUnlock}
                className="w-[30px] h-[30px] mr-[20px] text-[#808192]"
              />
              <div>
                <p className="text-[#11142d] mb-[4px] font-semibold text-[13px]">
                  Unblock Content
                </p>
                <p className="text-[#808192] text-[13px]">
                  Tag your NFT for easier searchability for buyers.
                </p>
              </div>
            </div>
            <div className="button-properties-title.toggle">
              <div>
                <FontAwesomeIcon
                  icon={faToggleOn}
                  className="text-[#3c50e0] text-[30px] "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="supply mb-[30px]">
          <div className="category-title flex">
            <p className="text-[#11142d] font-semibold mb-[12px] mr-[10px]">
              Supply
            </p>
            <div className="w-[16px] h-[16px] bg-[#808191] rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInfo}
                className="text-white text-[8px]"
              />
            </div>
          </div>
          <p className="text-[#808191] mb-[10px]">
            Select the Blockchain on which the NFT will be created.
          </p>
          <div className="bg-[#f7f7f7] w-full pl-[20px] mb-[30px] py-[14px] px-[20px] rounded-[10px] flex justify-between">
            <span className="text-[#808191]">Select Category</span>
            <FontAwesomeIcon icon={faArrowDown} className="text-[#808191]" />
          </div>
        </div>
        <div className="select-blockchain mb-[30px]">
          <div className="category-title flex">
            <p className="text-[#11142d] font-semibold  mr-[10px] mb-[4px]">
              Select BlockChain
            </p>
            <div className="w-[16px] h-[16px] bg-[#808191] rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInfo}
                className="text-white text-[8px]"
              />
            </div>
          </div>
          <p className="text-[#808191] mb-[10px]">
            The number of items that can be minted. No gas cost to you!{" "}
          </p>
          <div className="bg-[#f7f7f7] w-full pl-[20px] mb-[30px] py-[14px] px-[20px] rounded-[10px] flex justify-between">
            <div>
              <FontAwesomeIcon
                icon={faEthereum}
                className="text-[#3c50e0] mr-[10px] bg-[#d8dcf9] w-[20px] h-[20px] rounded-full"
              />
              <span className="text-[#808191]">Ethereum</span>
            </div>
            <FontAwesomeIcon icon={faArrowDown} className="text-[#808191]" />
          </div>
        </div>
        <div className="choose-collection-container mb-[30px]">
          <div className="select-blockchain-title flex">
            <p className="text-[#11142d] font-semibold  mr-[10px] mb-[4px]">
              Choose Collection
            </p>
            <div className="w-[16px] h-[16px] bg-[#808191] rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInfo}
                className="text-white text-[8px]"
              />
            </div>
          </div>
          <p className="text-[#808191] mb-[10px]">
            This is the collection whare your item will appear.
          </p>
          <div className="list-collection grid grid-cols-3 gap-[30px]">
            <div className="bg-[#f7f7f7] px-[30px] py-[20px] flex flex-col justify-center items-center rounded-[10px]">
              <div
                className="
              border border-[#f0f0f0] w-[40px] h-[40px] rounded-full flex justify-center items-center p-[8px] mb-[10px]"
              >
                <FontAwesomeIcon icon={faPlus} className="text-[#808191]" />
              </div>
              <div className="">Create Collection</div>
            </div>
            <div className="collection-items relative">
              <img src="/Image1.png" alt="" className="rounded-[10px]" />

              <span className="absolute bottom-4 left-[10%] text-white font-[Urbanist,sans] font-semibold">
                Pixa Art Club
              </span>
            </div>
            <div className="collection-items relative">
              <img src="/Image2.png" alt="" className="rounded-[10px]" />
              <span className="absolute bottom-4 left-[10%] text-white font-[Urbanist,sans] font-semibold">
                Loop Digital Art
              </span>
            </div>
          </div>
        </div>
        <div className="check-box-list">
          <div className="checkbox-items flex mb-[15px]">
            <FontAwesomeIcon
              icon={faSquare}
              className="text-[#808191] w-[20px] h-[20px] mr-[10px]"
            />
            <span className="font-[Urbanist,sans] text-[#35373e] font-medium">
              By creating this NFT I agree to the platform&lsquo;s
              <span className="text-[#83bf6e]"> Terms & conditions</span>
              <span> and</span>
              <span className="text-[#83bf6e]"> Community Guidelines.*</span>
            </span>
          </div>
          <div className="checkbox-items flex mb-[30px]">
            <FontAwesomeIcon
              icon={faSquare}
              className="text-[#808191] w-[20px] h-[20px] mr-[10px]"
            />
            <span className="font-[Urbanist,sans] text-[#35373e] font-medium">
              I own the rightd of this NFT.
              <span className="text-[#83bf6e]"> Read More</span>
            </span>
          </div>
        </div>
        <div className="button create w-full py-[14px] bg-[#3c50e0] text-white font-medium text-center rounded-[12px]">
          Create Item
        </div>
      </div>
    </>
  );
};

export default ContentProductActivity;
