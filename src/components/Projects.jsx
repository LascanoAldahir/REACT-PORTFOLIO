import { PROJECTS } from "../constants"
import {motion} from "framer-motion"

const Projects = () => {
  return (
 // Contenedor principal, incluye un borde inferior y un padding en la parte inferior
 //my.20 agrega margenes verticales grandes
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
        whileInView={{opacity:100, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
        {/* Contenedor para los proyectos */}
        <div>
            {PROJECTS.map((project, index) => (
                //contenedor para cada proyecto individual
                //`flex`: Usa diseño flexible para alinear elementos (imagen e información) */}
                //flex-wrap`: Permite que los elementos se muevan a una nueva línea si no caben */}
                //lg:justify-center`: En pantallas grandes (lg), centra los elementos horizontalmente */}
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
               
                {/* Contenedor para la imagen */}
                {/* `w-full`: Ocupa el ancho completo en pantallas pequeñas */}
            {/* `lg:w-1/4`: En pantallas grandes (lg), ocupa el 25% del ancho */}
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{duration:0, x: -100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/4">
                    <img     
                        src={project.image} 
                        width={150} 
                        height={150}
                        alt={project.title} 
                    />
                </motion.div> 
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{duration:0, x: 100}}
                transition={{duration: 1}}
                
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.tool.map ((tech,index) => (
                        //* `font-medium`: Grosor de fuente medio
                        //* `text-sm`: Tamaño de fuente pequeño 
                        //px-2 py-1`: Padding horizontal (0.5 rem) y vertical (0.25 rem)
                        <span 
                            key={index} 
                            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"> 
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Projects;
