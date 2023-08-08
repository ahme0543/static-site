export const data = JSON.parse("{\"key\":\"v-096563be\",\"path\":\"/blogs.html\",\"title\":\"Blog\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Latest Articles\",\"slug\":\"latest-articles\",\"link\":\"#latest-articles\",\"children\":[]},{\"level\":2,\"title\":\"Categories\",\"slug\":\"categories\",\"link\":\"#categories\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs.md\"}")

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
