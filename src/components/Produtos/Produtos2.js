import styles from './Produtos.module.css';

function Produtos2 (){

    return(
        
            <div className={styles.tabela}>
                <div className={styles.BarraProdutosBranca}>
                    <p className={styles.Texto}>
                        <b>Luzinhas</b>
                    </p>
                    <p className={styles.Texto}>
                        Ilumine sua vida
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 15,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosCinza}>
                    <p className={styles.Texto}>
                        <b>Presépio</b>
                    </p>
                    <p className={styles.Texto}>
                        O Senhor é meu pastor
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 50,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosBranca}>
                    <p className={styles.Texto}>
                        <b>Fantasia de Papai Noel</b>
                    </p>
                    <p className={styles.Texto}>
                        Do tamanho certo pro JP
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 30,00</b>
                        </div>
                    </div>
                </div>
            </div>

    )

}

export default Produtos2