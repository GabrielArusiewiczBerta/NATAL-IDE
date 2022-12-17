import styles from './Siga.module.css';

import Foto1 from './Foto1.png';
import Foto2 from './Foto2.png';
import Foto3 from './Foto3.png';

function Siga (){

    return(

        /*<div className={styles.container}>
            <div className={styles.Fundo}></div>
            <div className={styles.Escrita}>
                Siga-nos no Instagram
            </div>
            <img className={styles.Fotos} src={Foto1}></img>
            <img className={styles.Fotos} src={Foto2} hspace="18"></img>
            <img className={styles.Fotos} src={Foto3}></img>
            <br></br>
            <div className={styles.CaixaAbaixo}>
                <div className={styles.EscritaAbaixo}>
                    <b>DecorHouse</b> a DecorHouse já está em clima de copa do mundo
                </div>
            </div>
            <div className={styles.CaixaAbaixo}>
                <div className={styles.EscritaAbaixo}>
                    <b>DecorHouse</b> já está pensando em como vai decorar a casa para o Natal?
                </div>
            </div>
            <div className={styles.CaixaAbaixo}>
                <div className={styles.EscritaAbaixo}>
                    <b>DecorHouse</b> visite nossas lojas para adquirir sua decoração de fim de ano
                </div>
            </div>       
           
            
        </div>*/

        <div className={styles.container}>
            <div className={styles.Fundo}></div>

            <div className={styles.Escrita}>
                Siga-nos no Instagram
            </div>

            <div className={styles.trio}>
                <div className={styles.thumbs}>
                    <img id={styles.foto1} className={styles.Fotos} src={Foto1}></img>
                    <div id={styles.caixa1} className={styles.CaixaAbaixo}><p className={styles.EscritaAbaixo}><b>DecorHouse</b> a DecorHouse já está em clima de copa do mundo</p></div>
                </div>

                <div className={styles.thumbs}>
                    <img id={styles.foto2} className={styles.Fotos} src={Foto2}></img>
                    <div id={styles.caixa2} className={styles.CaixaAbaixo}><p className={styles.EscritaAbaixo}><b>DecorHouse</b> já está pensando em como vai decorar a casa para o Natal?</p></div>
                </div>

                <div className={styles.thumbs}>
                    <img id={styles.foto3} className={styles.Fotos} src={Foto3}></img>
                    <div id={styles.caixa3} className={styles.CaixaAbaixo}><p className={styles.EscritaAbaixo}><b>DecorHouse</b> visite nossas lojas para adquirir sua decoração de fim de ano</p></div>
                </div>
            </div>

            <br></br>
        </div>

    )
}

export default Siga