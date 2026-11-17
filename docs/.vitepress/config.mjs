import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Campus Marketplace',
  description: 'Research, assumptions, and decisions for an NJIT campus marketplace.',
  base: '/campus-marketplace/',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: false,
  themeConfig: {
    logo: '/mark.svg',
    nav: [
      { text: 'Research', link: '/research' },
      { text: 'Decisions', link: '/decisions' },
      { text: 'Team', link: '/team' }
    ],
    sidebar: [
      { text: 'Start here', items: [{ text: 'Project overview', link: '/' }, { text: 'Research & sources', link: '/research' }] },
      { text: 'Shape the idea', items: [{ text: 'Persona hypotheses', link: '/personas' }, { text: 'Positioning & features', link: '/decisions' }, { text: 'Brand & design', link: '/design' }] },
      { text: 'Shared record', items: [{ text: 'Team contributions', link: '/team' }, { text: "Varnit's contribution", link: '/varnit' }, { text: 'Verification & AI', link: '/verification' }] }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vvm3-IT/campus-marketplace' }],
    editLink: { pattern: 'https://github.com/vvm3-IT/campus-marketplace/edit/main/docs/:path', text: 'Edit this page on GitHub' },
    footer: { message: 'IS117 · Research before building · Not affiliated with NJIT', copyright: 'Varnit Monga · Chase Carty · Jovan Fernandez' }
  }
})
