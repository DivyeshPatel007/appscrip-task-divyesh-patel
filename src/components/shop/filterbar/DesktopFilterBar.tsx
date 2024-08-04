'use client'

import { filterSections } from '@/consts';
import React, { useState } from 'react'
import { PiCaretDown, PiCaretUpThin } from 'react-icons/pi';

const DesktopFilterBar = () => {
    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: Set<string> }>({});

    const toggleSection = (title: string) => {
        setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
    };

    const handleFilterChange = (sectionTitle: string, value: string) => {
        setSelectedFilters(prev => {
            const newSet = new Set(prev[sectionTitle] || []);
            if (newSet.has(value)) {
                newSet.delete(value);
            } else {
                newSet.add(value);
            }
            return { ...prev, [sectionTitle]: newSet };
        });
    };

    return (
        <div className="w-[450px] bg-white shadow-md rounded-lg overflow-hidden px-5">
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Filters</h2>
            </div>
            <div className="overflow-y-auto max-h-[calc(100vh-150px)]">
                {filterSections.map((section) => (
                    <div key={section.title} className="border-b last:border-b-0">
                        <button
                            className="w-full px-4 py-3 text-left font-medium flex justify-between items-center"
                            onClick={() => toggleSection(section.title)}
                        >
                            {section.title}
                            {expandedSections[section.title] ? <PiCaretUpThin /> : <PiCaretDown />}
                        </button>
                        {expandedSections[section.title] && (
                            <div className="px-4 pb-3">
                                {section.categories.map((category) => (
                                    <label key={category.value} className="flex items-center space-x-2 py-1">
                                        <input
                                            type="checkbox"
                                            name={section.title}
                                            value={category.value}
                                            checked={selectedFilters[section.title]?.has(category.value) || false}
                                            onChange={() => handleFilterChange(section.title, category.value)}
                                            className="form-checkbox h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
                                        />
                                        <span>{category.label}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesktopFilterBar