import React, { Component } from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';

export default class Categori extends Component {
    constructor(props){
        super(props);
        this.state={
            categories:[]
        };
    }
    componentDidMount(){
        this.getCategories();
    }
    getCategories=()=>{
        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => this.setState({categories:data}))
        .catch(err =>{
            console.log("error oluştu.")
        })
    }
    render() {
        return (
            <div>
                <h4>{this.props.info.title}</h4>
                <ListGroup>
                    {
                       this.state.categories.map(categori =>(
                        
                        <ListGroupItem active={categori.categoryName===this.props.currentCategori?true:false}
                        onClick={()=>this.props.changeCategori(categori)} key={categori.id}>{categori.categoryName}</ListGroupItem>
                       ))
                    } 
                    
                </ListGroup>
                <h4>{this.props.currentCategori}</h4>
            </div>
        )
    }
}
