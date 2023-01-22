import Container from 'react-bootstrap/Container';
import {
    AskedTitle,
    Description,
    Answers,
    Question,
    BtnWrapper,
    MainButton,
    BtnText
} from "./styles";
import { useState } from "react";

const AskedQuestions = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <Container>
                <AskedTitle>
                    Asked Questions
                </AskedTitle>
                <Description>
                    Read through the answered questions before asking a new question to the mentor, only those questions that founders choose to be public can be found here.
                </Description>
                <Answers>
                    ANSWERS
                </Answers>
                <Question>
                    How much traction should a startup have before being losted on Indigogo?
                </Question>
                <Answers>
                    Be careful! The vast majority of founders and those who advise founders attempt to solve this problem with fundamentally flawed logic. The primary mistake is basing the equity split on unknowable, future events such as a {`founder's`} expected commitment to the company or the creation of future value.<br />
                    There is, however, a way to get this right every time.<br />
                    Startips are unique in that they {`don't`} pay for inputs that more established companies are expected to pay for, such as salaries and expenses. The amount that most companies are expected to pay is known as the fair market value. <br />
                </Answers>
                {clicked &&
                    <>
                        <Question>
                            How much traction should a startup have before being losted on Indigogo?
                        </Question>
                        <Answers>
                            Be careful! The vast majority of founders and those who advise founders attempt to solve this problem with fundamentally flawed logic. The primary mistake is basing the equity split on unknowable, future events such as a {`founder's`} expected commitment to the company or the creation of future value.<br />
                            There is, however, a way to get this right every time.<br />
                            Startips are unique in that they {`don't`} pay for inputs that more established companies are expected to pay for, such as salaries and expenses. The amount that most companies are expected to pay is known as the fair market value. <br />
                        </Answers>
                        <Question>
                            How much traction should a startup have before being losted on Indigogo?
                        </Question>
                        <Answers>
                            Be careful! The vast majority of founders and those who advise founders attempt to solve this problem with fundamentally flawed logic. The primary mistake is basing the equity split on unknowable, future events such as a {`founder's`} expected commitment to the company or the creation of future value.<br />
                            There is, however, a way to get this right every time.<br />
                            Startips are unique in that they {`don't`} pay for inputs that more established companies are expected to pay for, such as salaries and expenses. The amount that most companies are expected to pay is known as the fair market value. <br />
                        </Answers>

                    </>
                }
                <BtnWrapper>
                    <MainButton onClick={() => setClicked(!clicked)}>
                        {clicked &&
                            <BtnText>
                                Show less
                            </BtnText>
                        }
                        {!clicked &&
                            <BtnText>
                                Load more
                            </BtnText>
                        }
                    </MainButton>
                </BtnWrapper>
            </Container>
        </>
    );
}
export default AskedQuestions;