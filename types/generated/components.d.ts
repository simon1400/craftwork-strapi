import type { Attribute, Schema } from '@strapi/strapi';

export interface ContentComponentsArticles extends Schema.Component {
  collectionName: 'components_content_components_articles';
  info: {
    displayName: 'Articles';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Component<'link.link'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentComponentsFooterItem extends Schema.Component {
  collectionName: 'components_content_components_footer_items';
  info: {
    displayName: 'FooterItem';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentComponentsIcon extends Schema.Component {
  collectionName: 'components_content_components_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    content: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentComponentsShortContent extends Schema.Component {
  collectionName: 'components_content_components_short_contents';
  info: {
    displayName: 'ShortContent';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentBigImage extends Schema.Component {
  collectionName: 'components_content_big_images';
  info: {
    description: '';
    displayName: 'Velk\u00FD obr\u00E1zek';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentCenterContent extends Schema.Component {
  collectionName: 'components_content_center_contents';
  info: {
    description: '';
    displayName: 'Vycentrovan\u00FD text';
  };
  attributes: {
    items: Attribute.Component<'content-components.short-content', true>;
  };
}

export interface ContentCenterText extends Schema.Component {
  collectionName: 'components_content_center_texts';
  info: {
    description: '';
    displayName: 'Velk\u00FD text kapitoly';
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
    description: '';
    displayName: 'Loga klient\u016F';
  };
  attributes: {
    images: Attribute.Media<'images', true> & Attribute.Required;
    title: Attribute.String;
  };
}

export interface ContentIcons extends Schema.Component {
  collectionName: 'components_content_icons';
  info: {
    description: '';
    displayName: 'Ikonky s textem';
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
    link: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinkNavItem extends Schema.Component {
  collectionName: 'components_link_nav_items';
  info: {
    displayName: 'NavItem';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'Meta';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
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
