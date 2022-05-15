import * as React from "react";
import { container, frontendApplicationModule, NoneIconTheme } from "./ioc";

export class Hello extends React.Component {
    render() {
        const nameProvider: any = container.get("nameProvider");
        const iconTheme: any = container.get(NoneIconTheme);
        console.log(frontendApplicationModule);
        console.log(container);
        console.log(nameProvider.getName());
        console.log(nameProvider);
        console.log(iconTheme);
        return <h1>Hello {nameProvider.getName()}</h1>;
    }
}
