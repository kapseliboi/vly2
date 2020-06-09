
import { OpSectionGrid, ContentCard, P } from '../VTheme/VTheme'
import styled from 'styled-components'

import { Button, Input } from 'antd'
const { TextArea } = Input
// start question

const Comment = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  float: right;
  width: 59rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) and (max-width: 1281px) {
    width: calc(100vw - 2rem);
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 2rem);
    grid-template-columns: 1fr;

    float: left;
  }
`
const AskContainer = styled.div`
  padding: 1rem;
  width: 100%;
  background: #ffffff;
  box-shadow: 2px 2px 12px 0 rgba(190, 190, 190, 0.5);
  border-radius: 8px;
`

const ButtonContainer = styled.div`
  margin-top: 0.5rem;
`
// start date block
const DateBlock = styled.div`
  p {
    padding-top: 1rem;
    color: #999;
    letter-spacing: -0.3px;
    text-align: right;
    line-height: 24px;
    font-size: 1rem;


  @media screen and (max-width: 768px) {
display: none;
  }
  }
` // end date block

const EventContainer = styled.div`
display: grid;
grid-template-columns: 1fr auto 1fr;
align-items: center;

p {
  font-weight: 700;
  padding: 1rem;
  margin: 0;
  max-width: 40rem;
}

 div {
  height: 4px;
  width: 100%;
  background-color: #D8D8D8;
  border-radius: 32px;
  margin: 0 auto;
}


`

const OpChatPanel = ({ author }) => {
  return (
    <>
      <OpSectionGrid>
        <div>
          <h2>You offered to help USERNAME123</h2>
          <>

          </>

        </div>

        <AskContainer>
          <p>USERNAME is asking for your help - message them here</p>
          <TextArea rows={3} placeholder='Ask a question here' />
          <ButtonContainer>
            <Button shape='round' size='large' type='primary'>
              Submit
            </Button>
          </ButtonContainer>
        </AskContainer>

      </OpSectionGrid>
      <Comment>
        <DateBlock>
          <p>
          29 Jan 2019
            <br />
          11:59PM
          </p>
        </DateBlock>
        <ContentCard>
          <p>Can I get free parking at the school? Happy to help but I need somewhere to park my car</p>
          <div style={{ display: 'flex', alignSelf: 'center' }}>
            <div style={{ height: '2rem', width: '2rem', backgroundColor: 'black', borderRadius: '100%', marginRight: '0.5rem' }} />
            <p style={{ marginBottom: '0', alignSelf: 'center' }}>aaaaaaaaa</p>
          </div>
        </ContentCard>
      </Comment>
      <Comment>
        <DateBlock>
          <p>
          29 Jan 2019
            <br />
          11:59PM
          </p>
        </DateBlock>
        <ContentCard>
          <p>Can I get free parking at the school? Happy to help but I need somewhere to park my car</p>
          <div style={{ display: 'flex', alignSelf: 'center' }}>
            <div style={{ height: '2rem', width: '2rem', backgroundColor: 'black', borderRadius: '100%', marginRight: '0.5rem' }} />
            <p style={{ marginBottom: '0', alignSelf: 'center' }}>aaaaaaaaa</p>
          </div>
        </ContentCard>
      </Comment>
      <Comment>
        <DateBlock>
          <p>
          29 Jan 2019
            <br />
          11:59PM
          </p>
        </DateBlock>
        <ContentCard>
          <p>Can I get free parking at the school? Happy to help but I need somewhere to park my car</p>
          <div style={{ display: 'flex', alignSelf: 'center' }}>
            <div style={{ height: '2rem', width: '2rem', backgroundColor: 'black', borderRadius: '16px', marginRight: '0.5rem' }} />
            <p style={{ marginBottom: '0', alignSelf: 'center' }}>aaaaaaaaa</p>
          </div>
        </ContentCard>
      </Comment>
      <Comment>
        <DateBlock>
          <p>
          29 Jan 2019
            <br />
          11:59PM
          </p>
        </DateBlock>
        <EventContainer>
          <div />
          <p>
        You offered to help USERNAME123
          </p>
          <div />
        </EventContainer>
      </Comment>

    </>
  )
}

export default OpChatPanel
