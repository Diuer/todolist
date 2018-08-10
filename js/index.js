var list = [
  {
    title: "跨年",
    content: "跨年的時間是在每年的最後一天喔",
    time: "2018-12-31",
    completed: false,
    favorited: false
  },
  {
    title: "中秋節",
    content: "在農曆8/15，是禮拜一",
    time: "2018-09-24",
    completed: false,
    favorited: false
  }
]
let app = new Vue({
  el: '#app',
  data: {
    list: list,
    newtitle: "",
    newcontent: "",
    newtime: ""
  },
  methods: {
    showaddList: function(){
      $('.addList').css('display','block')
      $('.lists').css('display','none')
    },
    addList: function(){
      if(!this.newtitle||!this.newcontent||!this.newtime){
        return false
      }
      this.list.push({
        title: this.newtitle,
        content: this.newcontent,
        time: this.newtime,
        completed: false,
        favorited: false
      })
      this.newtitle=""
      this.newcontent=""
      this.newtime=""
      $('.addList').css('display','none')
      $('.lists').css('display','block')
    },
    deleteList: function(whichDelete){
      this.list.splice(whichDelete,1)
    },
    showList: function(){
      $('.addList').css('display','none')
      $('.lists').css('display','block')
    }
  },
  mounted(){
    
  }
})
