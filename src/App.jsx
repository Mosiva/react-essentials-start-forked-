import { CORE_CONCEPTS } from "./data.js";
import { tabNames } from "./data.js";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import { TabButton } from "./components/TabButton.jsx";

function App() {
  const handleSelect = () => console.log("onSelect");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          {CORE_CONCEPTS.map((i) => (
            <ul>
              <CoreConcept {...i} />
            </ul>
          ))}
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabNames.map((tabName) => (
              <TabButton key={tabName} onSelect={handleSelect}>
                {tabName}
              </TabButton>
            ))}
          </menu>
          Dynamic
        </section>
      </main>
    </div>
  );
}

export default App;
