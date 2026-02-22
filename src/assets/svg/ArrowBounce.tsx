import { type SVGProps } from 'react';

interface ArrowBounceProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowBounce = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '', 
  ...props 
}: ArrowBounceProps) => {
  
  const iconSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`lucide lucide-chevron-down ${className}`}
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};

export default ArrowBounce;