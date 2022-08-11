import React, { useState } from "react";
import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import { CKEDITOR_CONFIG } from "./editor-config";

function App() {
  const [htmlData, setHtmlData] = useState<string>(
    "<p>Hello from CKEditor 5!</p>"
  );

  return (
    <div className="App">
      <header className="App-header">
        <CKEditor
          editor={ClassicEditor}
          data={htmlData}
          config={CKEDITOR_CONFIG}
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setHtmlData(data);
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </header>
    </div>
  );
}

export default App;
