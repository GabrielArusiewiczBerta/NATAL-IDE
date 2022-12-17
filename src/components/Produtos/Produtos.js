import styles from './Produtos.module.css';
import React, {useState,useEffect} from 'react';
import Produtos1 from './Produtos1';
import Produtos2 from './Produtos2';
import Produtos3 from './Produtos3';

function Produtos (){

    const [pagina,setPagina]=useState(1)

    useEffect(
        ()=>{
            const url=window.location.href
            const res=url.split('?')
            setPagina(res[1])
        }
    )

    const LinksPaginas=(p)=>{

        if(p==1){
            window.open('http://localhost:3000?1','_self')
        }
        else if(p==2){
            window.open('http://localhost:3000?2','_self')
        }
        else if(p==3){
            window.open('http://localhost:3000?3','_self')
        }

    }

    const retornarPagina=()=>{

        if (pagina == 1){
            return <Produtos1 />
        }
        else if (pagina == 2){
            return <Produtos2 />
        }
        else if (pagina == 3){
            return <Produtos3 />
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.Padrao}>
            <p className={styles.Titulo}>
                PRODUTOS DISPONÍVEIS
            </p>
            <div className={styles.Barra}>
                <button className={styles.Botoes} onClick={()=>LinksPaginas(1)}><b>Copa do mundo</b></button>
                <button className={styles.Botoes} onClick={()=>LinksPaginas(2)}><b>Natal</b></button>
                <button className={styles.Botoes} onClick={()=>LinksPaginas(3)}><b>Ano novo</b></button>
            </div>
            {retornarPagina ()}
            </div>
        </div>
    )

}

export default Produtos;