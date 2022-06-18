
marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState(qwerty);
    
    return (
        <div className="text-center px-4">
            <h1 className="p-4">My Markdown Previewer</h1>
            <textarea
                name="text"
                id="editor"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea">
            </textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text} />
        </div>
    );

}

function Preview({ markdown }) {
    return (
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer}),
        }}
        id="preview"

        ></div>
    );
        
}

const qwerty = `# freecodecamp Solutions:
## Build a markdown previewer
[Learn more about the freecodecamp.org project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine).

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`\
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`\

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![freecodecamp](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)

**This is an example of Bolded Text**
`;
ReactDOM.render(<App />, document.getElementById("root"));

