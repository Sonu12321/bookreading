"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'


function Header() {
  return (
<header style={headerStyle}>
<motion.div style={leftContainerStyle}
transition={{type:'spring', damping:'18',nass:'0.25'}}
initial={{opacity:0,x:-1000}} animate={{opacity:1,x:0}}
>
    <h1 style={bookheading}>BookReader</h1>
    <motion.input type='text' placeholder='tell me what you want'
    style={inputtype}
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    ></motion.input>
</motion.div>


<motion.div style={rightContainerStyle} 
    transition={{type:'spring',damping:18,mass:0.75}}
    initial={{opacity:0,x:1000}} animate={{opacity:1,x:0}}
    >
        <Link href="/profile" style={avatarLinksstyle}>
            <motion.img src="https://www.movienewsnet.com/wp-content/uploads/2020/12/emmastone2.jpg" alt="avatar" style={avatarStyle} initial={{opacity:0,x:100}} animate={{opacity:1,x:0}}></motion.img>
        </Link>
    </motion.div>
</header>
    )
}

const headerStyle = {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'1rem 1re 1rem 0',
    color:'#fff',    
}

const leftContainerStyle={
    display:'flex',
    alignItems:'center'
}

const bookheading={
    marginRight:'2rem',
    color:'#000'
}

const inputtype={
    padding:"0.7rem 1rem",
    marginLeft:'3.6rem',
    borderRadius:'70px',
    backgroundColor:'rgb(248,234,221)',
    border:'2px solid #000',
    minWidth:'320px',
}

const rightContainerStyle ={
    display:'flex',
    alignItems:'center'
} 
const avatarLinksstyle={
    marginRight:'1rem'
}
const avatarStyle={
    width:"40px",
    height:'40px',
    borderRadius:'50%'
}

export default Header