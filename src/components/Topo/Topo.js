import FotoNatal from './ArvoreNatal.png';
import styles from './Topo.module.css';

function Topo (){

    return (

    <div className={styles.container}>
        <img className={styles.FotoTopo} src={FotoNatal} alt='Foto Natal'></img>
        <p className={styles.Degrade}></p>
        <h2 className={styles.FraseTopo}>Promoção de Natal na DecorHouse!</h2>
    </div>
    )
}

export default Topo