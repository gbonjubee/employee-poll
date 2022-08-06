import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe('saveQuestion', () =>{
    it('will return question if question is successfully saved', async() =>{
        const optionOne = "Eat Out";
        const optionTwo = "Cook";
        const author="sarahedo";
        const question = {
            optionOneText : optionOne,
            optionTwoText : optionTwo,
            author: author
        }

        var result = await _saveQuestion(question);
        expect(result).not.toBeNull();
        expect(result.optionOne.text).toEqual(optionOne);
        expect(result.optionTwo.text).toEqual(optionTwo);
        expect(result.author).toEqual(author);
    });
    it('will return an error if question is not saved', async() =>{
        const question = {
            optionOneText:"Eat Out",
            optionTwoText:"Cook",
        }
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
})


describe('saveQuestionAnswer', () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne"
    it('will return true if answer is saved correctly for question', async () => {
        var result = await _saveQuestionAnswer({authedUser,qid,answer});
        expect(result).toEqual(true);

    });
    it('will return error if if incorrect data is passed', async () => {
        await expect(_saveQuestionAnswer({authedUser,qid})).rejects.toEqual("Please provide authedUser, qid, and answer");

    });
})