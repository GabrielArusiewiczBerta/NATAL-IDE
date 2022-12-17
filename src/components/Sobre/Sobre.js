import Mesa from './Mesa.png'
import styles from './Sobre.module.css'

function Sobre ()
{
    return(
    <div className={styles.container}>
        <div className={styles.titulo}>
            <p>SOBRE A LOJA</p>
        </div>
        <p className={styles.paragrafo}>
            A loja DecorHouse é a loja ideal para decorar a sua casa em situações festivas. 
         Possuimos decorações para deixar a sua casa com o ambiente que desejar, do natal 
         ao ano novo, temos os produtos que precisa para dar uma levantada na sua casa. 

         A DecorHouse possui os melhores preços da região, vendendo produtos de qualidade pelo 
         melhor preço do mercado. 
        </p>
        <div className={styles.rectangle2}><div className={styles.rectangle1}><i className={styles.comentario}>
            Neste ano devido a proximidade da Copa do Mundo ao Natal estamos fazendo uma promoção futenatalina,
            com decorações de natal e da copa com até 40% de desconto.
        </i></div></div>

        <img className= {styles.imagem} src={Mesa} alt='Mesa'/>

        <div className={styles.legenda}>
            <p>É NA DECORHOUSE QUE VOCÊ ENCONTRA O QUE FAZ A SUA CASA SUA!</p>
        </div> 
    </div>
    )
}

export default Sobre