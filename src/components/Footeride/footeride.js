import Ide from './ide.png';
import Decor from './decor.png';
import Styles from './footeride.css';

export default function footeride ()
{
    return (
        <div className="container">
            <div className="footer">
                <div className="termos">
                <img src={Decor} alt="Logo Decor"></img>
                <h4>Termos de Uso | Politica de Privacidade | Política de Cookies</h4>
                </div>
                <div className="logo">
                <h4>Realização:</h4>
                <img src={Ide} alt="Logo IDE"></img>
                </div>
            </div>
        </div>
    );
}
