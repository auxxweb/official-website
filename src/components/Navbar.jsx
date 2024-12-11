import React from 'react'
const Navbar = () => {
  return (
    <div>
        <header class="header">
			<div class="header__container">
				<div class="header__wrapper">
					{/* <a class="header__logo" href="index.html"><picture><source srcset="img/logo.webp" type="image/webp"><img src="img/logo.png" alt="kron logo"/></picture></a> */}
					<nav class="header__menu menu">
						<ul class="menu__items">
							<li class="menu__item"><a href="index.html">about us.</a></li>
							<li class="menu__item"><a href="careers.html">careers.</a></li>
							<li class="menu__item"><a href="contacts.html">contacts.</a></li>
							<li class="menu__item menu__item_gradient"><a href="kronstories.html">#kronstories</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
      
    </div>
  )
}

export default Navbar
