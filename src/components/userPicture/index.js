import { Container, Picture } from './styles'

export const UserPicture = props => (
  <Container>
    <Picture src={props.url} alt="Imagem do usuario do github" />
  </Container>
)
