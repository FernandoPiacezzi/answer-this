import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  max-width: 450px;
  background-color: var(--card-background);
  padding: 20px;
  margin: 50px 0;

  border-radius: 5px;

  header { 
    margin-bottom: 2rem;
    font-size: 1.25rem;
  }
`;

export const AnswersContainer = styled.div`
  div {
    min-height: 2.5rem;
    width: 100%;
    background-color: var(--answer-background);
    
    margin-top: 0.5rem;
    padding: 0.7rem;
    border-radius: 5px;

    transition: background 0.3s;

    &:hover {
      background-color: var(--primary)
    }

    &.right-answer {
      background-color: var(--green);
    }

    &.wrong-answer {
      background-color: var(--red);
    }

    
    
  }
`;