import { Card } from '../../components/cards'
import { UserPicture } from '../../components/userPicture'

export const Users = () => {
  return (
    <>
      <h1>Users</h1>
      <Card>
        <UserPicture url="https://avatars.githubusercontent.com/u/51448121?v=4" />
      </Card>
    </>
  )
}
