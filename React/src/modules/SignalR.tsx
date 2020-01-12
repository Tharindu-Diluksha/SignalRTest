import React from "react";
import { signalrService } from "./signalr-service";

export class SignalR extends React.Component {
    /**
     *
     */
    constructor(props: Readonly<{}>) {
        super(props);
    }

    componentDidMount(){
        signalrService.connect();
    }


}