import React from 'react';
import styled, { css } from 'styled-components';
import { MdDelete, MdDone } from "react-icons/md";

// 삭제 버튼 스타일
const Remove = styled.div`
    display: none;
    cursor: pointer;
    font-size: 30px;
    color: gray;
    &:hover {
        color: red;
    }
`;

const ItemBody = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    &:hover {
        ${Remove} {
            display: block;
        }
    }
`;

const CircleBox = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid silver;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.checked && css`
        color: silver;
    `}
    &:hover{
        ${Remove} {
            display: block;
        }
    }
    
`;

const Text = styled.div`
    padding-left: 15px;
    width: 45%;
    ${props => props.checked && css`
        color: silver;
    `}
`;

function Item({ children, checked, onToggle, id, onRemove }) {

    const onClick = () => {
        onToggle(id);
    };

    const Delete = () => {
        onRemove(id);
    }
    return (
        <ItemBody>
            <CircleBox checked={checked} onClick={onClick}>
                {checked && <MdDone />}
            </CircleBox>
            <Text checked={checked}> {children} </Text>
            <Remove onClick={Delete}>
                <MdDelete />
            </Remove>
        </ItemBody >
    );
}

export default Item;