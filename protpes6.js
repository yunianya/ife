var newid=0;
// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
class Restaurant{
    constructor(jsonList){
        for(let item in jsonList) {  
            this[item]=jsonList[item];
        } 
    }

    hire(person){
        this.staff.push(person);
    }

    fire(person){
        this.staff.splice(person.id-1,1);
    }   
}


// 职员类
// 属性：ID，姓名，工资
// 方法：完成一次工作
class Staffs{
    constructor(name,salary){
        newid++;
        this.id=newid;
        this.name=name;
        this.salary=salary;
    }

    job(){};
}


// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
class Waiter extends Staffs{
    constructor(name,salary){
        super(name,salary);
    }

    job(dishes){
        if(Array.isArray(dishes)){
            console.log("点了"+dishes)
        }else{
            console.log("上菜");
        }
    }
}


// 厨师类，继承自职员
// 完成一次工作：烹饪出菜品
class Cook extends Staffs{
    constructor(name,salary){
        super(name,salary);
    }

    job(){
        console.log('xx已经烹饪好');
    }
}


// 顾客类
// 方法：点菜，吃
class Customer{
    constructor(){}

    order(){
        console.log("我点了xx菜");
    }

    eat(){
        console.log("我吃了xx菜");
    }
}


// 菜品类
// 属性：名字、烹饪成本、价格
class Menu{
    constructor(name,cost,prise){
        this.name=name;
        this.cost=cost;
        this.prise=prise;
    }
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
// console.log(newWaiter);
newWaiter.job();
newWaiter.job(["拌云吞","大鸡排","手撕鸡"])