// "use client";
import filterNames from "@/types/filterEnums";
import {
    PiCaretDownThin,
    PiCaretLeftThin,
    PiCaretRightThin,
    PiCaretUpThin
} from "react-icons/pi";
import Recommend from "./Recommend";
//   import MobileSidebar from "./MobileFilterSidebar";
//   import { filterNames } from "./Products";



const FilterRecommend = ({ click, handleClick, totalProduct }: { totalProduct: string, click: string, handleClick: (filterName: Exclude<filterNames, filterNames.None>) => void }) => {


    return (
        <>
            <div className="border border-slate-300 flex items-center justify-evenly h-14 mt-8 lg:justify-between lg:px-10">
                <div className="uppercase text-xl font-bold lg:text-lg flex gap-1 items-center">
                    <span className="cursor-pointer hidden font-medium lg:block mr-3" >
                        {totalProduct} ITEMS
                    </span>
                    <span className="cursor-pointer lg:hidden" onClick={() => handleClick(filterNames.MobileFilter)}>
                        {click === filterNames.None ? "Filter" : "Close"}
                    </span>
                    {click === filterNames.DesktopFilter ? (
                        <PiCaretRightThin className="hidden -mt-1 lg:block" />
                    ) : (
                        <PiCaretLeftThin className="hidden -mt-1 lg:block" />
                    )}
                    <span className="cursor-pointer hidden lg:block" onClick={() => handleClick(filterNames.DesktopFilter)}>
                        {click === filterNames.None ? "Show Filter" : "Hide Filter"}
                    </span>
                </div>
                <div className="w-[0.5px] h-9 bg-slate-300 lg:hidden"></div>
                <div className="relative">
                    <div className="uppercase text-xl font-semibold flex items-centers lg:text-lg">
                        <span
                            className="cursor-pointer mr-3"
                            onClick={() => handleClick(filterNames.Recommended)}
                        >
                            Recommended
                        </span>
                        {click === "recommended" ? (
                            <PiCaretUpThin className="mt-[3.5px]" />
                        ) : (
                            <PiCaretDownThin className="mt-[3.5px]" />
                        )}
                    </div>
                    <Recommend click={click} />
                </div>
            </div>
            {/* <MobileSidebar isOpen={click} onClose={handleClick} /> */}
        </>
    );
};

export default FilterRecommend;
