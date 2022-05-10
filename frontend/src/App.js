import './App.css';
import React, { Component } from 'react';

import { Form } from "react-bootstrap"



const imageURL = [
    "https://sites.imsa.edu/acronym/files/2019/03/advertising-777x437.png",
    "https://www.stretchingabuckblog.com/wp-content/uploads/2013/11/home-depot-black-friday-ad-2013.jpg",
    "https://image.shutterstock.com/image-photo/11-april-2018-white-tesla-600w-1074713426.jpg",
    "https://image.shutterstock.com/image-photo/hong-kong-may-20-2019-600w-1417919888.jpg",
    "https://image.shutterstock.com/image-photo/hong-kong-china-circa-january-600w-1643565031.jpg"
]


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            headline: '',
            img: 0
        }

        this.handleImgChange = this.handleImgChange.bind(this)

        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(event) {
        this.setState({headline: event.target.value})
    }

    handleImgChange(event) {
        this.setState({img: event.target.value})
    }


    render() {
        return (
            <center>
            <div className="wrapper">
                <h1>Facebook Ad Builder</h1>
                <div class='parent'>
                    <div class='child inline-block-child'>
                        <h4>Build New Ad</h4>
                        <form>
                            <Form.Group>
                                <Form.Label>Headline: </Form.Label>
                                <input type="text" value={this.state.headline} onChange={this.handleTextChange}/>
                            </Form.Group>
                            <h2></h2>
                            <Form.Label>Select Image: </Form.Label>
                            <select  value={this.state.img} onChange={this.handleImgChange}>
                                <option value={1}>Image 1</option>
                                <option value={2}>Image 2</option>
                                <option value={3}>Image 3</option>
                                <option value={4}>Image 4</option>
                            </select>

                        </form>
                    </div>
                    <div class='child inline-block-child'>
                        <h4>Reload Ad</h4>
                        <div>
                            <form>
                                <select>
                                    <option value='Ad 1'>Ad 1</option>
                                </select>
                                <button>Load Selected Ad</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Ad Preview</h3>
                        <figure className='figure' style={{maxWidth: '22rem'}}>
                            <img
                                src={imageURL[this.state.img]}
                                className='Ad Image'
                                alt='...'
                                width={300}

                            />
                            <div>
                                <h6>{this.state.headline}</h6>
                            </div>
                        </figure>
                    </div>
                </div>
                <div>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>

            </div>
            </center>
        )
    }
}

export default App;


