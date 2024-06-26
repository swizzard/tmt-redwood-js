// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { PrivateSet, Set, Router, Route } from '@redwoodjs/router'

import LoggedInLayout from 'src/layouts/LoggedInLayout/LoggedInLayout'
import LoggedOutLayout from 'src/layouts/LoggedOutLayout/LoggedOutLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated="home" wrap={LoggedInLayout}>
        <Set title="Tabs" titleTo="tabs" buttonLabel="New Tab" buttonTo="newTab">
          <Route path="/tabs/new" page={TabNewTabPage} name="newTab" />
          <Route path="/tabs/{id}/edit" page={TabEditTabPage} name="editTab" />
          <Route path="/tabs/{id}" page={TabTabPage} name="tab" />
          <Route path="/tabs" page={TabTabsPage} name="tabs" />
        </Set>
        <Set title="Tags" titleTo="tags" buttonLabel="New Tag" buttonTo="newTag">
          <Route path="/tags/new" page={TagNewTagPage} name="newTag" />
          <Route path="/tags/{id}/edit" page={TagEditTagPage} name="editTag" />
          <Route path="/tags/{id}" page={TagTagPage} name="tag" />
          <Route path="/tags/{tagId}/tabs" page={TaggedTabsPage} name="taggedTabs" />
          <Route path="/tags" page={TagTagsPage} name="tags" />
        </Set>
      </PrivateSet>
      <Set wrap={LoggedOutLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
