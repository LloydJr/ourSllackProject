import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'Channel',
        path: '/channel',
        icon: <AiIcons.AiFillHome />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
            title: 'channelA',
            path: 'overview/users',
            icon: <IoIcons.IoIosPaper />
            },
            {
            title: 'channelB',
            path: 'overview/revenue',
            icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: 'Direct Message',
        path: '/direct_message',
        icon: <AiIcons.AiFillHome />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
            title: 'Direct MessageA',
            path: 'overview/direct_message_a',
            icon: <IoIcons.IoIosPaper />
            },
            {
            title: 'Direct MessageB',
            path: 'overview/direct_message_b',
            icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: 'About Us',
        path: '/about_us',
        icon: <IoIcons.IoIosPaperPlane />
    }

]

