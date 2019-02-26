<template>
  <div>
     <table class="s_head">
        <tr>
            <td></td>
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
            <td>{{item.productName}}</td>   
            <td>{{item.num}}</td>
            <td>
               <el-input-number v-model="item.num" :min="1" :max="10" label="描述文字"></el-input-number>
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
            <td colspan="5">总计：{{total | money }}</td>
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
              _this.total=0;
              this.checkAll=false;
              _this.books.forEach(function(detail){
                 if(_this.checked.indexOf(detail.id)>-1){
                     _this.total+=detail.price*detail.num
                 }
            })
          };
          
      },
      countAll(){
       
      }
    }
}
</script>