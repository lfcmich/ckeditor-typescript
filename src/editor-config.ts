
export const UPLOAD_URL = import.meta.env.VITE_APP_CKEDITOR_UPLOAD_URL || 'http://localhost'

export const editorConfig: object = {
  simpleUpload: {
    uploadUrl: UPLOAD_URL,
  },
  licenseKey: 'GPL',
  extraPlugins: [],
};
