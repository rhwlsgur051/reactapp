import React, { useState, useEffect } from 'react';
import MemoService from './service/MemoService';

interface IAppProps {
    // movePage: Function;
}

const MemoComponent: React.FunctionComponent<IAppProps> = (props) => {

    const [memoList, setMemoList] = useState({});

    const getMemoList = async () => {
        let a = setMemoList(await MemoService.getList());
        console.log(a);
    }

    useEffect(() => {
        getMemoList();
    }, [])

    return (
        <div className="container">
            Memo
            {/* {memoList} */}
        </div>
    );
}

export default MemoComponent;