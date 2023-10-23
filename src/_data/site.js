module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Ambco Hygiene Care',
  siteDescription: 'Professional & Innovative Cleaning Tools & Accessories',
  siteType: 'Person', // schema
  locale: 'en',
  lang: 'en',
  author: '', // i.e. author's name. Must be set.
  authorEmail: '', // i.e. email of the author
  authorWebsite: '', // i.e. the personal site of the author
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the author
    mastodonProfile: '' // i.e. url to the author's mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My great Web Development Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  address: {
    firm: 'Ambco Hygiene Care',
    street:
      'D-20, Shop-1, Ground Floor, Sainath Niwas, Anandwadi Shivaji Nagar, Kurar Village, Near Shivsena Office-37, Malad (E)',
    city: 'Mumbai',
    state: 'Maharashtra',
    zip: '400097',
    landlineDisplay: '022 28406012',
    landlineCall: '912228406012',
    mobileDisplay: '+91 9820816415',
    mobileCall: '919820816415',
    email: 'ambcohygiene@gmail.com',
    cif: '',
    googleMap:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3768.16301616746!2d72.8661281!3d19.188081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70fd25e0441%3A0x66609f96bed83be9!2sMalad%20Ayyappa%20Temple%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1695624243544!5m2!1sen!2sin'
  }
};
