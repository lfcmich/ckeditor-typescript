### CKEditor custom build for React Typescript

#### Install 

```bash
yarn install
```

#### Configure build

1. Create and Download a build from 
[https://ckeditor.com/ckeditor-5/online-builder/](https://ckeditor.com/ckeditor-5/online-builder/)
2. Replace the downloaded contents of ckeditor folder
3. Configure new build
```bash
cd ckeditor
yarn install && yarn build
```
4. Change to main directory and re-install all node modules
```
rm -rf node_modules && yarn install
```