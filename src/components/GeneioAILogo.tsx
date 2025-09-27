import React from 'react';

interface GeneioAILogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const GeneioAILogo: React.FC<GeneioAILogoProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-12 w-auto'
  };

  return (
    <img 
      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fc11ed7e-9caf-4839-afc3-59a60a830856.png" 
      alt="GeneioAI Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default GeneioAILogo;