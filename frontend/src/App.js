import './App.css';
import { Form } from 'semantic-ui-react'
//import Image from 'react-bootstrap/Image'
// import { Image } from

function App() {
    return(
        <div className="wrapper">
            <h1>Facebook Ad Builder</h1>
            <form>
                <label>
                    <p>Input Headline</p>
                    <input name = "Input Headline" />
                </label>
                <label>
                    <p>Select Image</p>
                    <select>
                        <option value = "Image 1">Image 1</option>
                        <option value = "Image 2">Image 2</option>
                    </select>
                </label>
            </form>

        </div>
    )
}

export default App;


    // https://image.shutterstock.com/image-vector/vector-design-elements-your-company-600w-709133980.jpg