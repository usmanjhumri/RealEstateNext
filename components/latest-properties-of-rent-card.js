import { memo } from "react";
import LatestProperty from "./latest-property";
const cardsProperty = [
  {
    img: "/unsplashrlwe8f8anoc@2x.png",
    car: "/car.svg",
    bathtub: "/bathtub.svg",
    arrowsOut: "/arrowsout.svg",
    shareNetwork: "/sharenetwork.svg",
    plus: "/plus.svg",
  },
  {
    img: "/unsplashrlwe8f8anoc1@2x.png",
    car: "/car.svg",
    bathtub: "/bathtub.svg",
    arrowsOut: "/arrowsout.svg",
    shareNetwork: "/sharenetwork.svg",
    plus: "/plus.svg",
  },
  {
    img: "/unsplashrlwe8f8anoc2@2x.png",
    car: "/car1.svg",
    bathtub: "/bathtub1.svg",
    arrowsOut: "/arrowsout.svg",
    shareNetwork: "/sharenetwork.svg",
    plus: "/plus.svg",
  },
  {
    img: "/unsplashrlwe8f8anoc3@2x.png",
    car: "/car1.svg",
    bathtub: "/bathtub1.svg",
    arrowsOut: "/arrowsout.svg",
    shareNetwork: "/sharenetwork.svg",
    plus: "/plus.svg",
  },
];

const LatestPropertiesOfRentCard = memo(() => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px] text-left text-[14.51px] text-gray-700">
          {cardsProperty.map((item, ind) => {
            return (
              <>
                <LatestProperty
                  propertyImage={item.img}
                  car={item.car}
                  bathtub={item.bathtub}
                  arrowsOut={item.arrowsOut}
                  shareNetwork={item.shareNetwork}
                  plus={item.plus}
                />
              </>
            );
          })}
        </div>
      </div>

      <button className="cursor-pointer leading-[24px] font-medium rounded bg-primary-500 flex flex-row py-3 px-6 items-start justify-start text-base text-gray-white">
        Load more listing
      </button>
    </div>
  );
});

export default LatestPropertiesOfRentCard;
