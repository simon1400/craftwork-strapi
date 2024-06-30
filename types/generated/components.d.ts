import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentComponentsArticles extends Schema.Component {
  collectionName: 'components_content_components_articles';
  info: {
    displayName: 'Articles';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    link: Attribute.Component<'link.link'>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentComponentsFooterItem extends Schema.Component {
  collectionName: 'components_content_components_footer_items';
  info: {
    displayName: 'FooterItem';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface ContentComponentsIcon extends Schema.Component {
  collectionName: 'components_content_components_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
    content: Attribute.Text;
  };
}

export interface ContentComponentsShortContent extends Schema.Component {
  collectionName: 'components_content_components_short_contents';
  info: {
    displayName: 'ShortContent';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface ContentBigImage extends Schema.Component {
  collectionName: 'components_content_big_images';
  info: {
    displayName: 'Velk\u00FD obr\u00E1zek';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentCenterContent extends Schema.Component {
  collectionName: 'components_content_center_contents';
  info: {
    displayName: 'Vycentrovan\u00FD text';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'content-components.short-content', true>;
  };
}

export interface ContentCenterText extends Schema.Component {
  collectionName: 'components_content_center_texts';
  info: {
    displayName: 'Velk\u00FD text kapitoly';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface ContentClients extends Schema.Component {
  collectionName: 'components_content_clients';
  info: {
    displayName: 'Loga klient\u016F';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ContentIcons extends Schema.Component {
  collectionName: 'components_content_icons';
  info: {
    displayName: 'Ikonky s textem';
    description: '';
  };
  attributes: {
    icon: Attribute.Component<'content-components.icon', true>;
  };
}

export interface ContentShortArticle extends Schema.Component {
  collectionName: 'components_content_short_articles';
  info: {
    displayName: 'Kapitola s obr\u00E1zkem';
  };
  attributes: {
    articles: Attribute.Component<'content-components.articles', true>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface LinkNavItem extends Schema.Component {
  collectionName: 'components_link_nav_items';
  info: {
    displayName: 'NavItem';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'Meta';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-components.articles': ContentComponentsArticles;
      'content-components.footer-item': ContentComponentsFooterItem;
      'content-components.icon': ContentComponentsIcon;
      'content-components.short-content': ContentComponentsShortContent;
      'content.big-image': ContentBigImage;
      'content.center-content': ContentCenterContent;
      'content.center-text': ContentCenterText;
      'content.clients': ContentClients;
      'content.icons': ContentIcons;
      'content.short-article': ContentShortArticle;
      'link.link': LinkLink;
      'link.nav-item': LinkNavItem;
      'seo.meta': SeoMeta;
    }
  }
}
