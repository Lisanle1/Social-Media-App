import React from 'react';
import Avatar from '../Avatar';
import moment from 'moment'
import { imageShow, videoShow } from '../../utils/mediaShow'; 

const MsgDisplay = ({user, msg, theme}) => {
    return (
      <>
        <div className="chat_title">
          <Avatar src={user.avatar} size="small-avatar" />&nbsp;
          <span style={{fontSize:"15px"}}>{user.username}</span>
        </div>
        {msg.text && (
          <div
            className="chat_text mt-2"
            style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          >
            {msg.text}
          </div>
        )}

        {msg.media &&
          msg.media.map((item, index) => (
            <div key={index} style={{maxWidth: '380px', maxHeight: '380px'}}>
              {item.url.match(/video/i)
                ? videoShow(item.url, theme)
                : imageShow(item.url, theme)}
            </div>
          ))}

        <div className="chat_time">
          {moment(msg.createdAt).fromNow()}
        </div>
      </>
    );
}

export default MsgDisplay
