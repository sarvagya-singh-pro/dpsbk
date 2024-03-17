"use client";
import styles from './css/home.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import EDUSVG from '../../public/education.svg'
import Wave from 'react-wavify'
import '@mantine/core/styles.css';
import Image from 'next/image';
import { CiMenuFries } from "react-icons/ci";
import { Text, Title, MantineProvider, Select, Button, Drawer, Group } from '@mantine/core';
import { useState,useEffect } from 'react';
const page = () => {
    const [ClassSelect,SetClass]=useState(null)
    const[Sub,SetSub]=useState(null)
    const[draw,SetDraw]=useState(false)
    const [Teachers,SetTeachers]=useState(null)
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
    })
    const data={
        "10":{"Physics":["Madan Mohan","Rajesh Kr. Bhatt","Ravi Prakash Dwivedi"],"Chemisty":["Sarika"," Sulekha Kumari"],"Biology":["Rita Khawas","Shweta Singh"],"Geography":["Nimisha","Atreyi"],"History":["Ranjana Ojha","Rachna Ojha"],"Political Science":["Ranjana Ojha","Rachna Ojha"],"Economics":["Shusmita","Varij Kharij"],"English":["Anand Kumar","Pabitra Banerjee"],"Hindi":["Kalawati"],"Sanskrit":["Mithilesh Kumar Dubey"],"Mathematics":["Tripti Dutta","Amar Dutta","G Maryapan"],"AI":["Shailendar Gupta (SG)","Sanjib Goswami","Mukesh "]}
    }
    
    return (
        <MantineProvider>
        <div>
        <Drawer position='right' opened={draw} onClose={()=>{SetDraw(false)}} >
        <Group >
        <Button w="100%" variant='default'>News</Button>
        <Button w="100%" variant='default'>Question Paper</Button>
        <Button w="100%" variant='default'>Teacher</Button>
        </Group>
      </Drawer>
            <div className={styles.landing}>
                
                <nav className={styles.navbar}>
                    <li>Notes</li>
                    <li>Question Paper</li>
                    <li>Teachers</li>
                </nav>
                <CiMenuFries onClick={()=>{SetDraw(true)}} className={styles.menu} style={{marginTop:'30px',position:'absolute',right:'10%'}} size={"2em"} />
       
    <Title order={1} className={styles.intro}>DPSBK</Title>
    <Title order={5} className={styles.introText}>dpsbk.live is a student-run website that shares notes, news and assignments, to students of dps bokaro. we have the biggest, year wise directory to all the notes, in a readable format.</Title>
    
        <div className={styles.imageContainer}>
            <div className={styles.im1}>

            </div>
            <div className={styles.im2}>

            </div>
            <div className={styles.im3}>

            </div>
    
        </div>
        <Wave fill='#4ca15d'
        paused={false}
        className={styles.wave}
        options={{
          height: 5,
          amplitude: 10,
          speed: 0.2,
          points: 3
        }}
  />
            </div>
            <div className={styles.notesPage}>
                <h1 className={styles.NotesHeading}>Notes</h1>
      <div className={styles.SelectorDiv}>
           
                <Select
      value={ClassSelect}
      onChange={(e)=>{SetClass(e);SetSub(null)}}
      label="CLASS "
      allowDeselect={false}
      placeholder="Pick value"
      data={["6","7","8","9","10","11","12"].reverse()}
    />
             <Select
       searchable
       disabled={ClassSelect===null}
      label="SUBJECT"
      nothingFoundMessage={true}
        value={Sub}
        onChange={(e)=>{SetSub(e);SetTeachers(null)}}
      placeholder="Pick value"
      data={data[ClassSelect]?Object.keys(data[ClassSelect]):null}
    />
             <Select
        disabled={Sub===null}
      label="TEACHER"
      placeholder="Pick value"
      value={Teachers}
      onChange={(e)=>{SetTeachers(e)}}
      searchable
      data={data[ClassSelect]&&data[ClassSelect][Sub]?data[ClassSelect][Sub]:null}
    />
    <Button disabled={Teachers==null} varient={"outline"} color='green'>GET NOTES!</Button>
     
    
    </div>
    <Image  priority className={styles.edu} style={{width:'30%',position:'absolute',height:'60vh'}} src={EDUSVG}></Image>
           </div> </div><div className={styles.ourTeam}>
          <h1 className={styles.OurTeamHeader}>Our Team</h1>
          <div className={styles.cards}>
            <div className={styles.sidharat}>
               <h1>Sarthak Sidhant</h1>
               <h2>Fouder & MD</h2>
            </div>
            <div className={styles.sidharat}>
               <h1>Krish</h1>
               <h2>Founder</h2>
            </div>
            <div className={styles.sidharat}>
               <h1>Sarvagya Singh</h1>
               <h2>Head Of Development</h2>
            </div>
          </div>
          
         </div>
      <div
      className={styles.footerDPS}
      >
        <h1>&#169;2024 All Rights Reserved</h1>
      </div>
         
         

         </MantineProvider>

    );
}

export default page;