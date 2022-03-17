declare module "@ckeditor/ckeditor5-react" {
  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  interface CKEditorProps {
    editor: typeof ClassicEditor;
    data?: any;
    config?: any;
    id?: any;
    disabled?: any;
    onReady?(editor: any): any;
    onChange?(event: any, editor: any): any;
    onBlur?(event: any, editor: any): any;
    onFocus?(event: any, editor: any): any;
    onError?(error: any, {}: any): any;
  }
  class CKEditor extends React.Component<CKEditorProps, {}> {}

  interface CKEditorContextProps {
    editor: any;
    context: any;
    config?: any;
    isLayoutReady?: any;
    id?: any;
    onReady?(editor: any): any;
    onError?(error: any, {}: any): any;
  }
  class CKEditorContext extends React.Component<CKEditorContextProps, {}> {}
}

declare module "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
declare module "ckeditor5-custom-build/build/ckeditor";
declare module "ckeditor5-custom-build";
