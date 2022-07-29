import { Card } from '../../components/cards'
import { UserPicture } from '../../components/userPicture'
import { Search } from '../../components/search'
import { Container, Title } from './styled'
export const Users = () => {
  return (
    <Container>
      <Title>
        Explore repositorios
        <br /> no Github
      </Title>
      <Search />
      <Card user={'CleberG'} description={'descrição do repo'}>
        <UserPicture url="https://avatars.githubusercontent.com/u/51448121?v=4" />
      </Card>
    </Container>
  )
}
