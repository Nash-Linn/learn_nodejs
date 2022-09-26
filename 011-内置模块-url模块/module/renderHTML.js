function renderHTML(url){
	switch(url){
		case "/home":
			return `
				<html>
					<h1>
						HOME
					</h1>
					<h2>
						你好，世界
					</h2>
				</html>
			`
			
		case "/list":
			return `
				<html>
					<h1>
						LIST
					</h1>
					<h2>
						[1,2,3,4]
					</h2>
				</html>
			`
		default:
			return `
				<html>
					<h1>
						404
					</h1>
				</html>
			`
	}
}



// exports.renderHTML = renderHTML

module.exports = {
	renderHTML
}