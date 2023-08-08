import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
              text: 'Home',
              link: '/',

          }, 

          {
            text: 'contact us', 
            link: '/contact-us.md',
          },

          {
            text: 'About me', 
            link: '/about-me.md',
          },

          {
            text: 'Projects', 
            link: '/project.md',
          }, 

          {
            text: 'Blogs', 
            link: '/Blogs.md',
          }


        ],
    }),
}