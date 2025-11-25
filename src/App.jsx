import React from 'react'
import { Routes, Route } from 'react-router'

import {pageContext} from "../context/pageContext"

import Header from './components/Header'
import TabMenu from './components/TabMenu'
import StorySlider from './components/StorySlider'
import HomePage from './page/HomePage'
import SearchPage from './page/SearchPage'
import ProfilePage from './page/ProfilePage'
import CreateTweetPage from './page/CreateTweetPage'
import PostPage from './page/PostPage'

const App = () => {
  let randomUserId = Math.floor(Math.random() *10 )+1;
  return (
    <pageContext.Provider value={randomUserId}>
      <Routes>
        <Route index element={<><Header /><HomePage /></>} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/search" element={<><Header /><SearchPage /></>} />
        <Route path="/posts/:id" element={<><Header /><PostPage /></>} />
        <Route path="/createtweet" element={<><Header /><CreateTweetPage /></>} />
      </Routes>
      <TabMenu />
    </pageContext.Provider>
  )
      // <StorySlider />
}

export default App