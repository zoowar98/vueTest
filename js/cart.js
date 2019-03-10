new Vue({
	el:".container",
	data:{
		productList:[]
	},
	filters:{
		
	},
	mounted:function(){
		this.$nextTick(
			function(){
				this.cartView();
			}
		);
	},
	methods:{
		cartView:function(){		
			console.log(222);
			var _this=this;
			axios.get("data/cartData.json",{"id":123}).then(function(res){	
				console.log(res);
			   _this.productList=res.data.result.list;
			});
		}
	}
	
});
