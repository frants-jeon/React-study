import { useState } from "react";
import { Route } from "react-router-dom";

import QuoteList from "./components/quotes/QuoteList";
import HightlightedQuote from "./components/quotes/HighlightedQuote";
import QuoteForm from "./components/quotes/QuoteForm";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import NoQuotesFound from "./components/quotes/NoQuotesFound";

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [highlightedQuote, setHighlightedQuote] = useState({
    id: 0,
    text: "",
    author: "",
  });

  const addQuoteHandler = (quote) => {
    setQuoteList((prevList) => {
      if (prevList.length > 0) {
        const lastId = prevList[prevList.length - 1].id || 1;
        return [...prevList, { id: lastId + 1, ...quote }];
      } else {
        return [...prevList, { id: 1, ...quote }];
      }
    });
  };

  const quoteHighlightHandler = (quoteId) => {
    for (const quote of quoteList) {
      if (quote.id === quoteId) {
        setHighlightedQuote(quote);
      }
    }
  };

  return (
    <div>
      <MainNavigation />
      <Layout>
        <Route path={"/quotes"} exact>
          {quoteList.length > 0 && (
            <Layout>
              <QuoteList
                quotes={quoteList}
                onSelectQuote={quoteHighlightHandler}
              />
            </Layout>
          )}
          {quoteList.length === 0 && <NoQuotesFound />}
        </Route>
        <Route path={"/new-quote"}>
          <QuoteForm onAddQuote={addQuoteHandler} />
        </Route>
        <Route path={"/quotes/:quoteId"}>
          <HightlightedQuote
            id={highlightedQuote.id}
            text={highlightedQuote.text}
            author={highlightedQuote.author}
          />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
