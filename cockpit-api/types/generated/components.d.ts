import type { Schema, Attribute } from '@strapi/strapi';

export interface NavlinksMainNavbarChildren extends Schema.Component {
  collectionName: 'components_navlinks_main_navbar_children';
  info: {
    displayName: 'Main Navbar Children';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
  };
}

export interface NavlinksMainNavbarLinks extends Schema.Component {
  collectionName: 'components_navlinks_main_navbar_links';
  info: {
    displayName: 'Main Navbar Parent Links';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    children: Attribute.Component<'navlinks.main-navbar-children', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navlinks.main-navbar-children': NavlinksMainNavbarChildren;
      'navlinks.main-navbar-links': NavlinksMainNavbarLinks;
    }
  }
}
