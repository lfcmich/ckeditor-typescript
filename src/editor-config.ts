
export const UPLOAD_URL = process.env.REACT_APP_CKEDITOR_UPLOAD_URL || 'http://localhost'

export const CKEDITOR_CONFIG: object = {
  simpleUpload: {
    uploadUrl: UPLOAD_URL,
  },
  extraPlugins: [],
};
