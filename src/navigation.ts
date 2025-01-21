import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: '#about',
    },
    {
      text: 'Servicios',
      href: '#services',
    },
    {
      text: 'Sucursales',
      href: '#sucursales',
    },
    // {
    //   text: 'Contacto',
    //   href: '#contacto'
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Términos y condiciones', href: getPermalink('/terms') },
    { text: 'Políticas de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/rojisa_motores_y_equipos?igsh=MWQwdTYzb3I1aGZ2bw== ',
    },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: ' https://www.facebook.com/ROJISASCL' },
  ],
};
