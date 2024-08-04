import { options } from '@/consts';
import filterNames from '@/types/filterEnums';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Recommend = ({ click }: { click: string }) => {
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');


    return (
        <div className={`z-40 bg-white absolute top-12 -left-5 w-[250px] shadow-lg px-10 py-4 ${click === filterNames.Recommended ? 'block ' : 'hidden'}`}>
            {options.map((option) => (
                <div
                    key={option.value}
                    className={`flex items-center p-2 cursor-pointer  text-gray-700 ${selectedOption === option.value ? 'text-gray-900 font-bold' : 'text-gray-700'
                        }`}
                    onClick={() => setSelectedOption(option.value)}
                >

                    <FaCheck className={`mr-2  ${selectedOption === option.value ? 'opacity-100 ' : 'opacity-0'}`} />
                    <span>{option.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Recommend;