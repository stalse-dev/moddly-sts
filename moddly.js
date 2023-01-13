window.moddly = window.moddly || {}

//Função que é responsavel por executar a criação do modal
moddly.open_modal = function(object){
	moddly.create_modal(object)
}

moddly.create_modal = function(object){
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
	style_modal.innerText = `${object.enp.style}`
	document.querySelector('head').appendChild(style_modal)

	document.querySelector('body').appendChild(moddlyModal)
    document.getElementById('modal-trial__sts').style.display = 'flex'

	document.getElementById('close-icon-trial__div').addEventListener('click', function(){
		document.getElementById('modal-trial__sts').style.display = 'none'
	})
}