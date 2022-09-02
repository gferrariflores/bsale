//const url = "http://localhost/bsale/backend/product.php"
//const url_categories = "http://localhost/bsale/backend/category.php"
//const url_products = "http://localhost/bsale/backend/product.php"

const url_categories = window.location + "/backend/category.php"
const url_products = window.location + "/backend/product.php"

fetch(url_categories)
.then(response => response.json())
.then(data => {
	//console.log(data)
	//data.forEach(e => console.log(e))
	html = ""
	data.forEach(function (e){
		//console.log(e)
		html = html + `
			<li class="nav-item" >
				<a href="javascript:void(0)" onclick="displayProducts(${e.id},'${e.name}')" class="nav-link align-middle px-0">
					${e.name}
				</a>
			</li>
		`
	})

	let menu = document.getElementById('menu')
	menu.innerHTML = html

})
.catch(err => console.log(err))

function displayProducts(category_id,category_name){
    //console.log(category_id)

    url = url_products + "?category=" + category_id

    fetch(url)
	.then(response => response.json())
	.then(data => {
		//console.log(data)
		//data.forEach(e => console.log(e))
		html = `<h5>${category_name}</h5>`
		data.forEach(function (e){
			console.log(e)

			if(e.url_image){
				url_image = e.url_image.replace(/\/$/, "")
			}else{
				url_image = "https://www.handelsgillet.com/wp-content/uploads/2017/10/NO-IMAGE.png"
			}

			if(e.discount != 0){
				discountBadge = `
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						${e.discount}%
					</span>
				`
			}else{
				discountBadge = ""
			}

			price = new Intl.NumberFormat('de-DE').format(e.price)

			html = html + `
				<div class="card m-3" style="width: 18rem;">
					<img src="${url_image}" class="card-img-top" style="height:220px;" alt="...">
					<div class="card-body">
						<h5 class="card-title text-center">${e.name}</h5>
						<h4 class="card-title text-center text-success">$${price}</h4>
						${discountBadge}
					</div>
				</div>
			`
		})

		let content = document.getElementById('content')
		content.innerHTML = html

	})
	.catch(err => console.log(err))	

}