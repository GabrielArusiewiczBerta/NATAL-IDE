import styles from './Produtos.module.css';

function Produtos3 (){

    return(
        
            <div className={styles.tabela}>
                <div className={styles.BarraProdutosBranca}>
                    <p className={styles.Texto}>
                        <b>Champagne</b>
                    </p>
                    <p className={styles.Texto}>
                        Claramente não vem de Champagne
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 40,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosCinza}>
                    <p className={styles.Texto}>
                        <b>Roupa branca</b>
                    </p>
                    <p className={styles.Texto}>
                        Não adianta se tu vive arrumando briga
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 80,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosBranca}>
                    <p className={styles.Texto}>
                        <b>Enfeites genéricos</b>
                    </p>
                    <p className={styles.Texto}>
                        Para uma festa genérica
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 60,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosCinza}>
                    <p className={styles.Texto}>
                        <b>Fogos de artifício</b>
                    </p>
                    <p className={styles.Texto}>
                        Pesadelo dos pets
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 25,00</b>
                        </div>
                    </div>
                </div>
            </div>

    )

}

export default Produtos3