import { useCallback, useEffect, useState } from "react";

import { Header, Footer, Sidebar, Button, Content, Card } from "./components";
import Layout from "./layout";
import { sortHandler } from "./utils";

export default function App() {
  const [sort, setSort] = useState(false);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  const saveData = useCallback(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    window.addEventListener("beforeunload", saveData);
    return () => window.removeEventListener("beforeunload", saveData);
  }, [saveData]);

  const addCard = () =>
    setCards((prev) => [...prev, Math.ceil(Math.random() * 1000)]);

  const sortCards = () => setSort((prev) => !prev);

  const removeCard = (number) => {
    setCards((prev) => prev.filter((num) => num !== number));
  };

  return (
    <Layout>
      <Header>
        <Button onClick={addCard}>add card</Button>
        <Button onClick={sortCards}>sort cards</Button>
      </Header>
      <Content>
        {sortHandler(cards, sort).map((number) => (
          <Card key={number} remove={() => removeCard(number)}>
            {number}
          </Card>
        ))}
      </Content>
      <Sidebar />
      <Footer />
    </Layout>
  );
}
