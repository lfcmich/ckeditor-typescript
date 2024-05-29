
export const UPLOAD_URL = import.meta.env.VITE_APP_CKEDITOR_UPLOAD_URL || 'http://localhost'

export const CKEDITOR_CONFIG: object = {
  simpleUpload: {
    uploadUrl: UPLOAD_URL,
  },
  extraPlugins: [],
};
