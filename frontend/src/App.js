import './App.css';

import { Form } from "react-bootstrap"

const imageURL = [
    "https://image.shutterstock.com/image-vector/vector-design-elements-your-company-600w-709133980.jpg",
    "https://image.shutterstock.com/image-photo/11-april-2018-white-tesla-600w-1074713426.jpg",
    "https://image.shutterstock.com/image-photo/hong-kong-may-20-2019-600w-1417919888.jpg",
    "https://image.shutterstock.com/image-photo/hong-kong-china-circa-january-600w-1643565031.jpg"
]


function App() {
    return(
        <div className="wrapper">
            <h1>Facebook Ad Builder</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Headline</Form.Label>
                    <Form.Control type="input" placeholder="Enter Ad Headline"/>
                </Form.Group>
                <h2></h2>
                <Form.Label>Select Image</Form.Label>
                <Form.Select aria-label="Image Select">
                    <option value = "Image 1">Image 1</option>
                    <option value = "Image 2">Image 2</option>
                    <option value = "Image 3">Image 3</option>
                    <option value = "Image 4">Image 4</option>
                </Form.Select>

            </Form>

            <div>
                <div>
                    <h3>Ad Preview</h3>
                    <figure className='figure' style={{ maxWidth: '22rem' }}>
                        <img
                            src={ imageURL[2]}
                            className='Ad Image'
                            alt='...'
                        />
                        <caption className='figure-caption'>Advertisement Headline.</caption>
                    </figure>
                </div>
            </div>
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>


        </div>
    )
}

export default App;


    // https://image.shutterstock.com/image-vector/vector-design-elements-your-company-600w-709133980.jpg