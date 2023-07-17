import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import group from '../Assets/group.jpg';
import woman from '../Assets/woman.jpg';
const About=()=>{


return(

<div className="about" > 

<div className="wrapper">

<div className="content">
<h3>Who We Are? </h3>
    <p>
         Sed ornare lectus nibh. Quisque quis feugiat velit. Sed feugiat fringilla gravida.
          Aenean placerat maximus purus eget volutpat. Proin fringilla sollicitudin accumsan.
           Donec ex urna, varius id viverra et, porta nec urna. Maecenas vulputate ante a 
           lacinia ullamcorper. Praesent interdum pulvinar bibendum. Quisque tortor felis, 
           rutrum sed hendrerit quis, congue eu nulla. Aenean eget lorem vestibulum, 
           ullamcorper lectus mollis, fringilla metus. Maecenas congue nisl quis vulputate
            maximus. Morbi lacinia ipsum vestibulum nisl semper facilisis. 
            Vivamus interdum dolor a lorem maximus suscipit.</p>
</div>

<div className="pic"><img src={group} alt="senior image" /></div>
</div>

<div className="wrapper">
<div className="pic"><img src={woman} alt="senior image" /></div>


<div className="content">
<h3>Why Gentle Guardians? </h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat,
         tellus non pellentesque feugiat, lacus ipsum maximus dolor, 
         sed bibendum mi odio sit amet mauris. Suspendisse id nisl diam. 
         Sed ornare lectus nibh. Quisque quis feugiat velit. Sed feugiat fringilla gravida.
          Aenean placerat maximus purus eget volutpat. Proin fringilla sollicitudin accumsan.
           Donec ex urna, varius id viverra et, porta nec urna. Maecenas vulputate ante a 
           lacinia ullamcorper. </p>

</div>
</div>

</div>




)


}
export default About;
