import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  // console.log(questions);

  return (
    <main>
      <div className="container">
        <h3>Frequently Asked Questions</h3>
        <section className="info">
          {questions.map((qs) => {
            return <SingleQuestion key={qs.id} {...qs} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
