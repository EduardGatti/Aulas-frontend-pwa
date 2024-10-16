import { useState } from "react"
import Principal from "../../comum/componentes/Principal/Principal"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

const PaginaListaTarefas = () => {
    const [descricao, setDescricao] = useState("");
    const [tarefas, setTarefas] = useState([]);
    const adcionarNaLista = () => {

        setTarefas([...tarefas, descricao]);
        setDescricao("");

    };

    return (

        <Principal titulo="Lista de Tarefas" voltarPara="/">
            <div>

                <input type="text" value={descricao} onChange={(event) => {

                    setDescricao(event.target.value);

                }} />
                <BotaoCustomizado aoClicar={adcionarNaLista}>
                    +
                </BotaoCustomizado>


            </div>

            <ul>

                {tarefas.map((item, index) => {

                    return <li key={index}>{item}</li>

                })}

            </ul>

        </Principal>
    )

}
export default PaginaListaTarefas