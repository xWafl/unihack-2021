import { useNavigate } from "react-router-dom";
import "./NewUser.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { tree } from "../TreePage/TreePage";
import { findNodeByName } from "../../helpers";

export default function NewUserPage() {
    const [grade, setGrade] = useState(8);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (grade === 8) {
            tree.nodes[0].completedInSchool = true;
            findNodeByName("Systems of Equations")!.completedInSchool = true;
        } else if (grade === 9) {
            tree.nodes[0].completedInSchool = true;
            findNodeByName("Systems of Equations")!.completedInSchool = true;
            findNodeByName("Geometry")!.completedInSchool = true;
            findNodeByName("Factoring")!.completedInSchool = true;
            findNodeByName("Quadratics")!.completedInSchool = true;
        } else if (grade === 10) {
            tree.nodes[0].completedInSchool = true;
            findNodeByName("Systems of Equations")!.completedInSchool = true;
            findNodeByName("Geometry")!.completedInSchool = true;
            findNodeByName("Factoring")!.completedInSchool = true;
            findNodeByName("Quadratics")!.completedInSchool = true;
            findNodeByName("Trigonometry")!.completedInSchool = true;
            findNodeByName("Complex numbers")!.completedInSchool = true;
            findNodeByName("Exponentials")!.completedInSchool = true;
            findNodeByName("Logarithms")!.completedInSchool = true;
        } else if (grade === 11) {
            tree.nodes[0].completedInSchool = true;
            findNodeByName("Systems of Equations")!.completedInSchool = true;
            findNodeByName("Geometry")!.completedInSchool = true;
            findNodeByName("Factoring")!.completedInSchool = true;
            findNodeByName("Quadratics")!.completedInSchool = true;
            findNodeByName("Trigonometry")!.completedInSchool = true;
            findNodeByName("Complex numbers")!.completedInSchool = true;
            findNodeByName("Exponentials")!.completedInSchool = true;
            findNodeByName("Logarithms")!.completedInSchool = true;
            findNodeByName("Matrices")!.completedInSchool = true;
            findNodeByName("Determinants")!.completedInSchool = true;
            findNodeByName("Rational functions")!.completedInSchool = true;
        } else if (grade === 12) {
            tree.nodes[0].completedInSchool = true;
            findNodeByName("Systems of Equations")!.completedInSchool = true;
            findNodeByName("Geometry")!.completedInSchool = true;
            findNodeByName("Factoring")!.completedInSchool = true;
            findNodeByName("Quadratics")!.completedInSchool = true;
            findNodeByName("Trigonometry")!.completedInSchool = true;
            findNodeByName("Complex numbers")!.completedInSchool = true;
            findNodeByName("Exponentials")!.completedInSchool = true;
            findNodeByName("Logarithms")!.completedInSchool = true;
            findNodeByName("Matrices")!.completedInSchool = true;
            findNodeByName("Determinants")!.completedInSchool = true;
            findNodeByName("Rational functions")!.completedInSchool = true;
            findNodeByName("Limits")!.completedInSchool = true;
            findNodeByName("Derivatives")!.completedInSchool = true;
            findNodeByName("Integrals")!.completedInSchool = true;
        }
        navigate("/tree");
    }

    return <div className="newUserPage">
        <div className="newUserLogo">
            <img src={logo} alt="Logo" />
        </div>
        <div style={{ width: 700, margin: "auto" }}>
            <h2 style={{ fontSize: 48, fontWeight: "bold" }}>Welcome to KnowledgeTree!</h2>
            <h4 style={{ fontSize: 20, fontWeight: "normal" }}>Before you begin using KnowledgeTree, please enter the most recent grade level you completed so we can better assess which modules you need to work on as well as any subjects that you may be interested in.</h4>
            <div style={{ width: 330, textAlign: "left", margin: "auto" }}>
                <label style={{ marginBottom: 5 }} htmlFor="gradeLevel">Grade level</label>
                <br />
                <select id="gradeLevel" onChange={e => setGrade(Number(e.target.value))}>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                </select>

                <label htmlFor="subjects">Subjects you are interested in</label><br />
                <div className="checkboxes">
                    <label htmlFor="mathematics" className="checkboxGroup">
                        Mathematics
                        <input type="checkbox" name="subjects" id="mathematics" value="Mathematics" />
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="biology" className="checkboxGroup">
                        Biology
                        <input type="checkbox" name="subjects" id="biology" value="Biology" />
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="physics" className="checkboxGroup">
                        Physics
                        <input type="checkbox" name="subjects" id="physics" value="Physics" />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="newUserSubmit" onClick={handleSubmit}>Submit</div>
        </div>
    </div>
}