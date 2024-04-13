import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButtons extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Buttons';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    icon: Attribute.String;
    Link: Attribute.String;
  };
}

export interface SectionsHeroTextSection extends Schema.Component {
  collectionName: 'components_sections_hero_text_sections';
  info: {
    displayName: 'Hero Text Section';
    icon: 'star';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Subtitle: Attribute.Text;
    Button: Attribute.Component<'elements.buttons', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.buttons': ElementsButtons;
      'sections.hero-text-section': SectionsHeroTextSection;
    }
  }
}
