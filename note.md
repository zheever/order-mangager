**'react-scripts' 不是内部或外部命令，也不是可运行的程序 或批处理文件--解决方案**

用create-react-app创建的React项目时，有时在安装完其他组件后，再次运行 npm start 命令时会报以上错误，让我很郁闷，不过在上网搜了这个错后原来：

是create-react-app有丢包的缺陷，手动安装包后，需要重新npm install一下，这样node_modules/.bin/目录下才会重新出现react-scripts的文件，这样npm start命令才能正常执行。

解决方案：

npm install react-scripts

或

npm install

安装完成后再次运行 npm start 即可

**默认配置文件都是隐藏的，如果要自定义，运行npm run eject**

**input候选列表选中无颜色}**
input:-webkit-autofill{ -webkit-box-shadow:0 0 0px 1000px #fff inset;

**组件首字母大写**