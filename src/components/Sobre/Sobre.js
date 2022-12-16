import Mesa from './Mesa.png'
import styles from './Sobre.module.css'

function Sobre ()
{
    <div className={styles.container}>

        <title className={styles.titulo}>
            SOBRE A LOJA
        </title>
        <p className={styles.paragrafo}>
            A loja DecorHouse é a loja ideal para decorar a sua casa em situações festivas. 
         Possuimos decorações para deixar a sua casa com o ambiente que desejar, do natal 
         ao ano novo, temos os produtos que precisa para dar uma levantada na sua casa. 

         A DecorHouse possui os melhores preços da região, vendendo produtos de qualidade pelo 
         melhor preço do mercado. 
        </p>

        <i className={styles.comentario}>
            Neste ano devido a proximidade da Copa do Mundo ao Natal estamos fazendo uma promoção futenatalina,
            com decorações de natal e da copa com até 40% de desconto.
        </i>

        <igm className= {styles.imagem} src={Mesa} alt='Mesa'/>

        <p className={styles.legenda}>
            É NA DECORHOUSE QUE VOCÊ ENCONTRA O QUE FAZ A SUA CASA SUA!
        </p>
    </div>
}
export default Sobre