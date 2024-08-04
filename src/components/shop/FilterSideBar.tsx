import filterNames from '@/types/filterEnums'
import React from 'react'
import DesktopFilterBar from './filterbar/DesktopFilterBar'

const FilterSideBar = ({ click, handleClick }: { click: string, handleClick: (filterName: Exclude<filterNames, filterNames.None>) => void }) => {


    if (click === filterNames.DesktopFilter || click === filterNames.MobileFilter) {
        return <DesktopFilterBar />
    }
    // if (click === filterNames.MobileFilter) {
    //     return (
    //         <div>mobilefilterbars</div>
    //     )
    // }
    return null


}

export default FilterSideBar