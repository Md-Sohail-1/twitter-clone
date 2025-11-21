import React from 'react'
import { Routes, Route } from 'react-router'

import Header from './components/Header'
import TabMenu from './components/TabMenu'
import StorySlider from './components/StorySlider'
import HomePage from './page/HomePage'
import SearchPage from './page/SearchPage'
import ProfilePage from './page/ProfilePage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <TabMenu />
    </>
  )
      // <StorySlider />
}

export default App