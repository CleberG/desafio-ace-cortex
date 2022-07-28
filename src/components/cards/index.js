import {
  CardContainer,
  ArrowRight,
  InforContainer,
  User,
  Description
} from './styles'

export const Card = props => {
  return (
    <CardContainer>
      {props.children}
      <InforContainer>
        <User>{props.user}</User>
        <Description>{props.description}</Description>
      </InforContainer>
      <ArrowRight />
    </CardContainer>
  )
}
