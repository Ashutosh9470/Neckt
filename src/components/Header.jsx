import React from 'react';
import Navbar from './Navbar';

export function Header({ onOpenContact }) {
  return (
    <Navbar onOpenContact={onOpenContact} />
  );
}

export default Header;
