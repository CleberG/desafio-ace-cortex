import styled from 'styled-components'
import { ArrowIosForward } from '@styled-icons/evaicons-solid/ArrowIosForward'
export const CardContainer = styled.div`
  width: 44.625rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 5px;
  background: #ffffff;
`

export const ArrowRight = styled(ArrowIosForward)`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
`
export const InforContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const User = styled.h3`
  font-size: 1.5rem;
  weight: 700;
`
export const Description = styled.p`
  font-size: 1.125rem;
`
