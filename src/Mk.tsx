import { useState } from "react";
import Markdown from 'react-markdown'


const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div> \`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg)

`

function Mk (){
    const [markdown, setMarkdown] = useState(defaultMarkdown)
    return(
        <div className="container">

            <section className="house">
                <div className="edit">Editor</div>
                <textarea value={markdown} id="editor" rows={13} cols={60} onChange={ e => setMarkdown(e.target.value) }></textarea>
            </section>

            <section className="contain">
                <div className="edit">Preview</div>
                <div id="preview">
                    <Markdown>{markdown}</Markdown>
                </div>
            </section>

        </div>
    );
}

export default Mk