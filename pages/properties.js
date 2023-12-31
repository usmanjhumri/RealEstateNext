import "antd/dist/antd.min.css";
import { Menu, Dropdown, Pagination, Drawer } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import LocationCard from "../components/location-card";
import Footer from "../components/footer";
import Link from "next/link";

const PropertiesGridView = () => {
  return (
    <div className=" bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className=" leading-[72px] font-semibold">Properties</div>
          <div className=" text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>
              {" "}
              <Link
                href="/"
                className="text-base leading-[24px] text-whitesmoke-200 font-body-large-400"
              >
                {" "}
                {`Home / `}
              </Link>{" "}
            </span>
            <span className="font-medium text-gray-white">
              Properties usman
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className=" w-6 h-6" alt="" src="/listbullets.svg" />
              <img className=" w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className=" leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <LocationCard />
        {/* <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <div className="rounded bg-primary-50 flex flex-row p-2.5 items-start justify-start">
            <img className=" w-6 h-6" alt="" src="/arrowleft.svg" />
          </div>
        </div> */}
        <Pagination
          className="flex flex-row w-6 h-6 items-end justify-center gap-[8px] text-center text-primary-500 rounded  flex flex-row p-2.5 items-start justify-start"
          defaultCurrent={1}
          total={50}
        />
      </div>

      <Footer
        houseLine="/houseline2.svg"
        socialMediaLogo="/social-media-logo5.svg"
        socialMediaLogo1="/social-media-logo6.svg"
        socialMediaLogo2="/social-media-logo7.svg"
        socialMediaLogo3="/social-media-logo8.svg"
        socialMediaLogo4="/social-media-logo9.svg"
        footerSectionOverflow="hidden"
      />
    </div>
  );
};

export default PropertiesGridView;
