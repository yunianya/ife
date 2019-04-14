var newid=0;
//实现继承函数
function extend(sub,sup){
    var F=function(){};
    F.prototype=sup.prototype;
    sub.prototype=new F();
    sub.prototype.constructor=sub;
    sub.sup=sup.prototype;
    if(sup.prototype.constructor===Object.prototype.constructor){
        sup.prototype.constructor=sup;
    }
}


// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
function Restaurant(jsonList){
        for(var item in jsonList) {  
            this[item]=jsonList[item];
        } 
}

Restaurant.prototype.hire=function(person){
    this.staff.push(person);
}

Restaurant.prototype.fire=function(person){
    this.staff.splice(person.id-1,1);
}


// 职员类
// 属性：ID，姓名，工资
// 方法：完成一次工作
function Staffs(name,salary){
    newid++;
    this.id=newid;
    this.name=name;
    this.salary=salary;
}

Staffs.prototype.job=function(dishes){

}


// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
function Waiter(name,salary){
    Staffs.call(this,name,salary);
}

extend(Waiter,Staffs);

Waiter.prototype.job=function(dishes){
    if(Array.isArray(dishes)){
        console.log("点了"+dishes)
    }else{
        console.log("上菜");
    }
}


// 厨师类，继承自职员
// 完成一次工作：烹饪出菜品
function Cook(name,salary){
    Staffs.call(this,name,salary);
}

extend(Cook,Staffs);

Cook.prototype.job=function(){
    console.log('xx已经烹饪好');
}


// 顾客类
// 方法：点菜，吃
function Customer(){

}

Customer.prototype.order=function(){
    console.log("我点了xx菜");
}

Customer.prototype.eat=function(){
    console.log("我吃了xx菜");
}


// 菜品类
// 属性：名字、烹饪成本、价格
function Menu(name,cost,prise){
    this.name=name;
    this.cost=cost;
    this.prise=prise;
}

//测试用例
var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});
// console.log(ifeRestaurant); 
var newCook = new Cook("Tony", 10000);
// console.log(newCook);
// newCook.job();
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);

var newWaiter = new Waiter("Marry", 1000);
newWaiter.job();
newWaiter.job(["拌云吞","大鸡排","手撕鸡"])