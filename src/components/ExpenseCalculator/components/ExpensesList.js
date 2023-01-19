import React, { Fragment, useState, useEffect } from "react";

import ListItem from "./ListItem";
import ListSummary from "./ListSummary";

function ExpensesList({ data, removeHandler }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const displayItems = items.map((item) => {
    return (
      <ListItem
        key={`expense-${item.id}`}
        id={item.id}
        headline={item.headline}
        amount={item.amount}
        tags={item.tags}
        removeHandler={removeHandler}
        isExpense
      />
    );
  });

  return (
    <Fragment>
      <h2>Wydatki</h2>
      <ul>{displayItems}</ul>
      <ListSummary data={items} />
    </Fragment>
  );
}

export default ExpensesList;
