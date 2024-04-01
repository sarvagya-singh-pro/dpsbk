"use client";
import styles from './css/home.module.css'
import ClassImageMeme from '../../public/YourClass.png'
import YourClass from '../../public/subject.png'
import Wave from 'react-wavify'
import { Poppins } from 'next/font/google';
import '@mantine/core/styles.css';
import Image from 'next/image';
import { CiMenuFries } from "react-icons/ci";
import { Text, Title, MantineProvider, Select, Button, Drawer, Group, Loader, Center, Input } from '@mantine/core';
import { useState,useEffect } from 'react';
const poppins=Poppins({subsets: ['latin'],weight:['200']})
   
const page = () => {
 
 const [contri,SetContri]=useState({})
 useEffect(()=>{
  async function a(){
   const data=await (await fetch('/api/contri')).json()
    SetContri(data["message"])
    SetLoading(true)
  }a()
 },[])
   const [ClassSelect,SetClass]=useState(null)
    const[Sub,SetSub]=useState(null)
    const[draw,SetDraw]=useState(false)
    const [Teachers,SetTeachers]=useState(null)
    const [loading,SetLoading]=useState(false)
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
    const data = {
      "10": {
          'Physics': {'Madan Mohan Prasad Sinha (MN)': 'https://drive.google.com/drive/folders/1cBk3HWwngbr5i1Su2BRuRvtMH3YsEkJW?usp=drive_link'},
          'Biology': {'Rita Khawas (RK)': 'https://drive.google.com/drive/folders/1EwQzdEmUhqYSpGXRR8B0uV1sGTTa5W5r?usp=drive_link'},
          'Chemistry': {'Sarika (SA)': 'https://drive.google.com/drive/folders/1pU1aUIBlQohAWYE92OmUVSbFMVbzIC95?usp=drive_link'},
          'Geography': {'Nimisha': 'https://drive.google.com/drive/folders/1IqgNvEZwIEL32BSz8YudIRaA-hJ50F11?usp=drive_link', 'Atreyi': 'https://drive.google.com/drive/folders/1bY4s3zhXuyXb8_UCcsjWFS7l5ox0IR0a?usp=drive_link'},
          'History': {'Ranjana jha': 'https://drive.google.com/drive/folders/1qQht-IBFZB72-Gcm0Yy5UuNmrBUfFaQX?usp=drive_link', 'Ranjana': 'https://drive.google.com/drive/folders/1RGvfKQ8SFMlWirYxul2hHErHTBrbkwKs?usp=sharing', 'Rachna Ojha': 'https://drive.google.com/drive/folders/139dZtuhakJ-_FJak3GxI13KSw7uDxhXl?usp=drive_link'},
          'SPL': {'Ranjana jha': 'https://drive.google.com/drive/folders/1LCUELFI-OxwSS7Vjb_ZwbBRm6FbjQhp5?usp=drive_link', 'Ranjana': 'https://drive.google.com/drive/folders/1RGvfKQ8SFMlWirYxul2hHErHTBrbkwKs?usp=sharing', 'Rachna Ojha': 'https://drive.google.com/drive/folders/1OvrPjAtmhEfFQl45vm9X6e4v_BESqzIv?usp=drive_link'},
          'Economics': {'Varij Khrij': 'https://drive.google.com/drive/folders/1tmBhY0MluDEp_UtjCCsrBVEDzhoq05SP?usp=drive_link', 'Shusmita': 'https://drive.google.com/drive/folders/1UdOQSWrK6_oTcRWPPruIt0BDp8B1ZWrX?usp=drive_link'},
          'English': {'Anand Kumar': 'https://drive.google.com/drive/folders/1x14pkgMmM5eFJlOYweap8UbwJf6_Sdp1?usp=drive_link'},
          'Hindi': {'p. Kalawati': 'https://drive.google.com/drive/folders/1meNO20b8sBTffjLwSpWqJ6nY6JzjezGN?usp=drive_link'},
          'Sanskrit': {'Mithilesh Kumar Dubey(MI)': 'https://drive.google.com/drive/folders/1tXY2AGpaV7koR50okXYRMUQnQm9tgNOY?usp=drive_link'},
          'Maths': {'Tripti Dutta': 'https://drive.google.com/drive/folders/1MUTZ1aG1_qi9yTbgRm5IgQelO_oClFQo?usp=drive_link'}
      }
  }
    
    
    return (
        <MantineProvider>
          {loading?
          <>
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
                    <li>Teachers</li>
                    <li>Products</li>                    
                    <li>Community</li>

                </nav>
                <CiMenuFries color='white' onClick={()=>{SetDraw(true)}} className={styles.menu} style={{marginTop:'30px',position:'absolute',right:'10%'}} size={"2em"} />
       
    <Title order={1} className={[poppins.intro,styles.intro]}>DPSBK<span className={styles.liveSpan} >.live</span></Title>
    <Text className={styles.introText}>Dpsbk.live is a student-run website that shares notes, news and assignments, to students of dps bokaro. we have the biggest, year wise directory to all the notes, in a readable format.<br></br>
    <button className={styles.NotesButton}>Notes</button>
    </Text>
    
    
        <div className={styles.imageContainer}>
            <div className={styles.im1}>

            </div>
            <div className={styles.im2}>

            </div>
            <div className={styles.im3}>

            </div>
    
        </div>
        <Wave mask="url(#mask)" fill="#1fd655" className={styles.wave}>
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="black" />
      <stop offset="0.5" stopColor="white" />
      
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave>
            </div>
            <div className={styles.notesPage}>
              <div className={styles.blurrEffect}></div>
                <h1 className={styles.NotesHeading}>Notes</h1>
                <div className={styles.ImageDivNotes}>
                  {ClassSelect===null?
                  <Image h="100%" w="100%" src={ClassImageMeme}></Image>:
                  <Image h="100%" w="100%" src={YourClass}></Image>}
                </div>
      <div className={styles.SelectorDiv}>
           
                <Select
      value={ClassSelect}
      onChange={(e)=>{SetClass(e);SetSub(null)}}
      label="CLASS "
      allowDeselect={false}
      placeholder="Pick value"
      w={"80%"}
      data={["6","7","8","9","10","11","12"].reverse()}
    />
             {ClassSelect!=null?<Select
       searchable
      label="SUBJECT"
      nothingFoundMessage={true}
        value={Sub}
        w={"80%"}
        onChange={(e)=>{SetSub(e);SetTeachers(null)}}
      placeholder="Pick value"
      data={data[ClassSelect]?Object.keys(data[ClassSelect]):null}
    />:<div></div>}
             {Sub!=null?<Select
      
      label="TEACHER"
      placeholder="Pick value"
      w={"80%"}
      value={Teachers}
      onChange={(e)=>{SetTeachers(e)}}
      searchable

      data={data[ClassSelect]&&data[ClassSelect][Sub]?Object.keys(data[ClassSelect][Sub]):null}
    />:<div></div>}
    <Button disabled={Teachers==null} onClick={()=>{window.open(data[ClassSelect][Sub][Teachers], '_blank').focus();}} varient={"outline"} color='green'>GET NOTES!</Button>
     
   
    </div>
 
           </div> </div><div className={styles.ourTeam}>
          <h1 className={styles.OurTeamHeader}>Leader Bord</h1>
       
          <div className={styles.cards}>
             {
           Object.keys(contri).map((el)=>{
               return(
                <div className={styles.sidharat}>
                 <h1>{el}</h1>
                 <h2>Posts: {contri[el]}</h2>
                 </div>
                  )
              })
           }
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
         <div className={styles.Teacher}>
           <Text>Teacher</Text>
           <Input placeholder='Search Name'></Input>


         </div>
         <div className={styles.products}>
         <Center> <Title pt="lg" fw={"lighter"} order={1} c="white">Products</Title></Center>
            <div className={styles.CardList}>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
            </div>
         </div>
         
      <div
      className={styles.footerDPS}
      >
        <h1>&#169;2024 All Rights Reserved</h1>
      </div>
         
      </>:<div style={{width:'100vw',height:'100vh',background:'black',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Loader size={"lg"} mb={"md"} color='green'></Loader>
        <Text style={{color:'#eee'}}>A product of Sarthak Hyperspace</Text>
        </div>
        </div>}

         </MantineProvider>

    );
}

export default page;