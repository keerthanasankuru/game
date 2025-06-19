import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";
import Navbar from "./Navbar"; // ✅ Import Navbar

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const answers = state?.answers || [];

  const correct = answers.filter((a) => a.isCorrect).length;

  return (
    <>
      <Navbar /> {/* ✅ Show navbar */}
      <div className="result-container">
        <h2 className="result-title">📊 Test Results</h2>
        <div className="score-box">
          Score: {correct} / {answers.length}
        </div>

        <div className="answers-list">
          {answers.map((a, idx) => (
            <div
              key={idx}
              className={`answer-block ${a.isCorrect ? "correct" : "wrong"}`}
            >
              <div className="answer-question">Q{idx + 1}: {a.question}</div>
              <div>Your Answer: {a.selected}</div>
              <div>Correct Answer: {a.correct}</div>
            </div>
          ))}
        </div>

        <button
          className="retake-btn"
          onClick={() => navigate("/compare-test")}
        >
          🔁 Retake Test
        </button>
      </div>
    </>
  );
}
