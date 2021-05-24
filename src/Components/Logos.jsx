
import LogoFps2021 from "../img/LOGO_FPS_2020.png";
import LogoCBA from "../img/logo-CBA.png";

export default function PreFooter() {
    return (
        <div id="logos">
            <div className="container">
                <div className="row">
                    {/* <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="logo-item">
                            <a href="https://www.isciii.es/Paginas/Inicio.aspx" target="_blank"><span><img alt="iscii logo" src="img/logos.png"></span></a>
                        </div>
                    </div> */}
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="logo-item">
                            <a href="https://www.sspa.juntadeandalucia.es/fundacionprogresoysalud/" target="_blank" rel="noreferrer"><span><img alt="fps logo" src={LogoFps2021} /></span></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="logo-item">
                            <a href="http://www.clinbioinfosspa.es/" target="_blank" rel="noreferrer"><span><img alt="cba logo" src={LogoCBA} /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
