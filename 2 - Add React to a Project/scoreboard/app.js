const title = < h1 > My first React element! < /h1>
const desc = < p > I just learned how to create a React element and render it to the DOM < /p>;

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root')
);