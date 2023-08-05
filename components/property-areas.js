import { memo } from "react";
import PropertyArea from "./property-area";

const cardArray = [
  {
    image: "/icon.svg",
    text: "Sell your home",
  },
  {
    image: "/icon1.svg",
    text: "Rent your home",
  },
  {
    image: "/icon2.svg",
    text: "Buy a home",
  },
  {
    image: "/icon3.svg",
    text: "Free marketing",
  },
];

const PropertyAreas = memo(() => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch  leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch  text-xl leading-[28px] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          {cardArray.map((item, ind) => {
            return (
              <>
                <PropertyArea
                  homeSaleRentId={item.image}
                  homeSaleRentText={item.text}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default PropertyAreas;
