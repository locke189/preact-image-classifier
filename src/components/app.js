import { h, Component } from 'preact';

import ImageComponent from './Image'
export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<h1>home</h1>
				<ImageComponent src="https://i.imgur.com/JlUvsxa.jpg" width="227" height="227" />
			</div>
		);
	}
}
