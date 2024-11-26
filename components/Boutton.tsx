import { Plus } from 'lucide-react';
import React from 'react';

type BouttonProps = {
  text?: string;
  Icon?: React.ElementType;
  onClick?: () => void;
  className?: string;
};

const Boutton: React.FC<BouttonProps> = ({
  text,
  Icon = Plus,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`font-lufgaRegular flex items-center px-4 py-3 text-white w-fit cursor-pointer ${className}`}
    >
      <Icon />
      {text}
    </div>
  );
};

export default Boutton;
