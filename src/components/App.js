import React, { Component, useState } from "react";
import "../styles/App.css";
import View from "./View";
const App = (props) => {
  const { slides } = props;
  //console.log(props);
  //console.log(slides.length);

  const [show, setShow] = useState({
    index: 0,
    title: slides[0].title,
    text: slides[0].text
  });

  function handleClick(action) {
    //console.log(action);
    if (action === "prev") {
      if (show.index === 0) return;

      let index = show.index - 1;
      // console.log(index);
      // console.log(slides[index].title);

      let title = slides[index].title;
      let text = slides[index].text;

      setShow({
        index,
        title,
        text
      });
    } else if (action === "next") {
      if (show.index === slides.length - 1) return;

      let index = show.index + 1;
      let title = slides[index].title;
      let text = slides[index].text;

      setShow({
        index,
        title,
        text
      });
    } else if (action === "restart") {
      setShow({
        index: 0,
        title: slides[0].title,
        text: slides[0].text
      });
    }
  }

  return (
    <>
      <View key={show.index} title={show.title} text={show.text} />
      <button
        onClick={() => handleClick("prev")}
        data-testid="button-prev"
        disabled={show.index === 0 ? true : false}
      >
        Prev
      </button>
      <button
        onClick={() => handleClick("next")}
        data-testid="button-next"
        disabled={show.index === slides.length - 1 ? true : false}
      >
        Next
      </button>
      <button
        onClick={() => handleClick("restart")}
        data-testid="button-restart"
        disabled={show.index === 0 ? true : false}
      >
        Restart
      </button>
    </>
  );
};

export default App;
