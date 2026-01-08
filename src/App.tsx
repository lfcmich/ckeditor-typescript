import React, { useState } from "react";
import { CKEditor, CKEditorProps } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import { editorConfig } from "./editor-config";
import "./App.css";

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
          config={editorConfig}
          onReady={(editor) => {
            // console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setHtmlData(data);
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
