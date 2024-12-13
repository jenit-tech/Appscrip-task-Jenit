import React from 'react';
import { Header }from './Header/Header';
import { DiscoverProducts }from './Discover/DiscoverProducts';
import {ItemsHeader} from './ItemsHeader/ItemsHeader'
import {Items} from './Items/items'
import {Footer} from './Footer/Footer'

export default function Home() {
  return (
    <div>
      {/* Add other components here */}
      <Header />
      <DiscoverProducts/>
      <ItemsHeader/>
      <Items />
      <Footer/>
    </div>
  );
}
