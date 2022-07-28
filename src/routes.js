import { Routes, Route } from 'react-router-dom'
import { Users } from './pages/users'
import { UserDetail } from './pages/userDetail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Users />} />
      <Route path="/user-detail" element={<UserDetail />} />
    </Routes>
  )
}
export default AppRoutes
