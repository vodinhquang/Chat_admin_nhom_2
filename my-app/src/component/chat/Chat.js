import React from 'react'
import "./Chat.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton,Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Chat() {
    return (
        <div className="chat">
            <div className ="chat_head">
                <IconButton>
                    <ArrowBackIosIcon />
                </IconButton>
                <h2>Chat</h2>
            </div>
            <div className="chat_middle">
                <div className="chat_infor">
                    <div className="infor_top">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd2b3aeb-ef03-41e8-9aaf-e0ac8ec839fb/ddd5gww-7edbc4fb-1173-4d78-a873-2a191e16cc32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMmIzYWViLWVmMDMtNDFlOC05YWFmLWUwYWM4ZWM4MzlmYlwvZGRkNWd3dy03ZWRiYzRmYi0xMTczLTRkNzgtYTg3My0yYTE5MWUxNmNjMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tje5zEQLeak0XPgalmJhct7i7AUgqCJ9Iviq5FrnKtM" alt="avatar" />
                        <div className="icon"></div>
                    </div>
                    <h4>Jontray Arnold</h4>
                </div>
                <div className="chat_status">
                    <h5>available</h5>
                    <ExpandMoreIcon />
                </div>
                <div className="chat_search">
                    <input type="text"  placeholder="Search"></input>
                    <SearchIcon />
                </div>
                <div className="last_chat">
                    <h5>Last chats</h5>
                    <div className="last_chat_right">
                        <div className="option">
                            <AddIcon />
                        </div>
                        < MoreHorizIcon />
                    </div>
                    
                </div>
            </div>
            <div className="chat_content">
                    <div className="chat_content_left" >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd2b3aeb-ef03-41e8-9aaf-e0ac8ec839fb/ddd5gww-7edbc4fb-1173-4d78-a873-2a191e16cc32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMmIzYWViLWVmMDMtNDFlOC05YWFmLWUwYWM4ZWM4MzlmYlwvZGRkNWd3dy03ZWRiYzRmYi0xMTczLTRkNzgtYTg3My0yYTE5MWUxNmNjMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tje5zEQLeak0XPgalmJhct7i7AUgqCJ9Iviq5FrnKtM" alt="avatar" />
                    </div>
                    <div className="chat_content_center">
                        <h4>Real estate deals</h4>
                        <h5>Typing...</h5>
                    </div>
                    <div className="chat_content_right">
                        <h5>11:15</h5>
                    </div>
            </div>
            
            <div className="chat_content">
                    <div className="chat_content_left " >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd2b3aeb-ef03-41e8-9aaf-e0ac8ec839fb/ddd5gww-7edbc4fb-1173-4d78-a873-2a191e16cc32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMmIzYWViLWVmMDMtNDFlOC05YWFmLWUwYWM4ZWM4MzlmYlwvZGRkNWd3dy03ZWRiYzRmYi0xMTczLTRkNzgtYTg3My0yYTE5MWUxNmNjMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tje5zEQLeak0XPgalmJhct7i7AUgqCJ9Iviq5FrnKtM" alt="avatar" />
                    </div>
                    <div className="chat_content_center">
                        <h4>Kate Johnson</h4>
                        <h5>I will send the document...</h5>  
                    </div>
                    <div className="chat_content_right">
                        <h5>11:15</h5>
                    </div>
            </div>

            <div className="chat_content">
                    <div className="chat_content_left " >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd2b3aeb-ef03-41e8-9aaf-e0ac8ec839fb/ddd5gww-7edbc4fb-1173-4d78-a873-2a191e16cc32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMmIzYWViLWVmMDMtNDFlOC05YWFmLWUwYWM4ZWM4MzlmYlwvZGRkNWd3dy03ZWRiYzRmYi0xMTczLTRkNzgtYTg3My0yYTE5MWUxNmNjMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tje5zEQLeak0XPgalmJhct7i7AUgqCJ9Iviq5FrnKtM" alt="avatar" />
                    </div>
                    <div className="chat_content_center">
                        <h4>Tomaro Shevchenko</h4>
                        <h5>are you going to business</h5>  
                    </div>
                    <div className="chat_content_right">
                        <h5>11:15</h5>
                    </div>
            </div>

            <div className="chat_content">
                    <div className="chat_content_left " >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd2b3aeb-ef03-41e8-9aaf-e0ac8ec839fb/ddd5gww-7edbc4fb-1173-4d78-a873-2a191e16cc32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMmIzYWViLWVmMDMtNDFlOC05YWFmLWUwYWM4ZWM4MzlmYlwvZGRkNWd3dy03ZWRiYzRmYi0xMTczLTRkNzgtYTg3My0yYTE5MWUxNmNjMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tje5zEQLeak0XPgalmJhct7i7AUgqCJ9Iviq5FrnKtM" alt="avatar" />
                    </div>
                    <div className="chat_content_center">
                        <h4>Kate Johnson</h4>
                        <h5>I will send the document...</h5>  
                    </div>
                    <div className="chat_content_right">
                        <h5>11:15</h5>
                    </div>
            </div>

            <div className="chat_content">
                    <div className="chat_content_left " >
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd2b3aeb-ef03-41e8-9aaf-e0ac8ec839fb/ddd5gww-7edbc4fb-1173-4d78-a873-2a191e16cc32.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMmIzYWViLWVmMDMtNDFlOC05YWFmLWUwYWM4ZWM4MzlmYlwvZGRkNWd3dy03ZWRiYzRmYi0xMTczLTRkNzgtYTg3My0yYTE5MWUxNmNjMzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tje5zEQLeak0XPgalmJhct7i7AUgqCJ9Iviq5FrnKtM" alt="avatar" />
                    </div>
                    <div className="chat_content_center">
                        <h4>Kate Johnson</h4>
                        <h5>I will send the document...</h5>  
                    </div>
                    <div className="chat_content_right">
                        <h5>11:15</h5>
                    </div>
            </div>
        </div>
    )
}

export default Chat
