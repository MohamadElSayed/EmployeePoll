import { _saveQuestion } from "./_DATA";
import { _getUser, _getUsers } from "./_DATA";
import { _saveQuestionAnswer } from "./_DATA";

describe("_DATA", () => {
  it("_getUser: check that correct username/password is returning back user object", async () => {
    const result = await _getUser("sarahedo", "password123");

    expect(result.id).toEqual("sarahedo");
    expect(result.name).toEqual("Sarah Edo");
    expect(result.password).toEqual("password123");
  });

  it("_getUser: check that correct username/password is returning back user object", async () => {
    const result = _getUser("sarahedo", "pass123");

    expect(result).rejects.toEqual("Invalid username/password");
  });

  it("_saveQuestion: Success Test", async () => {
    let param = {
      optionOneText: "Continue to study Typescript",
      optionTwoText: "Have a break",
      author: "sarahedo",
    };

    let question = await _saveQuestion(param);
    expect(question.id).not.toBeUndefined();
    expect(question.author).toEqual("sarahedo");
    expect(question.optionOne.text).toEqual("Continue to study Typescript");
    expect(question.optionTwo.text).toEqual("Have a break");
    expect(question.timestamp).not.toBeUndefined();

    let users = await _getUsers();
    expect(users[question.author].questions.includes(question.id)).toBeTruthy();
  });

  it("_saveQuestion: Failed Test", async () => {
    let result = _saveQuestion({ optionOneText: "sarahedo" });
    expect(result).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("_saveQuestionAnswer: Success Test", async () => {
    const param = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionTwo",
    };

    const result = await _saveQuestionAnswer(param);
    expect(result).toEqual(true);
  });

  it("_saveQuestionAnswer: Failed Test", async () => {
    let result = _saveQuestionAnswer({
      authedUser: "Mohamad",
    });
    expect(result).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
