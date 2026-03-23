import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'
import MeetingPage from '../../pages/MeetingPage'
import TranscriptPage from '../../pages/TranscriptPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/meeting" element={<MeetingPage />} />
        <Route path="/transcript" element={<TranscriptPage />} />
      </Routes>
    </BrowserRouter>
  )
}