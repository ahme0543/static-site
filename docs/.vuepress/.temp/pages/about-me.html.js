export const data = JSON.parse("{\"key\":\"v-fd0cf4b0\",\"path\":\"/about-me.html\",\"title\":\"About Me\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Background and Experience\",\"slug\":\"background-and-experience\",\"link\":\"#background-and-experience\",\"children\":[]},{\"level\":2,\"title\":\"My Approach\",\"slug\":\"my-approach\",\"link\":\"#my-approach\",\"children\":[]},{\"level\":2,\"title\":\"Hobbies and Interests\",\"slug\":\"hobbies-and-interests\",\"link\":\"#hobbies-and-interests\",\"children\":[]},{\"level\":2,\"title\":\"Let's Connect\",\"slug\":\"let-s-connect\",\"link\":\"#let-s-connect\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"about-me.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
