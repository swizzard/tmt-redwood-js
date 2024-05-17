// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { PrivateSet, Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="Tabs" titleTo="tabs" buttonLabel="New Tab" buttonTo="newTab">
          <Route path="/tabs/new" page={TabNewTabPage} name="newTab" />
          <Route path="/tabs/{id}/edit" page={TabEditTabPage} name="editTab" />
          <Route path="/tabs/{id}" page={TabTabPage} name="tab" />
          <Route path="/tabs" page={TabTabsPage} name="tabs" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Tags" titleTo="tags" buttonLabel="New Tag" buttonTo="newTag">
          <Route path="/tags/new" page={TagNewTagPage} name="newTag" />
          <Route path="/tags/{id}/edit" page={TagEditTagPage} name="editTag" />
          <Route path="/tags/{id}" page={TagTagPage} name="tag" />
          <Route path="/tags" page={TagTagsPage} name="tags" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
        <Set wrap={ScaffoldLayout} title="TabTags" titleTo="tabTags" buttonLabel="New TabTag" buttonTo="newTabTag">
          <Route path="/tab-tags/new" page={TabTagNewTabTagPage} name="newTabTag" />
          <Route path="/tab-tags/{id}/edit" page={TabTagEditTabTagPage} name="editTabTag" />
          <Route path="/tab-tags/{id}" page={TabTagTabTagPage} name="tabTag" />
          <Route path="/tab-tags" page={TabTagTabTagsPage} name="tabTags" />
        </Set>
      </PrivateSet>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
