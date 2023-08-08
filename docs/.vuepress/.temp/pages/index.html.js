export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"About Me\",\"slug\":\"about-me\",\"link\":\"#about-me\",\"children\":[]},{\"level\":2,\"title\":\"Projects\",\"slug\":\"projects\",\"link\":\"#projects\",\"children\":[{\"level\":3,\"title\":\"Project 1: Creative Portfolio\",\"slug\":\"project-1-creative-portfolio\",\"link\":\"#project-1-creative-portfolio\",\"children\":[]}]},{\"level\":2,\"title\":\"Contact\",\"slug\":\"contact\",\"link\":\"#contact\",\"children\":[]}],\"git\":{\"updatedTime\":1691533117000,\"contributors\":[{\"name\":\"ahme0543\",\"email\":\"ahme0543@algonquinlive.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")

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
