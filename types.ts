
// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  delay: string;
}

export interface NavLinkProps {
  href: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}