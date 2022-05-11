import './App.css';
import React, { Component } from 'react';

import { Form } from "react-bootstrap"

import axios from "axios"



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
            img: 0,
            adList: [],
            ad: 0,
        }

        this.handleImgChange = this.handleImgChange.bind(this)

        this.handleTextChange = this.handleTextChange.bind(this)

        this.handleLoadAd = this.handleLoadAd.bind(this)

        this.handleSave = this.handleSave.bind(this)
    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        axios
            .get("/api/adBuilder/")
            .then((res) => this.setState({adList: res.data}))
            .catch((err) => console.log(err))
    }

    handleTextChange(event) {
        this.setState({headline: event.target.value})
    }

    handleImgChange(event) {
        this.setState({img: event.target.value})
    }

    handleSave() {
        axios
            .post("/api/adBuilder/", {
                headline: this.state.headline,
                image: this.state.img
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    //////// Not working
    handleLoadAd (event) {

        this.setState({headline: event.target.value.headline})
        this.setState({img: event.target.value.image})
        this.setState({ad: event.target.value})
    }

    render() {
        return (

            <div className="container">
                <h1>Facebook Ad Builder</h1>
                <div className="row">
                    <div className="col">
                        <h4>Build New Ad</h4>
                        <form>
                            <Form.Group>
                                <Form.Label>Headline: </Form.Label>
                                <input type="text"
                                       value={this.state.headline}
                                       onChange={this.handleTextChange}/>
                            </Form.Group>

                            <div className={"input-group mb-3"}>
                                <div className={"input-group-prepend"}>
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Select Image: </label>
                                </div>
                                <select class={"custom-select"}
                                        id={"inputGroupSelect01"}
                                        value={this.state.img}
                                        onChange={this.handleImgChange}>
                                    <option selected>Choose...</option>
                                    <option value={1}>Image 1</option>
                                    <option value={2}>Image 2</option>
                                    <option value={3}>Image 3</option>
                                    <option value={4}>Image 4</option>
                                </select>
                            </div>

                        </form>
                    </div>

                    <div className="col">

                        <h4>Reload Ad</h4>
                        <div>
                            <form>
                                <select value={this.state.ad} onChange= {this.handleLoadAd}>
                                    <option selected>Choose...</option>
                                    {this.state.adList.map(ad => {
                                        return (
                                            <option value={ad}>{ad.headline}</option>

                                        );
                                    })}

                                </select>
                                <button>Load Selected Ad</button>
                            </form>
                        </div>


                    </div>

                    <div className="col">

                        <h4>Ad Preview</h4>
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
                        <div>
                            <button type="button"
                                    class="btn btn-primary"
                                    onClick={this.handleSave}>Save</button>
                            <button type="button" class="btn btn-secondary">Cancel</button>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default App;


