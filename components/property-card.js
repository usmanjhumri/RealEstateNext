import { memo, useMemo } from "react";
import Link from "next/link";

const PropertyCard = memo(
  ({ cityName, propBackgroundImage, propPadding, propBoxSizing }) => {
    const card1Style = useMemo(() => {
      return {
        backgroundImage: propBackgroundImage,
        padding: propPadding,
        boxSizing: propBoxSizing,
      };
    }, [propBackgroundImage, propPadding, propBoxSizing]);

    return (
      <Link
        className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start  bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-white font-body-large-400 md:flex-[unset] md:self-stretch"
        href="/properties"
        style={card1Style}
      >
        <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
          <div className=" leading-[32px] font-semibold">{cityName}</div>
          <div className=" text-base leading-[24px] text-center">
            25 listings
          </div>
        </div>
      </Link>
    );
  }
);

export default PropertyCard;
