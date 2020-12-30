import React from 'react'
import './rgallery.css'
import fetch from 'cross-fetch'
//import ScrollToTop from 'react-router-scroll-top'


class Rgallery extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [],
			activeID: 0,
			imageView: false
		}
	}
	componentWillMount() {
		this._loadData('https://raw.githubusercontent.com/salemaziel/new-salemaziel.com/master/src/components/PageComponents/Portfolio/screenshots.json')
	}
	//componentWillUnmount() {
	//		this._loadData.abort()
	//	}
		// Fetch data, then clone it to state using destructuring
		// XHR Fallback
	_loadData(url) {
		fetch(url, {
				method: 'GET'
			})
			.then(response => response.json())
			.then(json => this.setState({
				data: [...json.gallery]
			}))
			.catch((err) => {
				console.log(err.message)
				try {
					const xhr = new XMLHttpRequest()
					xhr.open('GET', url)
					xhr.responseType = 'json'

					xhr.onload = () => {
						let json = xhr.response
						this.setState({
							data: [...json.gallery]
						})
					}

					xhr.onerror = () => {
						throw new Error('XMLHttpRequest Failed...')
					}

					xhr.send()
				} catch (e) {
					console.log(e.message)
				}
			})
	}
	_openImageView(id) {
		this.setState({
			activeID: id,
			imageView: true
		});
	}
	_closeImageView() {
		this.setState({
			imageView: false
		})
	}
	render() {
		return (
			<div className="wrapper" style={{width: '100%'}}>
				{
					this.state.imageView ? 
					<ImageView {...this.state.data[this.state.activeID]}
						_closeImageView={this._closeImageView.bind(this)} />
						:
					<Gallery data={this.state.data}
						_openImageView={this._openImageView.bind(this)} />
				}
			</div>
		)
	}
}

class ImageView extends React.Component {
	render() {
		return (
			
			<div className="imageview-wrapper fadeIn">
				
				<div className="imageview">
				
					<Image CSSClass="imageview-image"
						src={this.props.src}
						alt={this.props.name} 
						style={{width:' 100%'}}/>
					<div className="imageview-info">
						<button className="imageview-close" onClick={this.props._closeImageView}>x</button>
						<h2>{this.props.name}</h2>
						<p className="rgallery">{this.props.desc}</p>
						{/*<h3 className="tags">Tags</h3>
						<ul>
							{this.props.tags.map(tag => <li>{tag}</li>)}
						</ul>*/}
					</div>
					
			</div>
			
		</div>
		
		)
	}
}

class Gallery extends React.Component {
	render() {
		return (
			<div className="gallery fadeIn">
			{
				this.props.data.map( data => 
					<Tile key={data.id}
						id={data.id}
						src={data.src}				
						name={data.name}
						desc={data.desc}
						thumb={data.thumb}
						_openImageView={this.props._openImageView} />
				)
			}
	</div>
		)
	}
}

class Tile extends React.Component {
	_handleClick() {
		this.props._openImageView(this.props.id)
	}
	render() {
		return (
			<div className="gallery-tile" onClick={this._handleClick.bind(this)}>
			<div className="picture-info">
				<h2>{this.props.name}</h2>
				{/*<p>{this.props.desc}</p>*/}
			</div>
			<Image
				CSSClass="tile-image"
				src={this.props.thumb} 
				alt={this.props.name} />
		</div>
		)
	}
}

const Image = (props) => (
	<img
		className={props.CSSClass}
		src={props.src} 
		alt={props.name} />
)

// Render Rgallery
//ReactDOM.render(<Rgallery />, document.getElementById('rgallery'))
export default Rgallery