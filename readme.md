# 使用方式

### 環境建置  
1. 環境必須要有node.js / ruby / sass  / gulp / bower / git  
2. 安裝gulp 套件 `npm i `  
3. 安裝 bower 套件  `bower i`  

----
### 目前有三種簡單的開發方式

1. 一種是只有sass的編譯
指令 ==> `gulp dev`

2. 一種是含有瀏覽器的同步（這種也含有sass的編譯）
指令 ==> `gulp`

3. 最後一種是壓縮js and css檔案
指令 ==> `gulp compress`

----

> 最後編譯後的檔案都在assets裡面 ，如果使用的話，要用這裡面的檔案  
> mini的資料夾裡都是壓縮過後的檔案

----
|– assets/  
|   |– js           # 編譯後的js檔案       
|   |– css          # 編譯後的css檔案   
|   |– images       # 圖片檔        
|   |– font         # 字體.woff檔案 .eot檔案  
|   ...             # Etc…  
|  
|– js /  
|   |– scripts.js   # js編寫檔案  
|  ...              # Etc…  
|   
|– libs /  
|   |– bootstrap    # Bootstrap 套件  
|   ...             # Etc…  
|  
|– sass /  
|   |– main.scss  #sass 編寫檔案  
|   ...           # Etc…


>基本上自動化的套件的package.json裡面   
>開發上的套件都在bower.json上面   

>這些都可以跟php混用，把php的檔案放在這資料夾裡面，在指向到這個資料夾，他本身就有php可以執行的環境。
>不過gulp 要跑瀏覽器的那個版本，基本上就不適用，他的port會跟你們的server衝突。

### gulp基本上會用到的套件

```json
    "bower": "^1.8.2",  
    "browser-sync": "^2.18.13",  
    "gulp": "^3.9.1",  
    "gulp-clean-css": "^3.9.0",  
    "gulp-jshint": "^2.0.4",  
    "gulp-notify": "^3.0.0",  
    "gulp-sass": "^3.1.0",  
    "gulp-sourcemaps": "^2.6.1",
    "gulp-uglify": "^3.0.0",  
    "gulp-watch": "^4.3.11",  
    "jshint": "^2.9.5" 
```




