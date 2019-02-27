<template>
  <div>
     <table class="s_head">
        <tr>
            <td></td>
            <td>图片</td>
            <td>商品名称</td>
            <td>商品数量</td>
            <td>编辑数量</td>
            <td>单价</td>
            <td>商品价格</td>
            <td>编辑</td>
        </tr>
        <tr v-for="(item,index) in books">
            <td>
               <input type="checkbox" :value="item.id" v-model="checked" @change="checkOne">
            </td>
            <td>
               <img :src="item.img">
            </td>
            <td>{{item.productName}}</td>   
            <td>{{item.num}}</td>
            <td>
               <a @click.stop="admitNum(item,-1)" class="handa">-</a>
               <input type="input" v-model="item.num" value="item.num" class="pnum">
               <a @click.stop="admitNum(item,1)" class="handa">+</a>
            </td>
            <td>{{item.price | money}}</td>
            <td>{{item.num*item.price | money}}</td>
            <td>
               <el-button type="primary">删除</el-button>
            </td>
        </tr>
        <tr>
            <td>
               <input type="checkbox" v-model="checkAll"  @change="pickAll">
            </td>
            <td colspan="7">总计：{{total | money }}</td>
        </tr>
     </table>
  </div>
</template>
<style scoped>
   table{
       width:100%;
       border-collapse: collapse;
   }
   tr{
        border:1px solid #ddd;
    }
    td{
       padding:8px 4px;
       color:#2c3e50;
    }
    .pnum{
        width:30px;
        height:30px;
        text-align:center;
        line-height:30px;
        border:1px solid #ddd;
        margin:0 10px;
    }
    a.handa{
        cursor:pointer;
        font-size:20px;
    }
</style>
<script>
export default {
    data() {
      return {
        books:[],
        checked:[],
        total:0,
        checkAll:false,
        priceArr:[],
        numArr:[]
      };
    },
    mounted(){
       this.$nextTick(function(){
            this.getList()
       })
    },
    filters:{
       money(value){
         return "￥"+value+"元"
       }
    },
    methods: {
      getList(){
          let _this=this;
          this.$http.get('/api/appData').then(res=>{
            _this.books=res.body.data.productList
          })
      },
      pickAll(){
        let _this=this;
        if(!_this.checkAll){
           _this.checked=[];
           _this.priceArr=[];
           _this.total=0;
        }else{
            _this.checked=[];
            _this.priceArr=[];
            _this.total=0;
            _this.books.forEach(function(detail){
                _this.checked.push(detail.id);
                _this.priceArr.push(detail.price*detail.num);
                _this.total+=detail.price*detail.num
            })
        };
        
      },
      checkOne(){
           let _this=this;
           _this.total=0;
          if(this.checked.length==this.books.length){
             this.checkAll=true;
             _this.books.forEach(function(detail){
                _this.checked.push(detail.id);
                _this.priceArr.push(detail.price*detail.num);
                _this.total+=detail.price*detail.num
            })
          }else{
              this.checkAll=false;
              this.countAll();
          };
          
      },
      admitNum(va,type){
          if(type>0){
             va.num++
          }else{
              va.num--;
              if(va.num<1){
                 va.num=1
              }
          }
          this.countAll();
      },
      countAll(){
        let _this=this;
        _this.total=0;
        _this.books.forEach(function(detail){
            if(_this.checked.indexOf(detail.id)>-1){
                _this.total+=detail.price*detail.num
            }
        })
      }
    }
}
</script>