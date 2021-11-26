import {FC} from "react";
import {Header, Main, Footer} from '../../layout'

type Props={
    id?: string,
    hidenHeader?: boolean,
    hidenFotter?: boolean,
};

const Layout: FC <Props> = ({children, hidenHeader, hidenFotter})=>{
    return (
        <>
            {!hidenHeader && <Header/ >}
            <Main>
                { children }
            </Main>
        
            {!hidenFotter && <Footer />}
        </>
    );
};

export {Layout}