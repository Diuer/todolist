TodoList
===
> [Demo Link](https://diuer.github.io/todolist/)
## 使用的套件
1. icon - [fontawesome](https://fontawesome.com/)
2. font - [googlefont](https://fonts.google.com/)
3. DOM操作 - [jQuery](https://jquery.com)
4. 資料操作 - [vue](https://vuejs.org)
```
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js'></script>
```

## 部分程式解說
#### 資料格式
```
let list = [
  {
    title: string,
    content: string,
    time: string,
    location: string,
    completed: boolean,
    favorited: boolean
  }
]
```
#### 物件刪除 - splice vs delete
最大的差異在於，使用splice刪除後，陣列的index及length皆會有所改變；而若使用delete，則將會留下該index的位置&length不變。
```
let array = ['1','2','3','4','5']
  
/*
    after splice's result:
    array = ['1','2','4','5'] //index為0,1,2,3,4
    array.length = 4
    
    after delete's result:
    array = ['1','2','4','5'] //index為0,1,3,4
    array.length = 5
*/
```
#### 資料顯示 - 反序
slice()為切割陣列
reverse()為反序
```
<div v-for="(item,index) in list.slice().reverse()">
```
