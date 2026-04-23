/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThemeSelection from "./components/ThemeSelection";
import PracticeArea from "./pages/PracticeArea";
import { TASK1_CATEGORIES, TASK2_THEMES } from "./data/themes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/task1" 
          element={<ThemeSelection type="task1" themes={TASK1_CATEGORIES} title="Academic Task 1" />} 
        />
        <Route 
          path="/task2" 
          element={<ThemeSelection type="task2" themes={TASK2_THEMES} title="Academic Task 2" />} 
        />
        <Route path="/practice/:type/:themeId" element={<PracticeArea />} />
      </Routes>
    </Router>
  );
}

