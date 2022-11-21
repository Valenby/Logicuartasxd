import { useRef, useState } from "react"
import './nav.css';

//componente navbar
export const Nav = () => {

    const [menu, setMenu] = useState(false);
    const refNav = useRef();
    const refBtnToggle = useRef();
    const refIcon = useRef();
    const refMenu = useRef();
    const refFacebook = useRef();


    // funcion del boton para ocultar items
    const handleToggle = ()=>{
        if (menu){ 
            setMenu(false)
                refMenu.current.style.top = '-100%' //con esto baja y sube top.
                refIcon.current.classList.replace('bi-x','bi-list')  //asi accedemos al elemento
        }else{
            setMenu(true)
            const calcular = refNav.current.offsetTop + refNav.current.clientHeight -1;
            refMenu.current.style.top = calcular + 'px'             //calcular altura del nav
            refIcon.current.classList.replace('bi-list','bi-x')
        }
    }



  return (
    <>
        <div className="navContainer">
            <nav ref={refNav} className="nav">
                <button onClick={handleToggle} ref={refBtnToggle} className="btnToggle"> 
                    <i ref={refIcon} className="bi bi-list fs-1"></i>
                </button>

                <ul ref={refMenu} className="ul">
                <li><img className="logo" width={'120px'} src="https://www.logicuartas.com/wp-content/themes/logicuartas/img/logo-logicuartas.png" alt="logo" /></li>
                    <li><a href="">Quienes somos   </a></li>
                    <li><a href="">Nuestro servicio</a></li>
                    <li><a href="">Rutas cobertura </a></li>
                    <li><a href="">Contactanos     </a></li>
                    <li><a href="">Consulta envio  </a></li>
                    <li className="icon"><a href="https://www.facebook.com/logicuartas"><li className="bi bi-facebook"></li></a></li>
                    <li className="icon"><a href="https://www.instagram.com/logi_cuartas/"><li className="bi bi-instagram"></li></a></li>
                    <li className="icon"><a href="https://www.tiktok.com/@logicuartas_oficial/now/invite?_t=8XY97xbqv6U&_r=1"><li className="bi bi-tiktok"></li></a></li>
                </ul>
            </nav>
        </div>
    </>
    
  )
}
