import { Container, AnswersContainer } from './style';

export function QuestionForm() {
  return (
    <Container>
      <header>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aspernatur veritatis incidunt ducimus itaque aliquam ipsam nesciunt iure eveniet rerum!</header>

      <AnswersContainer>
        <div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem ut ab quasi obcaecati fugiat corporis accusamus eveniet ipsam provident.</div>
        <div className="wrong-answer">Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div className="right-answer">Lorem ipsum dolor sit amet.</div>
      </AnswersContainer>


    </Container>
  )
}
