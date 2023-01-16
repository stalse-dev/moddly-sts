
window.moddly = window.moddly || {}

//Função que é responsavel por executar a criação do modal
moddly.open_modal = function(object, sid){
	moddly.create_modal(object, sid)
}

moddly.create_modal = function(object, sid){
	let moddly_exist = document.getElementById('modal-trial__sts')
	if(moddly_exist !== null){
		moddly_exist.style.display = 'flex'
	}else{
		let moddlyModal = document.createElement('div')
		moddlyModal.id = 'modal-trial__sts'
		moddlyModal.classList.add('modal-trial__sts')
		moddlyModal.innerHTML = `
			<div id="modal-content-trial__sts">
				<div id="modal-close-trial__btn">
					<div id="close-icon-trial__div">
						<span id="close-icon-trial__btn">&times;</span>
					</div>
				</div>

				<div id="content-items-trial__sts">
					<div id="thanks-modal__msg">
						<h1 class="main-txt__modal">${object.enp.title}</h1> 
						<br> <p class="main-txt__modal main-txt__p">${object.enp.content}</p>
						<br> <img src="${object.enp.img_header}" alt="product">
					</div>
				</div>
			</div>
		`

		//Parte do código que apenda o CSS no HTML da página
		let style_modal = document.createElement('style')
		style_modal.innerText = `${style_moddlys[sid]}`
		document.querySelector('head').appendChild(style_modal)

		document.querySelector('body').appendChild(moddlyModal)
		document.getElementById('modal-trial__sts').style.display = 'flex'

		document.getElementById('close-icon-trial__div').addEventListener('click', function(){
			document.getElementById('modal-trial__sts').style.display = 'none'
		})
	}
}

var moddly_fixed_style = `
#modal-trial__sts{
	display:flex; 
	position: fixed; 
	z-index: 999; 
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
	align-items: center;
	justify-content: center;
}

#modal-trial__sts #modal-content-trial__sts #modal-close-trial__btn{
	width: 100%;
	display: flex;
	justify-content: flex-end;
}

#modal-trial__sts #modal-content-trial__sts #modal-close-trial__btn #close-icon-trial__div{
	margin-right: 10px;
	margin-top: 10px;
	width: 30px;
	height: 30px;
	padding: 3px;
	border-radius: 50%;
	cursor: pointer;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
}

#modal-trial__sts #modal-content-trial__sts #modal-close-trial__btn #close-icon-trial__div #close-icon-trial__btn{
	font-size: 30px;
}

#modal-trial__sts #modal-content-trial__sts #content-items-trial__sts{
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
	justify-content: space-around;
	position: relative;
	z-index: 2;
}

#modal-trial__sts #modal-content-trial__sts #content-items-trial__sts #thanks-modal__msg{
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
`

let style_moddlys = {
	1: `${moddly_fixed_style}
	
	#modal-trial__sts #modal-content-trial__sts{
		height: 620px;
		width: 850px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #000;
	}
	
	#modal-trial__sts #modal-content-trial__sts #content-items-trial__sts #thanks-modal__msg .main-txt__modal{
		color: #fff;
		font-size: 25px;
	}
	
	#modal-trial__sts #modal-content-trial__sts #content-items-trial__sts #thanks-modal__msg .main-txt__p{
		color: #fff;
		font-size: 16px;
	}`,
	2 : `
	${moddly_fixed_style}
	#modal-trial__sts #modal-content-trial__sts{
		height: 620px;
		width: 850px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
	}
	
	#modal-trial__sts #modal-content-trial__sts #content-items-trial__sts #thanks-modal__msg .main-txt__modal{
		color: #000;
		font-size: 25px;
	}
	
	#modal-trial__sts #modal-content-trial__sts #content-items-trial__sts #thanks-modal__msg .main-txt__p{
		color: #000;
		font-size: 16px;
	}`
}