let wordShow = document.querySelector(".wordShow");
let addStyle = document.querySelector(".addStyle");

let string = `/*可视化一个八卦图的动态生成*/
/*首先准备一个div*/
.div{
    width:200px;
    height:200px;
    border:1px solid red;
}
/*给它设置一个边框颜色和背景*/
.div{
    border-radius:50%;
    border:none;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*然后要画出八卦里阴阳的部分，一黑一白*/
/*上面部分*/

.div::before{
    width:100px;
    height:100px;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/*下面部分*/
.div::after{
    width:100px;
    height:100px;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/*已完成*/`
;

let string2 = "";

let n = 0;

let step = () => {
	setTimeout(() => {  
		if (n >= string.length) {
			return; 
		}  
		if (string[n] === "\n") {
			string2 += "<br>";
		} else if (string[n] === " ") {
			string2 += "&nbsp";
		} else {
			string2 += string[n];
		}
		wordShow.innerHTML = string2;
		addStyle.innerHTML = string.substring(0,n);
		n++;
		let viewHight = document.documentElement.clientHeight;
		let allHeight = document.documentElement.scrollHeight;

		if (viewHight < allHeight) {
			window.scrollTo(0,allHeight);
		}
		step();
	
	},1000 / 60);
};

step();