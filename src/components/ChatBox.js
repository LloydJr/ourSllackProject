import { Button } from 'bootstrap';
import React from 'react'
import styled from 'styled-components';
import axios from 'axios'

function ChatBox({channelName, channelid}) {
    const inputRef = useRef(null);




    const sendMessage = e => {
        e.preventDefault(); // prevents refresh

        if(channelid) {
            return false;
        }
        
    };


    return (
        <ChatInputContainer>
            <form >
                <input ref={inputRef} placeholder={'Message #ROOM'}></input>
                <Button hidden type = "submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
   
    )

}

export default ChatBox;

const ChatInputContainer = styled.div`
    border-readius : 20px
    
    >form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        lwidth: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20%
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;