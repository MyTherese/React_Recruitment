

import React from 'react';
import BigImage from './BigImage'
import Social from './Social';
// import AboutUs from './AboutUs';

import StickyHeader from './header/StickyHeader';
import Departments from './Departments';
import '../App.css';



class Home extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        this.state = {
            // AboutUs: AboutUsData,
        }
        //     this.handleChange = this.handleChange.bind(this)

    }



    // handleDropping = (files) => {
    //     let fileList = this.state.files
    //     for (var i = 0; i < files.length; i++) {
    //         if (!files[i].name) return
    //         fileList.push(files[i].name)
    //     }
    //     this.setState({ files: fileList })
    // }

    render() {
        return (

            <div>
                <StickyHeader />
                <BigImage />
                <Social />
                <Departments />
                {/* <AboutUs /> */}

                {/* <DragBox handleDropping={this.handleDropping}>
                    <div>{this.state.listOfFiles}</div>
                </DragBox>  */}

                

            </div>
        )
    }

}

export default Home;