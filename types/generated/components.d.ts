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
    image: Attribute.Media & Attribute.Required;
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
    icon: Attribute.Media & Attribute.Required;
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

export interface ContentComponentsSignpostItem extends Schema.Component {
  collectionName: 'components_content_components_signpost_items';
  info: {
    displayName: 'ShortBlock';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    image: Attribute.Media;
  };
}

export interface ContentBigImage extends Schema.Component {
  collectionName: 'components_content_big_images';
  info: {
    displayName: 'Velk\u00FD obr\u00E1zek';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ContentCarousel extends Schema.Component {
  collectionName: 'components_content_carousels';
  info: {
    displayName: 'carousel';
    icon: 'grid';
  };
  attributes: {
    item: Attribute.Component<'content-components.signpost-item', true>;
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
    images: Attribute.Media & Attribute.Required;
    cta: Attribute.Component<'link.link'>;
  };
}

export interface ContentContactBlock extends Schema.Component {
  collectionName: 'components_content_contact_blocks';
  info: {
    displayName: 'ContactBlock';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
    cta: Attribute.Component<'link.link'>;
    imagePoint: Attribute.Media;
    map: Attribute.String;
  };
}

export interface ContentContactForm extends Schema.Component {
  collectionName: 'components_content_contact_forms';
  info: {
    displayName: 'contactForm';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
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

export interface ContentSignpost extends Schema.Component {
  collectionName: 'components_content_signposts';
  info: {
    displayName: 'signpost';
    icon: 'archive';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'content-components.signpost-item', true>;
  };
}

export interface ContentSlider extends Schema.Component {
  collectionName: 'components_content_sliders';
  info: {
    displayName: 'slider';
    icon: 'dashboard';
  };
  attributes: {
    item: Attribute.Component<'content-components.signpost-item', true>;
  };
}

export interface ContentWisiwig extends Schema.Component {
  collectionName: 'components_content_wisiwigs';
  info: {
    displayName: 'wisiwig';
    icon: 'collapse';
  };
  attributes: {
    contentWisiwig: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'custom';
        }
      >;
  };
}

export interface LinkIconsLink extends Schema.Component {
  collectionName: 'components_link_icons_links';
  info: {
    displayName: 'iconsLink';
    icon: 'emotionHappy';
  };
  attributes: {
    link: Attribute.String;
    icon: Attribute.Media;
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
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-components.articles': ContentComponentsArticles;
      'content-components.footer-item': ContentComponentsFooterItem;
      'content-components.icon': ContentComponentsIcon;
      'content-components.short-content': ContentComponentsShortContent;
      'content-components.signpost-item': ContentComponentsSignpostItem;
      'content.big-image': ContentBigImage;
      'content.carousel': ContentCarousel;
      'content.center-content': ContentCenterContent;
      'content.center-text': ContentCenterText;
      'content.clients': ContentClients;
      'content.contact-block': ContentContactBlock;
      'content.contact-form': ContentContactForm;
      'content.icons': ContentIcons;
      'content.short-article': ContentShortArticle;
      'content.signpost': ContentSignpost;
      'content.slider': ContentSlider;
      'content.wisiwig': ContentWisiwig;
      'link.icons-link': LinkIconsLink;
      'link.link': LinkLink;
      'link.nav-item': LinkNavItem;
      'seo.meta': SeoMeta;
    }
  }
}
