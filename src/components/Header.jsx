import React from 'react';
import Navbar from './Navbar';

export function Header({ onOpenContact, onExploreEvents }) {
  return (
    <Navbar onOpenContact={onOpenContact} onExploreEvents={onExploreEvents} />
  );
}

export default Header;
