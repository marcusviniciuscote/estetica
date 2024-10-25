openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
  
    menu.style.right = (menu.offsetWidth * -1) + 'px'
  
    openMenu.style.display = 'none'
  
    setTimeout(() => {
      menu.style.opacity = '1'
      menu.style.right = '0'
    }, 10)
  })
  
  closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'
  
    menu.style.right = (menu.offsetWidth * -1) + 'px'
  
    setTimeout(() => {
      menu.removeAttribute('style')
      openMenu.removeAttribute('style')
    }, 200)
  })

  function fechar() {
    //document.getElementById('closeMenu').dispatchEvent(new Event('click'));
    setTimeout(() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
      }, 200)
  }
  
  // Cache the list, and the items
  const list = document.querySelector(' nav');
  const links = list.querySelectorAll('a');
  
  // Add one listener to the list element
  list.addEventListener('click', handleClick);
  
  // If the clicked element is a link remove all
  // the active classes from the other links, and then
  // add the active class to the link that was clicked on
  function handleClick(e) {
    if (e.target.matches('a')) {
      links.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    }
  }
