import React from 'react';
import { useState } from 'react';


import "antd/dist/antd.css";
import {Input, Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import {Row, Col} from 'antd'



const SearchComponent = (props)=>{

    const [searchvalue, setSearchvalue] = useState();

    const callsearchFunction =()=>{
        props.search(searchvalue);
        setSearchvalue('');
    }
    return (
            <Row className="movie-search" justify="center">
                <Col span={12}>
                    <Input value={searchvalue} onChange={(e)=>(setSearchvalue(e.target.value))}></Input>
                </Col>
                <Col>
                    <Button type="primary" icon={<SearchOutlined />} onClick={callsearchFunction}>Search</Button>
                </Col>
            </Row>
    )
}

export default SearchComponent;