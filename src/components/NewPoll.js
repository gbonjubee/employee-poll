import { connect } from "react-redux";
import {handleAddQuestion} from "../actions/questions"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateQuestion = (props) => {
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const navigate = useNavigate();
    const { authedUser } = props;
    if (!authedUser) return;
   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!optionA || !optionB) {
            alert("Please enter first and second option before you submit.")
        } else {
            
            props.dispatch(handleAddQuestion({ optionA, optionB, authedUser }));
            alert("Poll created Successfully");
            navigate("/");
        }
    };
      return (
        <div>
        <h2>Would you rather</h2>
        <p>Create your Own Poll</p>
        <form onSubmit={handleSubmit}>
            <p>First Option</p>
			<input data-testid="input-field-one" type="OptionOne" placeholder="First Option" onChange={(e) => setOptionA(e.target.value)}></input>
			<br></br>
            <p>Second Option</p>
			<input data-testid="input-field-two" type="OptionTwo" placeholder="Second Option" onChange={(e) => setOptionB(e.target.value)} ></input>
			
            <br />
            <button className="btn" type="submit">
          Submit
        </button>
        </form>
        </div>
    )
}

const mapStateToProps = ({authedUser,users, questions}) => {
    return ({
        authedUser,
        users,
        questions,
    })
}


export default connect(mapStateToProps)(CreateQuestion)


