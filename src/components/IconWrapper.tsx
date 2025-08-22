import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  className?: string;
  color?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className, color }) => {
  const IconComponent = Icon as React.ComponentType<{ className?: string, color?: string}>;
  return <IconComponent className={className} color={color} />;
};

export default IconWrapper; 