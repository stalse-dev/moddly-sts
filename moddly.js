window.moddly = window.moddly || {}

moddly.open_modal = function(){
	moddly.create_modal('0001')
}

moddly.create_modal = function(){
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
				
			</div>
		</div>
	`
	moddlyModal.setAttribute('style', 'display:none')

	document.querySelector('body').appendChild(moddlyModal)

	id_object = {
		enp_1 : {
			title :'Compre Agora na Black Friday',
			content :'Compre agora os nossos produtos com desconto, especialmente hoje',
			img_header :'https://images8.kabum.com.br/produtos/fotos/369238/kit-3-cooler-fan-nzxt-120mm-rgb-preto-rf-r12tf-b1_1667925147_m.jpg',
			style :{
				out_modal:`
					position: fixed; /* Stay in place */
					z-index: 999; /* Sit on top */ /* Location of the box */
					left: 0;
					top: 0;
					width: 100%; /* Full width */
					height: 100%; /* Full height */
					overflow: auto; /* Enable scroll if needed */
					background-color: rgb(0,0,0); /* Fallback color */
					background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
					display: none;
					align-items: center;
					justify-content: center;
				`,
				modal:`height: 620px;
					width: 850px;
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					background-color: #000;`,
				modal_close_div:`
					width: 100%;
					display: flex;
					justify-content: flex-end;
					`,
				close_icon_div:`
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
				`,
				close_btn:`
					font-size: 30px;    
				`,
				content:`
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					margin: 0 auto;
					align-items: center;
					justify-content: space-around;
					position: relative;
					z-index: 2;
				`,
				message:`
					width: 80%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`,
				title: '25px',
				font_size: "18px",
				color: '#fff',
				
			}
		},
		enp_2 : {
			title :'Compre Agora os produtos natalinos',
			content :'Compre agora os nossos produtos com desconto do papai noel, HOHOHOHOHOHOHOHOHO',
			img_header :'https://images.kabum.com.br/produtos/fotos/115801/controle-sem-fio-ps5-dualsense_1598897393_m.jpg',
			style :{
				out_modal:`
					position: fixed; /* Stay in place */
					z-index: 999; /* Sit on top */ /* Location of the box */
					left: 0;
					top: 0;
					width: 100%; /* Full width */
					height: 100%; /* Full height */
					overflow: auto; /* Enable scroll if needed */
					background-color: rgb(0,0,0); /* Fallback color */
					background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
					display: none;
					align-items: center;
					justify-content: center;
				`,
				modal:`height: 620px;
					width: 850px;
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					background-color: #fff;`,
				modal_close_div:`
					width: 100%;
					display: flex;
					justify-content: flex-end;
					`,
				close_icon_div:`
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
				`,
				close_btn:`
					font-size: 30px;    
				`,
				content:`
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					margin: 0 auto;
					align-items: center;
					justify-content: space-around;
					position: relative;
					z-index: 2;
				`,
				message:`
					width: 80%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				`,
				title: '20px',
				font_size: "16px",
				background: '#fff',
				color: '#000'
			}
		},
	}

	document.getElementById('modal-trial__sts').setAttribute('style', id_object.enp_1.style.out_modal)
    document.getElementById('modal-content-trial__sts').setAttribute('style', id_object.enp_1.style.modal)
    document.getElementById('modal-close-trial__btn').setAttribute('style', id_object.enp_1.style.modal_close_div)
    document.getElementById('close-icon-trial__div').setAttribute('style', id_object.enp_1.style.close_icon_div)
    document.getElementById('close-icon-trial__btn').setAttribute('style', id_object.enp_1.style.close_btn)
    document.getElementById('content-items-trial__sts').setAttribute('style', id_object.enp_1.style.content)
    document.getElementById('thanks-modal__msg').setAttribute('style', id_object.enp_1.style.message)
    document.getElementById('modal-trial__sts').style.display = 'flex'
    var msg = document.getElementById('thanks-modal__msg')
    msg.innerHTML = `<h1 style="color:${id_object.enp_1.style.color}; font-size:${id_object.enp_1.style.title}">${id_object.enp_1.title}</h1> 
                    <br> <p style="color:${id_object.enp_1.style.color}; font-size:${id_object.enp_1.style.font_size}">${id_object.enp_1.content}</p>
                     <br> <img src="${id_object.enp_1.img_header}" alt="product">`

	document.getElementById('close-icon-trial__div').addEventListener('click', function(){
		document.getElementById('modal-trial__sts').style.display = 'none'
	})
}