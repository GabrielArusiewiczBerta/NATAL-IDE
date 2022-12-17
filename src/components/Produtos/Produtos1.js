import styles from './Produtos.module.css';

function Produtos1 (){

    return(
        
            <div className={styles.tabela}>
                <div className={styles.BarraProdutosBranca}>
                    <p className={styles.Texto}>
                        <b>Bandeirinhas</b>
                    </p>
                    <p className={styles.Texto}>
                        Conjunto de bandeirinhas
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 12,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosCinza}>
                    <p className={styles.Texto}>
                        <b>Uniforme Seleção</b>
                    </p>
                    <p className={styles.Texto}>
                        Uniforme da seleção
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 70,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosBranca}>
                    <p className={styles.Texto}>
                        <b>Vuvuzela</b>
                    </p>
                    <p className={styles.Texto}>
                        Pra fazer aquela barulheira dahora
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 30,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosCinza}>
                    <p className={styles.Texto}>
                        <b>Peruca colorida</b>
                    </p>
                    <p className={styles.Texto}>
                        Peruca nas cores verde e amarelo
                    </p>
                    <div className={styles.Bolinha}>
                        <div className={styles.TextoBolinha}>
                            <b>R$ 25,00</b>
                        </div>
                    </div>
                </div>
                <div className={styles.BarraProdutosBranca}>
                    <p className={styles.Texto}>
                        <b>Faixa 100% Jesus</b>
                    </p>
                    <p className={styles.Texto}>
                        Faixa utilizada pelo Neymar
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

export default Produtos1