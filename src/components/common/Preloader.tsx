import preloader from "../Users/assets/img/preloader.svg";
import React from "react";

type PreloaderPropsType = {
    alt: string
}

export const Preloader = (props: PreloaderPropsType) => <img src={preloader} alt={props.alt}/>