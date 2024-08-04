import React from 'react';

interface StarIconProps {
    size?: number;
    color?: string;
    className?: string;
}

const StarIcon = ({ size = 24, color = '#fff', className = '' }: StarIconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z" fill={color} />
        </svg>
    );
};

export default StarIcon;