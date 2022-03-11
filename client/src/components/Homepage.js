import { Component } from "react";
import MyHeader from "./Header";
import ClientsComponent from "./ClientsComponent";
class homepage extends Component{
    render(){
        return(
            <div>
            <MyHeader></MyHeader>
            <ClientsComponent></ClientsComponent>
            </div>
        );
    }
}

export default homepage;