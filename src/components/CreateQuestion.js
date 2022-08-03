import { connect } from "react-redux";
import {handleAddQuestion} from "../actions/questions"
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";


const CreateQuestion = (props) => {
    const navigate = useNavigate();
    const { authedUser } = props;
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [disabled,setDisabled] = useState(true)


    useEffect(() => {
        optionA.length > 0 && optionB.length > 0 ? setDisabled(false) : setDisabled(true)
    },[optionA,optionB])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(handleAddQuestion({optionA, optionB, authedUser}));
        
        console.log("optionA: ", optionA);
        console.log("optionB: ", optionB);
    
        setOptionA("");
        setOptionB("");
        alert("Poll created Successfully");
        setTimeout(() => navigate("/"), 1000); 
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
            <button className="btn" type="submit" disabled={disabled}>
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


