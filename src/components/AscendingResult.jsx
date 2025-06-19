import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./AscendingTest.css";

export default function AscendingResult() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const answers = state?.answers || [];

  const correct = answers.filter((a) => a.isCorrect).length;

  return (
    <div className="test-container">
      <Navbar />
      <h2>🎯 Ascending Order Results</h2>
      <div style={{ fontSize: "20px", marginBottom: "16px" }}>
        Score: {correct} / {answers.length}
      </div>

      {answers.map((a, i) => (
        <div key={i} className={`answer-block ${a.isCorrect ? "correct" : "wrong"}`}>
          <p><strong>Q{i + 1}:</strong> {a.question}</p>
          <p>Your Answer: {a.selected}</p>
          <p>Correct Answer: {a.correct}</p>
        </div>
      ))}

      <button
        onClick={() => navigate("/ascending-test")}
        style={{
          fontSize: "20px",
          padding: "12px 24px",
          marginTop: "24px",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🔁 Retake Test
      </button>
    </div>
  );
}
