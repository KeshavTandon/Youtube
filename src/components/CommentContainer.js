import React from 'react'
import { ICON_URL } from './constants';


const CommentData=[
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[
            {
                name:'Keshav Tandon',
                text:"Amazing",
                replies:[],
            },
        ],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[
            {
                name:'Keshav Tandon',
                text:"Amazing",
                replies:[
                    {
                        name:'Keshav Tandon',
                        text:"Amazing",
                        replies:[
                            {
                                name:'Keshav Tandon',
                                text:"Amazing",
                                replies:[
                                    {
                                        name:'Keshav Tandon',
                                        text:"Amazing",
                                        replies:[
                                            {
                                                name:'Keshav Tandon',
                                                text:"Amazing",
                                                replies:[
                                                    {
                                                        name:'Keshav Tandon',
                                                        text:"Amazing",
                                                        replies:[],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[
            {
                name:'Keshav Tandon',
                text:"Amazing",
                replies:[
                    {
                        name:'Keshav Tandon',
                        text:"Amazing",
                        replies:[],
                    },
                ],
            },
        ],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[
            {
                name:'Keshav Tandon',
                text:"Amazing",
                replies:[
                    {
                        name:'Keshav Tandon',
                        text:"Amazing",
                        replies:[
                            {
                                name:'Keshav Tandon',
                                text:"Amazing",
                                replies:[
                                    {
                                        name:'Keshav Tandon',
                                        text:"Amazing",
                                        replies:[
                                            {
                                                name:'Keshav Tandon',
                                                text:"Amazing",
                                                replies:[],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:'Keshav Tandon',
        text:"Amazing",
        replies:[],
    },
]
const Comment=({data})=>{
    const {name,text}=data;
  return <div className='flex p-2 shadow-sm bg-gray-200 rounded-lg my-2'>
    <img className="w-8 h-8"alt="user-icon" src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png"/>
    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
  </div>
}

const CommentList=({comments})=>{
  return comments.map((comment,index) => (
  <div>
  <Comment key={index} data={comment}/>
  <div className='pl-5 border-l-black ml-5'>
    <CommentList comments={comment.replies}/>
  </div>
  </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentList comments={CommentData}/>
    </div>
  )
}

export default CommentContainer;