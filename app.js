const div = document.querySelector('postsbar');
const section = document.getElementById('postform');
const li = document.querySelector('.new');

li.addEventListener('onkeydown', changeView)

function changeView(div, section){
	if (div.style.visibility === 'hidden'){
		div.style.display = 'visible';
		section.style.display = 'hidden';
  }
}
