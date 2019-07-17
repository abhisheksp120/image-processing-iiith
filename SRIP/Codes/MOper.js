
var radios = document.querySelectorAll('input[type=radio][name="radio"]');
var radios1 = document.querySelectorAll('input[type=radio][name="radio1"]');
var radios2 = document.querySelectorAll('input[type=radio][name="radio2"]');
var x=0;
var y=0;
var z=0;

function changeHandler3(event) {
	if ( this.value === 'elliptical' ) {
		z=1;
	}else if( this.value ==='Square'){
		z=2;
	}else if(this.value === 'Line'){
		z=3;
	}

}

Array.prototype.forEach.call(radios1, function(radio) {
   radio.addEventListener('change', changeHandler3);
});

function changeHandler2(event) {
	if ( this.value === '3' ) {
		x=3;
	}else if( this.value ==='5'){
		x=5;
	}else if(this.value === '7'){
		x=7;
	}

}

Array.prototype.forEach.call(radios2, function(radio) {
   radio.addEventListener('change', changeHandler2);
});
var count=0;
var name;
var flag=0;
var name1;
function im(check){
	if(flag===0){
	if(check===1){
		count=1;
		name="ed";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===2){
		count=2;
		name="ed1";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===3){
		count=3;
		name="ed2";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===4){
		count=4;
		name="ed3";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===5){
		count=5;
		name="ed4";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===6){
		count=6;
		name="ed5";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===7){
		count=7;
		name="ed6";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===8){
		count=8;
		name="ed7";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
	if(check===9){
		count=9;
		name="ed8";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		flag=1;
	}
}
else{
	document.getElementById(name1).style.borderColor ="";

	if(check===1){
		count=1;
		name="ed";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
	}
	if(check===2){
		count=2;
		name="ed1";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
	}
	if(check===3){
		count=3;
		name="ed2";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
	}
	if(check===4){
		count=4;
		name="ed3";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
	}
	if(check===5){
		count=5;
		name="ed4";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
	}
	if(check===6){
		count=6;
		name="ed5";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
	}
	if(check===7){
		count=7;
		name="ed6";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		
	}
	if(check===8){
		count=8;
		name="ed7";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		
	}
	if(check===9){
		count=9;
		name="ed8";
		name1=name;
		document.getElementById(name).style.borderColor = "blue";
		document.getElementById("imageSrc").src= document.getElementById(name).src;
		document.getElementById("canvasOutput").style.display="none";
		document.getElementById("write1").innerHTML = '<strong>Output Image</strong>';
		
	}
}
}
function changeHandler(event) {
   if ( this.value === 'dilation' ) {
    	y=1;
			
   } else if ( this.value === 'erosion' ) {
 		y=2;
   }else if(this.value === 'closing')  {
   		y=3;
   }else if(this.value ==='opening'){
   		y=4;
   }
}

Array.prototype.forEach.call(radios, function(radio) {
   radio.addEventListener('change', changeHandler);
});


function show(check){
	
	if(count!=0){
		check=name;
		document.getElementById("imageSrc").style.marginTop = "0%";
	if(y===0){
  				alert('Please select the operation');
  				changeHandler(event);
  			}
  			else{
			//document.getElementById('canvasOutput').style.display = "none";
  			if(z===0){
  				alert('Please select the type of structural element');
  			}else{
  				if(x===0){
  							alert('Please select the size of structural element');
  				}else{
					if(y===1){
						if(z===1){
							var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 							var ctx =c.getContext("2d");
 							var img = document.getElementById("imageSrc");
 							ctx.drawImage(img,0,0);
    						c.toBlob(function(blob) {
  										
    						 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  						setTimeout(()=>{
    							   (()=>{
    						      let mat = cv.imread(imgElement);
  								let dst = new cv.Mat();
  								let M = new cv.Mat();
								let ksize = new cv.Size(x, x);
								M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
													let anchor = new cv.Point(-1, -1);  
													cv.dilate(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
													cv.imshow('canvasOutput', dst);
													mat.delete();dst.delete(); M.delete();
								})();
								},1000);
  										});
						}if(z===2){
							
							var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								      let mat = cv.imread(imgElement);
  										let dst = new cv.Mat();
  										let M = cv.Mat.ones(x, x, cv.CV_8U);
															let anchor = new cv.Point(-1, -1);  
															cv.dilate(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
															cv.imshow('canvasOutput', dst);
															mat.delete();dst.delete(); M.delete();
								})();
								},1000);
  										});
						}
						if(z===3){
							var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								    	 let mat = cv.imread(imgElement);
							let M = new cv.Mat();
							let dst = new cv.Mat();
							let ksize = new cv.Size(x, 1);
							M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
							let anchor = new cv.Point(-1, -1);  
							cv.dilate(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
							cv.imshow('canvasOutput', dst);
							mat.delete();dst.delete(); M.delete();
							})();
								},1000);
  										});
						}
						
            			document.getElementById("write1").innerHTML = '<strong>Output Image(Dilation)</strong>';
					}else if(y===2){
								if(z===1){
											var imgElement =document.getElementById("imageSrc");
									document.getElementById("imageSrc").src="";
									document.getElementById("imageSrc").src= document.getElementById(check).src;
									var c= document.getElementById("canvasInput");
 													var ctx =c.getContext("2d");
 											var img = document.getElementById("imageSrc");
 											ctx.drawImage(img,0,0);
    										    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 			 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    		(()=>{
    								    		  let mat = cv.imread(imgElement);
  												let dst = new cv.Mat();
  												let M = new cv.Mat();
												let ksize = new cv.Size(x, x);
												M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
																	let anchor = new cv.Point(-1, -1);  
																	cv.erode(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
																	cv.imshow('canvasOutput', dst);
																	mat.delete();dst.delete(); M.delete();
										})();
										},1000);
  												});
								}if(z===2){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								      let mat = cv.imread(imgElement);
  										let dst = new cv.Mat();
  										let M = cv.Mat.ones(x, x, cv.CV_8U);
															let anchor = new cv.Point(-1, -1);  
															cv.erode(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
															cv.imshow('canvasOutput', dst);
															mat.delete();dst.delete(); M.delete();
								})();
								},1000);
  										});
								}
								if(z===3){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								    	 let mat = cv.imread(imgElement);
							let M = new cv.Mat();
							let dst = new cv.Mat();
							let ksize = new cv.Size(x, 1);
							M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
							let anchor = new cv.Point(-1, -1);  
							cv.erode(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
							cv.imshow('canvasOutput', dst);
							mat.delete();dst.delete(); M.delete();
							})();
								},1000);
  										});
								}
						document.getElementById("write1").innerHTML = '<strong>Output Image(Erosion)</strong>';
					}else if(y===3){
								if(z===1){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  								setTimeout(()=>{
    								    (()=>{
    								      let mat = cv.imread(imgElement);
  										let dst = new cv.Mat();
  										let M = new cv.Mat();
										let ksize = new cv.Size(x, x);
										M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
															let anchor = new cv.Point(-1, -1);  
															cv.morphologyEx(mat, dst, cv.MORPH_CLOSE, M);
															cv.imshow('canvasOutput', dst);
															mat.delete();dst.delete(); M.delete();
								})();
								},1000);
  										});
								}if(z===2){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								      let mat = cv.imread(imgElement);
  										let dst = new cv.Mat();
  										let M = cv.Mat.ones(x, x, cv.CV_8U);
															let anchor = new cv.Point(-1, -1);  
															cv.morphologyEx(mat, dst, cv.MORPH_CLOSE, M);
															cv.imshow('canvasOutput', dst);
															mat.delete();dst.delete(); M.delete();
								})();
								},1000);
  										});
								}
								if(z===3){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								    	 let mat = cv.imread(imgElement);
							let M = new cv.Mat();
							let dst = new cv.Mat();
							let ksize = new cv.Size(x, 1);
							M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
							let anchor = new cv.Point(-1, -1);  
							cv.morphologyEx(mat, dst, cv.MORPH_CLOSE, M);
							cv.imshow('canvasOutput', dst);
							mat.delete();dst.delete(); M.delete();
							})();
								},1000);
  										});
									
								}
						document.getElementById("write1").innerHTML = '<strong>Output Image(Closing)</strong>';
					}else if(y===4){
								if(z===1){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  								setTimeout(()=>{
    								    (()=>{
    								      let mat = cv.imread(imgElement);
  										let dst = new cv.Mat();
  										let M = new cv.Mat();
										let ksize = new cv.Size(x, x);
										M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
															let anchor = new cv.Point(-1, -1);  
															cv.morphologyEx(mat, dst, cv.MORPH_OPEN, M, anchor, 1,
         				      		cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
															cv.imshow('canvasOutput', dst);
															mat.delete();dst.delete(); M.delete();
								})();
								},1000);
  										});
								}if(z===2){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								      let mat = cv.imread(imgElement);
  										let dst = new cv.Mat();
  										let M = cv.Mat.ones(x, x, cv.CV_8U);
															let anchor = new cv.Point(-1, -1);  
															cv.morphologyEx(mat, dst, cv.MORPH_OPEN, M, anchor, 1,
         				    		cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
															cv.imshow('canvasOutput', dst);
															mat.delete();dst.delete(); M.delete();
								})();
								},1000);
  										});
								}
								if(z===3){
									var imgElement =document.getElementById("imageSrc");
							document.getElementById("imageSrc").src="";
							document.getElementById("imageSrc").src= document.getElementById(check).src;
							var c= document.getElementById("canvasInput");
 									var ctx =c.getContext("2d");
 									var img = document.getElementById("imageSrc");
 									ctx.drawImage(img,0,0);
    								    c.toBlob(function(blob) {
  										
  										//let imgElement = document.getElementById(check);
    								 	 imgElement.src = URL.createObjectURL(blob);
    								 	 //var imgElement1 =document.getElementById("imageSrc");
										//imgElement1.src=imgElement.src;
  										setTimeout(()=>{
    								    (()=>{
    								    	 let mat = cv.imread(imgElement);
							let M = new cv.Mat();
							let dst = new cv.Mat();
							let ksize = new cv.Size(x, 1);
							M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
							let anchor = new cv.Point(-1, -1);  
							cv.morphologyEx(mat, dst, cv.MORPH_OPEN, M, anchor, 1,
         				    		cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
							cv.imshow('canvasOutput', dst);
							mat.delete();dst.delete(); M.delete();
							})();
								},1000);
  										});
									
								}
						document.getElementById("write1").innerHTML = '<strong>Output Image(Opening)</strong>';
					}	
					Array.prototype.forEach.call(radios2, function(radio) {
   					radio.addEventListener('change', changeHandler2);
					});
  				}
  			}
  			}
  			setTimeout(()=>{
	document.getElementById('canvasOutput').style.display = "inline";
},1020);
}else{
	alert('Please Select a image by clicking on it');
}
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
