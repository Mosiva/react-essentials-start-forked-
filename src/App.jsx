import { CORE_CONCEPTS } from "./data.js";
import { tabNames } from "./data.js";
import { EXAMPLES } from "./data.js";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import { TabButton } from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => setSelectedTopic(selectedButton);

  let tabContent = <p> Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code} </code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabNames.map((tabName) => (
              <TabButton
                key={tabName}
                onSelect={() => handleSelect(tabName)}
                isSelected={selectedTopic === tabName}
              >
                {tabName}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
