 import { Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import PhotoGame from "./components/PhotoGame";
import VideoGame from "./components/VideoGame";
import CompareGame from "./components/CompareGame";
import AscendingGame from "./components/AscendingGame";
import DayQuiz from "./components/DayQuiz";
import ClockQuiz from "./components/ClockQuiz";
import CompareTest from "./components/CompareTest";
import Result from "./components/Result";
import AscendingTest from "./components/AscendingTest";

import AscendingResult from "./components/AscendingResult";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/photo" element={<PhotoGame />} />
      <Route path="/video" element={<VideoGame />} />
      <Route path="/compare" element={<CompareGame />} />
      <Route path="/ascending" element={<AscendingGame />} />
      <Route path="/quiz/day" element={<DayQuiz />} />
      <Route path="/quiz/clock" element={<ClockQuiz />} /> 
      <Route path="/compare-test" element={<CompareTest />} />
      <Route path="/result" element={<Result />} />
      <Route path="/ascending-test" element={<AscendingTest />} />
      <Route path="/ascending-test" element={<AscendingTest />} />
      <Route path="/ascending-result" element={<AscendingResult />} />
      
    </Routes>
  );
}
