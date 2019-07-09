
var radios = document.querySelectorAll('input[type=radio][name="radio"]');
var radios1 = document.querySelectorAll('input[type=radio][name="radio1"]');
var radios2 = document.querySelectorAll('input[type=radio][name="radio2"]');
var x=0;
var y=0;
var z=0;
$('input[type="file"]').change(function(e){
            var fileName = e.target.files[0].name;
            document.getElementById("write").innerHTML = '<strong>Input Image (' + fileName +  ') has been selected.</strong>';   
        });
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

function cl(){
	let imgElement = document.getElementById('imageSrc');
	let inputElement = document.getElementById('fileInput');
	inputElement.addEventListener('change', (e) => {
 	imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

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


function show(){
	if( document.getElementById("fileInput").files.length == 0 ){
    alert("No files selected");
}else{
	
	if(y===0){
  				alert('Please select the operation');
  				changeHandler(event);
  			}
  			else{
		var c = document.getElementById("canvasOutput");
		var ctx = c.getContext("2d");
		document.getElementById('canvasOutput').style.display = "none";
		let imgElement = document.getElementById('imageSrc');
		let inputElement = document.getElementById('fileInput');
		inputElement.addEventListener('change', (e) => {
  		imgElement.src = URL.createObjectURL(e.target.files[0]);
		}, false);
			let mat = cv.imread(imgElement);
  			let dst = new cv.Mat();
  			if(z===0){
  				alert('Please select the type of structural element');
  			}else{
  				if(x===0){
  							alert('Please select the size of structural element');
  				}else{
					if(y===1){
						if(z===1){
							let M = new cv.Mat();
							let ksize = new cv.Size(x, x);
							M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
							let anchor = new cv.Point(-1, -1);  
							cv.dilate(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
							cv.imshow('canvasOutput', dst);
							mat.delete();dst.delete(); M.delete();
						}if(z===2){
							let M = cv.Mat.ones(x, x, cv.CV_8U);
							let anchor = new cv.Point(-1, -1);  
							cv.dilate(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
							cv.imshow('canvasOutput', dst);
							mat.delete();dst.delete(); M.delete();
						}
						if(z===3){
							let M = new cv.Mat();
							let ksize = new cv.Size(x, 1);
							M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
							let anchor = new cv.Point(-1, -1);  
							cv.dilate(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
							cv.imshow('canvasOutput', dst);
							mat.delete();dst.delete(); M.delete();
						}
						
            			document.getElementById("write1").innerHTML = '<strong>Onput Image(Dilation Operation performed)</strong>';
					}else if(y===2){
								if(z===1){
									let M = new cv.Mat();
									let ksize = new cv.Size(x, x);
									M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
									let anchor = new cv.Point(-1, -1);  
									cv.erode(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}if(z===2){
									let M = cv.Mat.ones(x, x, cv.CV_8U);
									let anchor = new cv.Point(-1, -1);  
									cv.erode(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}
								if(z===3){
									let M = new cv.Mat();
									let ksize = new cv.Size(x, 1);
									M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
									let anchor = new cv.Point(-1, -1);  
									cv.erode(mat, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}
						document.getElementById("write1").innerHTML = '<strong>Onput Image(Erosion Operation performed)</strong>';
					}else if(y===3){
								if(z===1){
									let M = new cv.Mat();
									let ksize = new cv.Size(x, x);
									M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
									let anchor = new cv.Point(-1, -1);  
									cv.morphologyEx(mat, dst, cv.MORPH_CLOSE, M);
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}if(z===2){
									let M = cv.Mat.ones(x, x, cv.CV_8U);
									let anchor = new cv.Point(-1, -1);  
									cv.morphologyEx(mat, dst, cv.MORPH_CLOSE, M);
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}
								if(z===3){
									let M = new cv.Mat();
									let ksize = new cv.Size(x, 1);
									M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
									let anchor = new cv.Point(-1, -1);  
									cv.morphologyEx(mat, dst, cv.MORPH_CLOSE, M);
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}
						document.getElementById("write1").innerHTML = '<strong>Onput Image(Closing Operation performed)</strong>';
					}else if(y===4){
								if(z===1){
									let M = new cv.Mat();
									let ksize = new cv.Size(x, x);
									M = cv.getStructuringElement(cv.MORPH_ELLIPSE, ksize);
									let anchor = new cv.Point(-1, -1);  
									cv.morphologyEx(mat, dst, cv.MORPH_OPEN, M, anchor, 1,
         				      		cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}if(z===2){
									let M = cv.Mat.ones(x, x, cv.CV_8U);
									let anchor = new cv.Point(-1, -1);  
									cv.morphologyEx(mat, dst, cv.MORPH_OPEN, M, anchor, 1,
         				    		cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}
								if(z===3){
									let M = new cv.Mat();
									let ksize = new cv.Size(x, 1);
									M = cv.getStructuringElement(cv.MORPH_RECT, ksize);
									let anchor = new cv.Point(-1, -1);  
									cv.morphologyEx(mat, dst, cv.MORPH_OPEN, M, anchor, 1,
         				    		cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
									cv.imshow('canvasOutput', dst);
									mat.delete();dst.delete(); M.delete();
								}
						document.getElementById("write1").innerHTML = '<strong>Onput Image(Opening Operation performed)</strong>';
					}	
					Array.prototype.forEach.call(radios2, function(radio) {
   					radio.addEventListener('change', changeHandler2);
					});
  				}
  			}
  			}
	document.getElementById('canvasOutput').style.display = "inline";
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
