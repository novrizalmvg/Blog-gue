// import Footer from '../components/Footer.vue'
export default {
    title: 'Novrizal',
    description: 'Just playing around.',
    optimizeDeps: {
      include: ['@fortawesome/fontawesome-free/css/all.css'],
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog' },
        { text: 'Jurnal', link: '/jurnal' },
        { text: 'Contact', link: '/contact' },
        { text: 'Search', link: '/search' },
      ],
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2023-present Novrizal",
      },
    },
  };
  