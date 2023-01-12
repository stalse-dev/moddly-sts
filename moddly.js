window.moddly = window.moddly || {}

moddly.open_modal = function(object){
	moddly.create_modal(object)
}

moddly.create_modal = function(object){
	let moddlyModal = document.createElement('div')
	moddlyModal.id = 'modal-trial__sts'
	moddlyModal.classList.add('modal-trial__sts')
	moddlyModal.setAttribute('style', `display:none; 
	position: fixed; 
	z-index: 999; 
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
	display: none;
	align-items: center;
	justify-content: center;`)

	moddlyModal.innerHTML = `
		<div id="modal-content-trial__sts" style="height: 620px;
			width: 850px;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			background-color: #000;">

		<div id="modal-close-trial__btn" style="width: 100%;
			display: flex;
			justify-content: flex-end;">

			<div id="close-icon-trial__div" style="margin-right: 10px;
			margin-top: 10px;
			width: 30px;
			height: 30px;
			padding: 3px;
			border-radius: 50%;
			cursor: pointer;
			background-color: #ffffff;
			display: flex;
			justify-content: center;
			align-items: center;">

				<span id="close-icon-trial__btn" style="font-size: 30px;">&times;</span>
			</div>
		</div>

		<div id="content-items-trial__sts" style="height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			align-items: center;
			justify-content: space-around;
			position: relative;
			z-index: 2;">

			<div id="thanks-modal__msg" style="width: 80%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;">
				
			</div>
		</div>
	`

	document.querySelector('body').appendChild(moddlyModal)
    document.getElementById('modal-trial__sts').style.display = 'flex'
    var msg = document.getElementById('thanks-modal__msg')
    msg.innerHTML = `<h1 style="color: #ffff; font-size: 25px;">${object.enp.title}</h1> 
                    <br> <p style="color: #ffff; font-size: 18px;">${object.enp.content}</p>
                     <br> <img src="${object.enp.img_header}" alt="product">`

	document.getElementById('close-icon-trial__div').addEventListener('click', function(){
		document.getElementById('modal-trial__sts').style.display = 'none'
	})
}