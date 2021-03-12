import React, {FC, ReactNode, ReactNodeArray} from 'react';

interface IProps {
    children?: ReactNode | ReactNodeArray;
}

const Layout: FC<IProps> = ({children}) => {
    return <div>{children}</div>;
};

export default Layout;
